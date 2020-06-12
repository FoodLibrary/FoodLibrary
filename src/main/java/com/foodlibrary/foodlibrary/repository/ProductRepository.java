package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, String> {
    Product findByPrdlstreportno(String prdlstreportno);
    List<Product> findByPrdlstnmContaining(String name);
    Product findByPrdlstnm(String name);
    @Query("update Product p set p.likecount=?1 where p.prdlstreportno=?2")
    int setFixedCount(int count, String prdlstreportno);

    List<Product> findByCategoryOrderByLikecountDesc(String category);
    List<Product> findByCategoryOrderByZzimcountDesc(String category);
    List<Product> findByCategoryOrderByStaraverageDesc(String category);
}
