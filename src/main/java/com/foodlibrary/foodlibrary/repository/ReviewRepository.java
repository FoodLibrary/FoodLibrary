package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findByReviewtitleContaining(String title);
    Review findByNickname(String nickname);
}