package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.LoginUser;
import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class LoginController {
    @Autowired
    UserService userService;

    @PostMapping(value="/login")
    public ResponseEntity<User> login(@Valid @RequestBody LoginUser lu){
        System.out.println(lu.getName() + lu.getPassword());
        Boolean a = userService.existUser(lu.getName(),lu.getPassword());
        if(a == true) {
            User user = userService.getOneUser(lu.getName());
            return new ResponseEntity<User>(user,HttpStatus.OK);
        }else{
            return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
        }

    }
}
