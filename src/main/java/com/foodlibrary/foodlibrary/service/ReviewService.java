package com.foodlibrary.foodlibrary.service;


import com.foodlibrary.foodlibrary.entity.Review;
import com.foodlibrary.foodlibrary.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository repository;


    public int reviewCount(String prdlstreportno){
        return repository.countByPrdlstreportno(prdlstreportno);
    }

    public List<Review> getReviews(String prdlstreportno){
        return repository.findByPrdlstreportno(prdlstreportno);
    }

    public Review getReview(String prdlstreportno,String nickname){
        return repository.findByPrdlstreportnoAndNickname(prdlstreportno,nickname);
    }
}