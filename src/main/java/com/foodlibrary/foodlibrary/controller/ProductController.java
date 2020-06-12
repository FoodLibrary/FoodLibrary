/*
package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PostMapping("/addProducts")
    public List<Product> addProducts(@RequestBody List<Product> products) {
        return service.saveProducts(products);
    }

    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return service.getProducts();
    }

    class RankingComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstLike = first.getLikecount();
            int secondLike = second.getLikecount();
            if (firstLike > secondLike) return -1;
            else if (firstLike < secondLike) return 1;
            else return 0;
        }
    }

    @RequestMapping(value = "api/productRanking", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findProduct() {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        RankingComparator comp = new RankingComparator();
        Collections.sort(list, comp);

        for(int i=0; i < 10 ; i++){
            tmpList.add(list.get(i));
        }

        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public Product findProductById(@PathVariable String id) {

        return service.getProductById(id);
    }

    @RequestMapping(value = "api/productpage/{prdlstreportno}", method = RequestMethod.POST)
    public ResponseEntity<Product> findOneProduct(@PathVariable String prdlstreportno) {
        Product product = service.getOneProduct(prdlstreportno);
        String productname = product.getPrdlstnm().replace(" ","+");
        String buylink = "https://search.shopping.naver.com/search/all.nhn?query=" + productname;
        product.setBuylink(buylink);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }

    @RequestMapping(value = "/searchproduct/{name}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> searchProductAsName(@PathVariable String name) {
        List<Product> products = service.getProductsAsSearch(name);
        //System.out.println(products.toString());
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

}


*/
package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.repository.ProductRepository;
import com.foodlibrary.foodlibrary.service.ProductService;
import com.foodlibrary.foodlibrary.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;
    @Autowired
    private RankService rankService;
    @Autowired
    private ReviewController reviewsController;
    @Autowired
    private UserController userController;
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PostMapping("/addProducts")
    public List<Product> addProducts(@RequestBody List<Product> products) {
        return service.saveProducts(products);
    }

    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return service.getProducts();
    }

    @GetMapping("/product/{id}")
    public Product findProductById(@PathVariable String id) {
        return service.getProductById(id);
    }

    @GetMapping("/productpage/{prdlstreportno}")
    public ResponseEntity<Product> findOneProduct(@PathVariable String prdlstreportno) {
        Product product = service.getOneProduct(prdlstreportno);
        product.setSearchcount(product.getSearchcount() + 1);
        service.updateProduct(product);
        String productname = product.getPrdlstnm().replace(" ", "+");
        String buylink = "https://search.shopping.naver.com/search/all.nhn?query=" + productname;
        product.setBuylink(buylink);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @RequestMapping(value="/productListForZzim", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findProductById2(@RequestBody List<String> prdlstreportno) {
        List<Product> zzimList = new ArrayList();

        for (int i = 0; i < prdlstreportno.size(); i++) {
            Product product = service.getOneProduct(prdlstreportno.get(i));
            zzimList.add(product);
            System.out.println(product);
        }
        return new ResponseEntity<List<Product>>(zzimList,HttpStatus.OK);
    }


    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }


    @RequestMapping(value = "/searchproduct/{name}/{category}/{sort}/{nickname}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> searchProductAsName(@PathVariable String name, @PathVariable String category, @PathVariable String sort, @PathVariable String nickname, @RequestBody String allergyAndDisease) {
        rankService.addword(name);

        List<Product> products;
        List<Product> tmpProducts = new ArrayList<Product>(); // 알러지 필터링
        List<Product> tmpProducts2 = new ArrayList<Product>(); // 지병 필터링
        List<String> allergys = new ArrayList<String>();
        List<String> diseases = new ArrayList<String>();

        //name 입력이 있으면 해당 상품만 검색
        if (!name.equals("없음")) {
            products = service.getProductsAsSearch(name);
        }
        else {
            products = service.getProducts();
        }

        //카테고리가 있으면 카테고리상품만 검색
        if (!category.equals("없음")) {
            products = service.searchCategory(products, category);
        }
        String[] allergyTmp = allergyAndDisease.split("\"allergy\":\"");
        String[] diseaseTmp = allergyAndDisease.split("\"disease\":\"");

        //알러지 유무 판단.
        if (allergyTmp[0].split("\"")[0].equals("알러지없음")) {
            tmpProducts = products;
        } else {
            for (int i = 0; i < allergyTmp.length; i++) {
                String allergySplit = allergyTmp[i].split("\"")[0];
                //내알러지
                if (allergySplit.equals("내 알러지")) {
                    List<String> userAllergys = userController.sendAllergyList(nickname);
                    for (String userAllergy : userAllergys) {
                        allergys.add(userAllergy);
                    }
                }
                //입력받은 알러지
                else {
                    allergys.add(allergySplit);
                }
            }
            //입력받은 알러지와 상품의 알러지 비교
            for (int i = 0; i < products.size(); i++) {
                String[] productAllergy = products.get(i).getAllergy().split(",");
                boolean checkAllergy = true;
                for (int j = 0; j < productAllergy.length; j++) {
                    for (int z = 0; z < allergys.size(); z++) {
                        if (productAllergy[j].equals(allergys.get(z))) {
                            checkAllergy = false;
                        }
                    }
                }
                if (checkAllergy == true) {
                    tmpProducts.add(products.get(i));
                }
            }
        }

        //지병 유무 판단.
        if (diseaseTmp[0].split("\"")[0].equals("질병없음")) {
            tmpProducts2 = tmpProducts;
        } else {
            for (int i = 0; i < diseaseTmp.length; i++) {
                String diseaseSplit = diseaseTmp[i].split("\"")[0];
                //내지병
                if (diseaseSplit.equals("내 질병")) {
                    List<String> userDiseases = userController.sendDiseaseList(nickname);
                    for (String userDisease : userDiseases) {
                        diseases.add(userDisease);
                    }
                }
                //입력받은 알러지
                else {
                    diseases.add(diseaseSplit);
                }
            }
            //입력받은 지병과 상품의 지병 비교
            for (int i = 0; i < tmpProducts.size(); i++) {
                String[] productDisease = tmpProducts.get(i).getDisease().split(",");
                boolean checkDisease = true;
                for (int j = 0; j < productDisease.length; j++) {
                    for (int z = 0; z < diseases.size(); z++) {
                        if (productDisease[j].equals(diseases.get(z))) {
                            checkDisease = false;
                        }
                    }
                }
                if (checkDisease == true) {
                    tmpProducts2.add(tmpProducts.get(i));
                }
            }
        }

        //정렬
        if (sort.equals("좋아요")) {
            tmpProducts2 = productSort(tmpProducts2, new LikeComparator());
        } else if (sort.equals("별점")) {
            tmpProducts2 = productSort(tmpProducts2, new starComparator());
        } else if (sort.equals("리뷰량")) {
            tmpProducts2 = productSort(tmpProducts2, new reviewComparator());
        } else {
        }

        return new ResponseEntity<List<Product>>(tmpProducts2, HttpStatus.OK);
    }
    //좋아요 카운트
    class LikeComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstLike = first.getLikecount();
            int secondLike = second.getLikecount();
            if (firstLike > secondLike) return -1;
            else if (firstLike < secondLike) return 1;
            else return 0;
        }
    }

    //별점 카운트
    class starComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            double firstLike = first.getStaraverage();
            double secondLike = second.getStaraverage();
            if (firstLike > secondLike) return -1;
            else if (firstLike < secondLike) return 1;
            else return 0;
        }
    }

    //리뷰 카운트
    class reviewComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstCount = reviewsController.getReviewCount(first.getPrdlstreportno());
            int secondCount = reviewsController.getReviewCount(second.getPrdlstreportno());
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //정렬
    public List<Product> productSort(List<Product> products, Comparator<Product> comp) {
        List<Product> productSort = products;
        Collections.sort(productSort, comp);

        return productSort;
    }


    //실시간 클릭량 카운트
    class SearchCountComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstCount = first.getSearchcount();
            int secondCount = second.getSearchcount();
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //실시간 클릭량 랭킹
    @RequestMapping(value = "/productSearchRanking", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findSearchRanking() {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        SearchCountComparator comp = new SearchCountComparator();
        Collections.sort(list, comp);

        for (int i = 0; i < 12; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    //실시간 클릭량 랭킹 (상품명), 랭킹바에 필요.
    @RequestMapping(value = "/productSearchRankingPrdnm", method = RequestMethod.POST)
    public ResponseEntity<List<String>> findSearchRankingPrdnm() {
        List<Product> list = service.getProducts();
        List<String> tmpList = new ArrayList<String>();

        SearchCountComparator comp = new SearchCountComparator();
        Collections.sort(list, comp);

        for (int i = 0; i < 10; i++) {
            tmpList.add(list.get(i).getPrdlstnm());
        }
        return new ResponseEntity<List<String>>(tmpList, HttpStatus.OK);
    }

    //리뷰량 랭킹
    @RequestMapping(value = "/productReviewRanking", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findReviewRanking() {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        reviewComparator comp = new reviewComparator();
        Collections.sort(list, comp);

        for (int i = 0; i < 12; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }


    //남자 성별 카운트
    class ManCountComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstCount = userController.likeManOfUserCount(first.getPrdlstreportno());
            int secondCount = userController.likeManOfUserCount(second.getPrdlstreportno());
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //여자 성별 카운트
    class WomanCountComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            int firstCount = userController.likeWoManOfUserCount(first.getPrdlstreportno());
            int secondCount = userController.likeWoManOfUserCount(second.getPrdlstreportno());
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //성별 랭킹
    @RequestMapping(value = "/productSexRanking/{sex}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findSexRanking(@PathVariable String sex) {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        if (sex.equals("남자")) {
            ManCountComparator comp = new ManCountComparator();
            Collections.sort(list, comp);
        } else if (sex.equals("여자")) {
            WomanCountComparator comp = new WomanCountComparator();
            Collections.sort(list, comp);
        }

        for (int i = 0; i < 12; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    //나이별 정렬
    class AgeCountComparator implements Comparator<Product> {
        String age;

        AgeCountComparator(String age) {
            this.age = age;
        }

        @Override
        public int compare(Product first, Product second) {
            int firstCount = userController.ageCount(first.getPrdlstreportno(), age);
            int secondCount = userController.ageCount(second.getPrdlstreportno(), age);
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //나이별 랭킹
    @RequestMapping(value = "/productAgeRanking/{age}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findAgeRanking(@PathVariable String age) {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        AgeCountComparator comp = new AgeCountComparator(age);
        Collections.sort(list, comp);

        for (int i = 0; i < 12; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    //카테고리로 검색
    @RequestMapping(value = "/searchAsCategory", method = RequestMethod.POST)
    public ResponseEntity<List<List<Product>>> searchAsCategory(@RequestBody Map<String, String> param) {
        String category = param.get("category");

        List<Product> listlike = service.searchAsCategory(category, "likecount");
        List<Product> listzzim = service.searchAsCategory(category, "zzimcount");
        List<Product> liststar = service.searchAsCategory(category, "staraverage");
        List<List<Product>> list = new ArrayList<>();
        list.add(listlike);
        list.add(listzzim);
        list.add(liststar);

        return new ResponseEntity<List<List<Product>>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = "/productnmByName/{productName}", method = RequestMethod.POST)
    public ResponseEntity<String> productnmByName(@PathVariable String productName) {
        Product product = service.getProductByName(productName);
        return new ResponseEntity<String>(product.getPrdlstreportno(), HttpStatus.OK);
    }


}
