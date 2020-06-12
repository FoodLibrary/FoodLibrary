package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.entity.Rank;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

public interface RankRepository extends JpaRepository<Rank, Integer> {

    boolean existsBySearchword(String name);
    Rank findBySearchword(String name);
    ArrayList<Rank> findTop10ByOrderByCountDesc();

}