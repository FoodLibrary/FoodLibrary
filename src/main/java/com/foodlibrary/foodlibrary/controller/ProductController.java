
package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Product;
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
        product.setSearchcount(product.getSearchcount()+1);
        service.updateProduct(product);
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

    //이전것
    /*@PostMapping("/searchproduct/{name}")
    public ResponseEntity<List<Product>> searchProductAsName(@PathVariable String name, @RequestBody String allergy) {
        rankService.addword(name);
        List<Product> products = service.getProductsAsSearch(name);
        List<Product> tmpProducts = new ArrayList<Product>();
        String allergys = allergy.toString();

        if (allergy.equals("\\[]")) {
            return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
        }
        else {
            //불 필요한 단어 삭제
            String tmp = allergys.replaceAll("\\{\"allergy\":\"","");
            String tmp4 = tmp.replaceAll("\\[","");
            tmp = tmp4.replaceAll("\\]","");
            tmp4 = tmp.replaceAll("\"\\}","");

            //삭제 후 단어 나누기
            String[] replaceAllergy = tmp4.split(",");

            //입력받은 알러지와 상품의 알러지 비교
            for (int i = 0; i < products.size(); i++) {
                String[] productAllergy = products.get(i).getAllergy().split(",");
                boolean check = true;
                for (int j = 0; j < productAllergy.length; j++) {
                    for (int z = 0; z < replaceAllergy.length; z++) {
                        if (productAllergy[j].equals(replaceAllergy[z])) {
                            check = false;
                        }
                    }
                }
                if (check == true) {
                    tmpProducts.add(products.get(i));
                }
            }
            return new ResponseEntity<List<Product>>(tmpProducts, HttpStatus.OK);
        }
    }*/
    @RequestMapping(value = "/searchproduct/{name}/{sort}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> searchProductAsName(@PathVariable String name, @PathVariable String sort, @RequestBody String allergy) {
        List<Product> products = service.getProductsAsSearch(name);
        List<Product> tmpProducts = new ArrayList<Product>();
        String allergys = allergy.toString();

        //알러지 유무 판단.
        if (allergys.equals("\\[]")) {
            tmpProducts = products;
        } else {
            //불 필요한 단어 삭제
            String tmp = allergys.replaceAll("\\{\"allergy\":\"", "");
            String tmp4 = tmp.replaceAll("\\[", "");
            tmp = tmp4.replaceAll("\\]", "");
            tmp4 = tmp.replaceAll("\"\\}", "");

            //삭제 후 단어 나누기
            String[] replaceAllergy = tmp4.split(",");

            //입력받은 알러지와 상품의 알러지 비교
            for (int i = 0; i < products.size(); i++) {
                String[] productAllergy = products.get(i).getAllergy().split(",");
                boolean check = true;
                for (int j = 0; j < productAllergy.length; j++) {
                    for (int z = 0; z < replaceAllergy.length; z++) {
                        if (productAllergy[j].equals(replaceAllergy[z])) {
                            check = false;
                        }
                    }
                }
                if (check == true) {
                    tmpProducts.add(products.get(i));
                }
            }
        }

        //정렬
        if (sort.equals("좋아요")) {
            tmpProducts = productSort(tmpProducts, new LikeComparator());
        } else if (sort.equals("별점")) {
            tmpProducts = productSort(tmpProducts, new starComparator());
        } else if (sort.equals("리뷰량")) {
            tmpProducts = productSort(tmpProducts, new reviewComparator());
        } else {
        }

        return new ResponseEntity<List<Product>>(tmpProducts, HttpStatus.OK);
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
            ReviewController reviewsController = new ReviewController();

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

        for (int i = 0; i < 10; i++) {
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

        for (int i = 0; i < 10; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }


    //남자 성별 카운트
    class ManCountComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            UserController uc = new UserController();
            int firstCount = uc.likeManOfUserCount(first.getPrdlstnm());
            int secondCount = uc.likeManOfUserCount(second.getPrdlstnm());
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //여자 성별 카운트
    class WomanCountComparator implements Comparator<Product> {
        @Override
        public int compare(Product first, Product second) {
            UserController uc = new UserController();
            int firstCount = uc.likeWoManOfUserCount(first.getPrdlstnm());
            int secondCount = uc.likeWoManOfUserCount(second.getPrdlstnm());
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //성별 랭킹
    @RequestMapping(value = "api/productSexRanking/{sex}", method = RequestMethod.POST)
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

        for (int i = 0; i < 10; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    //나이별 정렬
    class AgeCountComparator implements Comparator<Product> {
        String age;
        AgeCountComparator(String age){
            this.age= age;
        }
        @Override
        public int compare(Product first, Product second) {
            UserController uc = new UserController();
            int firstCount = uc.ageCount(first.getPrdlstnm(),age);
            int secondCount = uc.ageCount(second.getPrdlstnm(),age);
            if (firstCount > secondCount) return -1;
            else if (firstCount < secondCount) return 1;
            else return 0;
        }
    }

    //나이별 랭킹
    @RequestMapping(value = "api/productAgeRanking/{age}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> findAgeRanking(@PathVariable String age) {
        List<Product> list = service.getProducts();
        List<Product> tmpList = new ArrayList<Product>();

        AgeCountComparator comp = new AgeCountComparator(age);
        Collections.sort(list, comp);

        for (int i = 0; i < 10; i++) {
            tmpList.add(list.get(i));
        }
        return new ResponseEntity<List<Product>>(tmpList, HttpStatus.OK);
    }

    //카테고리로 검색
    @RequestMapping(value="/searchAsCategory", method = RequestMethod.POST)
    public ResponseEntity<List<List<Product>>> searchAsCategory(@RequestBody Map<String,String> param){
        String category = param.get("category");

        List<Product> listlike = service.searchAsCategory(category,"likecount");
        List<Product > listzzim = service.searchAsCategory(category, "zzimcount");
        List<Product> liststar = service.searchAsCategory(category,"staraverage");
        List<List<Product>> list = new ArrayList<>();
        list.add(listlike);
        list.add(listzzim);
        list.add(liststar);

        return new ResponseEntity<List<List<Product>>>(list,HttpStatus.OK);
    }
}

