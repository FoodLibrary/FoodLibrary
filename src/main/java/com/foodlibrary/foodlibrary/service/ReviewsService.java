package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Reviews;
import com.foodlibrary.foodlibrary.repository.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewsService {
    @Autowired
    ReviewsRepository reviewsRepository;

    public Reviews addReview(Reviews reviews){
        return reviewsRepository.save(reviews);
    }
    public List<Reviews> getReviews(String prdlstreportno){
        return reviewsRepository.findByPrdlstreportno(prdlstreportno);
    }
}
