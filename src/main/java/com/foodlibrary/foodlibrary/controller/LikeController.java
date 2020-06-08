package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.service.LikeService;
import com.foodlibrary.foodlibrary.service.ProductService;
import com.foodlibrary.foodlibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LikeController {
    @Autowired
    LikeService likeService;

    @Autowired
    ProductService productService;

    @RequestMapping(value="/addlike",method= RequestMethod.POST)
    public ResponseEntity<Void> addlike(@RequestBody Like like){
        if(likeService.findLike(like) == null){
            likeService.addLike(like);
        }else{
            likeService.deleteLike(like);
        }
        Product product = productService.getOneProduct(like.getPrdlstreportno());
        product.setZzimcount(likeService.countLike(like));
        productService.updateProduct(product);
        System.out.println("check");

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(value="/likeUsers/{productNo}",method= RequestMethod.POST)
    public ResponseEntity<List<String>> getLikeUsers(@PathVariable String productNo) {
        return new ResponseEntity<List<String>>(likeService.getProductLikeCount(productNo),HttpStatus.OK);
    }

    public List<String> getLikeUser(String productNo){
        return likeService.getProductLikeCount(productNo);
    }
}
