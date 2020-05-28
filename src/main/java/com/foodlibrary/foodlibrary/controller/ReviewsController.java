package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Reviews;
import com.foodlibrary.foodlibrary.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
public class ReviewsController {

    @Autowired
    ReviewsService reviewsService;

    @RequestMapping(value="/addreview", method= RequestMethod.POST)
    public ResponseEntity<Void> addReview(@RequestBody Reviews reviews, UriComponentsBuilder ucBuilder){
        reviewsService.addReview(reviews);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
    @RequestMapping(value="/getreviews/{id}",method=RequestMethod.GET)
    public ResponseEntity<List<Reviews>> findProductById(@PathVariable String id){
        List<Reviews> reviews = reviewsService.getReviews(id);
        System.out.println(reviews.toString());
        return new ResponseEntity<List<Reviews>>(reviews,HttpStatus.OK);
    }

}
