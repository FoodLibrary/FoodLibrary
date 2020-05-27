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
        // System.out.println(product.toString());
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }/*
    @GetMapping("/product/{name}")
    public Product findProductByName(@PathVariable String name){
        return service.getProductByName(name);
    }
*/

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }

    @RequestMapping(value = "/searchproduct/{name}", method = RequestMethod.POST)
    public ResponseEntity<List<Product>> searchProductAsName(@PathVariable String name, @RequestBody String allergy) {
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
        //System.out.println(products.toString());
    }
}


