package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Integer> {
    Like findByPrdlstreportnoAndNickname(String prdlstreportno, String nickname);
    List<Like> findAllByPrdlstreportno(String name);
    int countByPrdlstreportno(String prdlstreportno);
}
