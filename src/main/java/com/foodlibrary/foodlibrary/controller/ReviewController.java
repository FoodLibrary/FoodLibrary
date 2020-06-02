package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.entity.Review;
import com.foodlibrary.foodlibrary.repository.ReviewRepository;
import com.foodlibrary.foodlibrary.service.ProductService;
import com.foodlibrary.foodlibrary.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    ReviewService reviewService;

    //상품평균별점 업데이트 위해서 생성 updateAverage()에서 사용
    @Autowired
    ProductService productService;

    public int getReviewCount(String prdlstreportno) {
        return reviewService.reviewCount(prdlstreportno);
    }

    @PostMapping("/isUserReview")
    public ResponseEntity<Boolean> isUserReviewExist(@RequestBody Like data){
        Review reviewData = reviewRepository.findByPrdlstreportnoAndNickname(data.getPrdlstreportno(), data.getNickname());
        if(reviewData == null){
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/allReviews/{prdlstreportno}")
    public ResponseEntity<List<Review>> getAllReviews(@PathVariable("prdlstreportno") String prdlstreportno) {
        try {
            List<Review> reviews = new ArrayList<Review>();
            reviewRepository.findAllByPrdlstreportno(prdlstreportno).forEach(reviews::add);
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
        if(reviewService.getReview(review.getPrdlstreportno(),review.getNickname())!=null)
            return new ResponseEntity<Review>(HttpStatus.BAD_REQUEST);
        try {
            updateAverage(review.getPrdlstreportno(),review.getNickname(),review.getStar(),"create");
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
        updateAverage(review.getPrdlstreportno(),review.getNickname(),review.getStar(),"update");
        if (reviewData.isPresent()) {
            Review _review = reviewData.get();
            _review.setReviewdesc(review.getReviewdesc());
            _review.setPrdlstreportno(review.getPrdlstreportno());
            _review.setNickname(review.getNickname());
            _review.setStar(review.getStar());
            _review.setReviewimg(review.getReviewimg());
            _review.setReviewhashtag(review.getReviewhashtag());
            _review.setReviewtitle(review.getReviewtitle());
            updateAverage(review.getPrdlstreportno(),review.getNickname(),review.getStar(),"update");
            return new ResponseEntity<>(reviewRepository.save(_review), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/deleteReview")
    public ResponseEntity<HttpStatus> deleteReview(@RequestBody Like data) {
        System.out.println(data);
        try {
            System.out.println(data);
            Review reviewData = reviewRepository.findByPrdlstreportnoAndNickname(data.getPrdlstreportno(), data.getNickname());
            System.out.println(reviewData);
            reviewRepository.deleteById(reviewData.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    //파라미터 순서 식품번호,닉네임,평균별점,평균벌점종류
    public void updateAverage(String prdlstreportno,String nickname ,double star, String kind){
        Product product = productService.getOneProduct(prdlstreportno);
        Review review = reviewService.getReview(prdlstreportno, nickname);
        int count = reviewService.reviewCount(prdlstreportno);
        double postAverage =0.0;
        List<Review> reviews = reviewService.getReviews(prdlstreportno);
        for(Review review1 : reviews){
            postAverage += review1.getStar();
        }
        if(postAverage != 0){
            postAverage = postAverage / reviews.size();
        }
        switch (kind){
            case "create":
                double addAverage = (postAverage*(double)count + star )/ (count+1);
                product.setStaraverage(addAverage);
                productService.updateProduct(product);
                break;
            case "delete":
                double deleteAverage = 0;
                if(count ==1){
                    deleteAverage = 0;
                }else {
                    deleteAverage = (postAverage * (double) count - star) / (count - 1);
                }
                product.setStaraverage(deleteAverage);
                productService.updateProduct(product);
                break;
            case "update":
                double updateAverage = (postAverage*(double)count - review.getStar() + star )/ (count);
                product.setStaraverage(updateAverage);
                productService.updateProduct(product);
                break;
        }
    }
}