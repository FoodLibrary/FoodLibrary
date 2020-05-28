package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User getOneUser(String nickname){
        return userRepository.findByNickname(nickname);
    }

    public Boolean existUser(String nickname,String password){
        return userRepository.existsByNicknameAndPassword(nickname,password);
    }
}
