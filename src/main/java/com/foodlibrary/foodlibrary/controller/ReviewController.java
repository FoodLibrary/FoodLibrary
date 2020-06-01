package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Review;
import com.foodlibrary.foodlibrary.repository.ReviewRepository;
import com.foodlibrary.foodlibrary.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    ReviewService reviewService;

    @PostMapping("/isUserReview")
    public ResponseEntity<Boolean> isUserReviewExist(@RequestBody String nickname){
        Review reviewData = reviewRepository.findByNickname(nickname);

        if(reviewData == null){
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/reviewCount")
    public ResponseEntity<Long> getReviewCount() {
        return new ResponseEntity<>(reviewRepository.count(), HttpStatus.OK);
    }

    @GetMapping("/starAverage")
    public ResponseEntity<Double> getStarAverage(){
        System.out.println(reviewService.starAverage());
        return new ResponseEntity<>(reviewService.starAverage(),HttpStatus.OK);
    }

    @GetMapping("/allReviews")
    public ResponseEntity<List<Review>> getAllReviews() {
        try {
            List<Review> reviews = new ArrayList<Review>();
            reviewRepository.findAll().forEach(reviews::add);
            if (reviews.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(reviews, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/review/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable("id") int id) {
        Optional<Review> reviewData = reviewRepository.findById(id);

        if (reviewData.isPresent()) {
            return new ResponseEntity<>(reviewData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/createReview")
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        try {
            Review _review = reviewRepository
                    .save(new Review(review.getReviewdesc(), review.getPrdlstreportno(),
                            review.getNickname(),review.getStar(),
                            review.getReviewimg(),review.getReviewhashtag(),
                            review.getReviewtitle(), review.getDatetime()));
            return new ResponseEntity<>(_review, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/updateReview/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable("id") int id, @RequestBody Review review) {
        Optional<Review> reviewData = reviewRepository.findById(id);

        if (reviewData.isPresent()) {
            Review _review = reviewData.get();
            _review.setReviewdesc(review.getReviewdesc());
            _review.setPrdlstreportno(review.getPrdlstreportno());
            _review.setNickname(review.getNickname());
            _review.setStar(review.getStar());
            _review.setReviewimg(review.getReviewimg());
            _review.setReviewhashtag(review.getReviewhashtag());
            _review.setReviewtitle(review.getReviewtitle());
            return new ResponseEntity<>(reviewRepository.save(_review), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @DeleteMapping("/deleteReview/{id}")
//    public ResponseEntity<HttpStatus> deleteReview(@PathVariable("id") int id) {
//        try {
//            reviewRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//        }
//    }

    @DeleteMapping("/deleteReview/{nickname}")
    public ResponseEntity<HttpStatus> deleteReview(@PathVariable("nickname") String nickname) {
        System.out.println("불림");
        try {
            System.out.println("불림");
            Review r = reviewRepository.findByNickname(nickname);
            System.out.println(r);
            System.out.println("불림");
            System.out.println(r.getId());
            reviewRepository.deleteById(r.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/deleteAllReview")
    public ResponseEntity<HttpStatus> deleteAllReviews() {
        try {
            reviewRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }

    }
}
