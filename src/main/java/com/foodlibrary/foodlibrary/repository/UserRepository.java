package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByNickname(String nickname);
    Boolean existsByNicknameAndPassword(String nickname,String password);
}

