package com.foodlibrary.foodlibrary.repository;

import com.foodlibrary.foodlibrary.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {
    Product findByPrdlstreportno(String prdlstreportno);
    //Product findByName(String prdlstreportno);
    //Product findByPrdlstreportno(String prdlstreportno);
}
