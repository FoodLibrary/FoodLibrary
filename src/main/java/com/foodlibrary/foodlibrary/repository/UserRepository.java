package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}


