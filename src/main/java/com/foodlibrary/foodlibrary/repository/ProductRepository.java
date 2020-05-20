package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, String> {
    Product findByPrdlstreportno(String prdlstreportno);
    List<Product> findByPrdlstnmContaining(String name);
    //Product findByName(String prdlstreportno);
    //Product findByPrdlstreportno(String prdlstreportno);
}
