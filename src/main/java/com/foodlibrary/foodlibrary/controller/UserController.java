package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.entity.User;
import com.foodlibrary.foodlibrary.entity.Zzim;
import com.foodlibrary.foodlibrary.repository.UserRepository;
import com.foodlibrary.foodlibrary.service.LikeService;
import com.foodlibrary.foodlibrary.service.ProductService;
import com.foodlibrary.foodlibrary.service.UserService;
import com.foodlibrary.foodlibrary.service.ZzimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    LikeService likeService;

    @Autowired
    ProductService productService;

    @Autowired
    ZzimService zzimService;

    @Autowired
    LikeController likeController;

    @Autowired
    UserRepository userRepository;

    //일단 여기가 회원가입
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        System.out.println(user.toString());
        if (userService.existUser(user.getNickname(), user.getPassword())) {
            return new ResponseEntity<Void>(HttpStatus.FORBIDDEN);
        } else {
            userService.saveUser(user);

            return new ResponseEntity<Void>(HttpStatus.CREATED);
        }
    }

    //아이디중복검사함수
    @GetMapping("/checknickname/{nickname}")
    public ResponseEntity<Void> checkNickname(@PathVariable String nickname){
        System.out.println(nickname);
        boolean flag = userRepository.existsByNickname(nickname);
        System.out.println(flag);
        if(flag ==false)
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @PostMapping("/updateUser/{nickname}")
    public ResponseEntity<User> updateReview(@PathVariable("nickname") String nickname, @RequestBody User user) {
        User userData = userService.getOneUser(nickname);
        if (userData != null) {
            User _user = userData;
            _user.setEmail(user.getEmail());
            _user.setPassword(user.getPassword());
            _user.setUseralergy(user.getUseralergy());
            _user.setUserdisease(user.getUserdisease());
            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/getuser/{nickname}", method = RequestMethod.POST)
    public ResponseEntity<User> getUser(@PathVariable String nickname) {
        User user = userService.getOneUser(nickname);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/userlike/{nickname}")
    public ResponseEntity<List<Product>> sendLikeList(@PathVariable String nickname){
        List<Like> likeList = likeService.getLikesAsNickname(nickname);
        List<Product> productList = new ArrayList<Product>();

        for(int i=0;i<likeList.size();i++) {
            Product product = productService.getOneProduct(likeList.get(i).getPrdlstreportno());
            productList.add(product);
        }
        if(productList.size()==0){
            return new ResponseEntity<List<Product>>(HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
        }
    }

    @GetMapping("/userzzim/{nickname}")
    public ResponseEntity<List<Product>> sendZzimList(@PathVariable String nickname) {
        List<Zzim> zzimList = zzimService.getZzimAsNickname(nickname);
        List<Product> productList = new ArrayList<Product>();

        for (int i = 0; i < zzimList.size(); i++) {
            Product product = productService.getOneProduct(zzimList.get(i).getPrdlstreportno());
            productList.add(product);
        }
        if (productList.size() == 0) {
            return new ResponseEntity<List<Product>>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
        }
    }
    //좋아요 누른 남자 count
    public int likeManOfUserCount(String productNo) {
        List<String> likeUser = likeController.getLikeUser(productNo);
        int count = 0;
        for (int i = 0; i < likeUser.size(); i++) {
            if (userService.getOneUser(likeUser.get(i)).getSex().equals("남자")) count++;
        }
        return count;
    }

    //좋아요 누른 여자 count
    public int likeWoManOfUserCount(String productNo) {
        List<String> likeUser = likeController.getLikeUser(productNo);
        int count = 0;
        for (int i = 0; i < likeUser.size(); i++) {
            if (userService.getOneUser(likeUser.get(i)).getSex().equals("여자")) count++;
        }
        return count;
    }

    //좋아요 누른 10,20,30,40,50,60이상 카운트
    //age는 String으로 10대, 20대, 30대 ... 로 받아온다.
    public int ageCount(String productNo, String age) {
        List<String> likeUser = likeController.getLikeUser(productNo);
        int count = 0;

        if (age.equals("10대")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 0 && userAge < 20) count++;
            }
        }
        else if (age.equals("20대")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 19 && userAge < 30) count++;
            }
        }
        else if (age.equals("30대")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 29 && userAge < 40) count++;
            }
        }
        else if (age.equals("40대")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 39 && userAge < 50) count++;
            }
        }

        else if (age.equals("50대")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 49 && userAge < 60) count++;
            }
        }

        else if (age.equals("60대이상")) {
            for (int i = 0; i < likeUser.size(); i++) {
                String userBirthday = userService.getOneUser(likeUser.get(i)).getBirthday();
                int userAge = ageCal(userBirthday);
                if (userAge > 59) count++;
            }
        }

        return count;
    }

    public int ageCal(String birthday){
        Calendar cal = Calendar.getInstance();
        String[] ub = birthday.split("-");
        int year = Integer.parseInt(ub[0]);
        int userAge = cal.get(cal.YEAR) - year;
        return userAge;
    }

    @GetMapping("/userallergy/{nickname}")
    public ResponseEntity<List<String>> sendAllergyList(@PathVariable String nickname) {
        User user = userService.getOneUser(nickname);
        String[] userAllergy = user.getUseralergy().split(",");

        if(userAllergy[0].equals("없음")){
            return new ResponseEntity<List<String>>(HttpStatus.BAD_REQUEST);
        }
        else {
            List<String> splitUserAllergy = new ArrayList<String>();
            for(int i = 0 ; i < userAllergy.length; i++) {
                splitUserAllergy.add(userAllergy[i]);
            }
            return new ResponseEntity<List<String>>(splitUserAllergy, HttpStatus.OK);
        }
    }



}