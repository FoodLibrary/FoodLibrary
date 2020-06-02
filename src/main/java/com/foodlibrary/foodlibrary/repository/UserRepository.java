package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByNickname(String nickname);

    Boolean existsByNicknameAndPassword(String nickname,String password);

    //아이디 찾기용
    Boolean existsByNameAndEmail(String name,String email);

    //아이디 찾기 용
    User findByNameAndEmail(String name,String email);

    //비번 찾기용
    Boolean existsByNameAndNickname(String name,String nickname);
}

