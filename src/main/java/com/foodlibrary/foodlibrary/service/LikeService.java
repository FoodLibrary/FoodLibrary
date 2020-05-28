package com.foodlibrary.foodlibrary.service;


import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Zzim;
import com.foodlibrary.foodlibrary.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LikeService {
    @Autowired
    LikeRepository likeRepository;

    public Like findLike(Like like){
        return likeRepository.findByPrdlstreportnoAndNickname(like.getPrdlstreportno(),like.getNickname());
    }

    public Like addLike(Like like){
        return likeRepository.save(like);
    }

    public void deleteLike(Like like){
        Like like1 = likeRepository.findByPrdlstreportnoAndNickname(like.getPrdlstreportno(),like.getNickname());
        likeRepository.delete(like1);
    }

    public int countLike(Like like){
        return likeRepository.countByPrdlstreportno(like.getPrdlstreportno());
    }

    public List<String> getProductLikeCount(String name){
        List<Like> likes = likeRepository.findAllByPrdlstreportno(name);
        List<String> likeUser = new ArrayList<String>();
        for(int i=0; i<likes.size(); i++){
            likeUser.add(likes.get(i).getNickname());
        }
        return likeUser;
    }
}
