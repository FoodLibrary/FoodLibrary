package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Like;
import com.foodlibrary.foodlibrary.entity.Zzim;
import com.foodlibrary.foodlibrary.repository.ZzimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZzimService {
    @Autowired
    ZzimRepository zzimRepository;

    public Zzim findLike(Zzim zzim){
        return zzimRepository.findByPrdlstreportnoAndNickname(zzim.getPrdlstreportno(),zzim.getNickname());
    }

    public Zzim addZzim(Zzim zzim){
        return zzimRepository.save(zzim);
    }

    public void deleteZzim(Zzim zzim){
        Zzim zzim1 = zzimRepository.findByPrdlstreportnoAndNickname(zzim.getPrdlstreportno(),zzim.getNickname());
        zzimRepository.delete(zzim1);
    }

    public int countZzim(Zzim zzim){
        return zzimRepository.countByPrdlstreportno(zzim.getPrdlstreportno());
    }

    public List<Zzim> getZzimAsNickname(String nickname){
        return zzimRepository.findByNickname(nickname);
    }
}
