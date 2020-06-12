package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.LoginUser;
import com.foodlibrary.foodlibrary.entity.Mail;
import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.service.MailService;
import com.foodlibrary.foodlibrary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

@RestController
public class LoginController {
    @Autowired
    UserService userService;

    @Autowired
    MailService mailService;

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

    //아이디찾기 보내는 값 name,email
    @PostMapping(value="/findnickname")
    public ResponseEntity<Void> execMailforNickname(@RequestBody Map<String,String> param){
        String name = param.get("name");
        String email = param.get("email");
        System.out.println(name+" , "+email);

        if(userService.existUserNickname(name,email)){
            System.out.println("체크");
            User user = userService.getOneUserForFindNickname(name,email);

            Mail mail = new Mail();
            mail.setMessage(user.getNickname());
            mail.setAddress(user.getEmail());
            mail.setTitle("음식도서관에서 회원님의 아이디를 보냈습니다.");
            mailService.mailSend(mail);

            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }

    }


    ///비번찾기 보내는 값 이름 nickname, email
    @PostMapping(value="/findpassword")
    public ResponseEntity<Void> execMailforPassword(@RequestBody Map<String,String> param){
        String name = param.get("name");
        String nickname = param.get("nickname");
        String email = param.get("email");

        if(userService.existUserPassword(name,nickname)){
            User user = userService.getOneUser(nickname);

            Mail mail = new Mail();
            mail.setMessage(user.getPassword());
            mail.setAddress(user.getEmail());
            mail.setTitle("음식도서관에서 회원님의 비밀번호를 보냈습니다.");
            mailService.mailSend(mail);

            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }

    }
}
