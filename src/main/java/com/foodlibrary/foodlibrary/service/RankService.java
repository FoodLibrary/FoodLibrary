package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Rank;
import com.foodlibrary.foodlibrary.repository.RankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RankService {
    @Autowired
    RankRepository rankRepository;

    public void addword(String serachword) {
        if (!serachword.equals("없음")) {
            if (rankRepository.existsBySearchword(serachword)) {
                Rank rank1 = rankRepository.findBySearchword(serachword);

                rank1.setCount(rank1.getCount() + 1);
                rankRepository.save(rank1);
            } else {
                Rank rank = new Rank();
                rank.setCount(1);
                rank.setSearchword(serachword);
                rankRepository.save(rank);
            }
        }
    }

    public ArrayList<Rank> sendtop() {
        return rankRepository.findTop10ByOrderByCountDesc();
    }
}
