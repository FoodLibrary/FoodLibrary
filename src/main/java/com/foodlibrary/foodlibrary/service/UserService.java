package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }
}
