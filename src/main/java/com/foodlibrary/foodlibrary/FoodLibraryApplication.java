package com.foodlibrary.foodlibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan( basePackages = {"com.foodlibrary.foodlibrary.entity"} )
public class FoodLibraryApplication {

    public static void main(String[] args) {
        SpringApplication.run(FoodLibraryApplication.class, args);
    }

}
