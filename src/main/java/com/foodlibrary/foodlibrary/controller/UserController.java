package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.model.ApiResponse;
import com.foodlibrary.foodlibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        System.out.println(user.toString());
        userService.saveUser(user);

        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/getuser/{nickname}", method = RequestMethod.POST)
    public ResponseEntity<User> getUser(@PathVariable String nickname) {
        User user = userService.getOneUser(nickname);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    public int likeManOfUserCount(String name) {
        LikeController likeController = new LikeController();
        List<String> likeUser = likeController.getLikeUser(name);
        int count = 0;
        for (int i = 0; i < likeUser.size(); i++) {
            if(userService.getOneUser(likeUser.get(i)).getSex().equals("남자")) count++;
        }
        return count;
    }

}