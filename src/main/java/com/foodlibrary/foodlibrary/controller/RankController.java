package com.foodlibrary.foodlibrary.controller;

import com.foodlibrary.foodlibrary.entity.Rank;
import com.foodlibrary.foodlibrary.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RankController {
    @Autowired
    RankService rankService;

    @GetMapping(value = "/topranking")
    public ResponseEntity<List<String>> topranking(){
        ArrayList<Rank> rankList = rankService.sendtop();
        List<String> stringList= new ArrayList<>();
        for(int i=0;i<rankList.size();i++){
            stringList.add(rankList.get(i).getSearchword());
        }
        return new ResponseEntity<List<String>>(stringList,HttpStatus.OK);
    }
}