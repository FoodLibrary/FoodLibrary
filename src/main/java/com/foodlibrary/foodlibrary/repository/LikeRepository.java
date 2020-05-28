package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Integer> {
    Like findByPrdlstreportnoAndNickname(String prdlstreportno, String nickname);

    int countByPrdlstreportno(String prdlstreportno);

    List<Like> findAllByPrdlstreportno(String name);
}
