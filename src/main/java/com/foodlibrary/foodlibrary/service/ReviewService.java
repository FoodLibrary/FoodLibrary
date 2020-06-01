package com.foodlibrary.foodlibrary.service;


import com.foodlibrary.foodlibrary.entity.Review;
import com.foodlibrary.foodlibrary.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository repository;

    public double starAverage() {
        List<Review> reviews = new ArrayList<Review>();
        repository.findAll().forEach(reviews::add);
        double result = 0;
        for (Review review : reviews) {
            result += review.getStar();
        }
        return Math.round(result /repository.count());
    }
}
