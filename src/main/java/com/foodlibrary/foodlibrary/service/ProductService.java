package com.foodlibrary.foodlibrary.service;

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public Product getOneProduct(String prdlstreportno){
        return repository.findByPrdlstreportno(prdlstreportno);
    }

    public Product getOneProductByName(String prdlstnm) { return repository.findByPrdlstnm(prdlstnm);}

    public Product saveProduct(Product product){
        return repository.save(product);
    }

    public List<Product> saveProducts(List<Product> products){
        return repository.saveAll(products);
    }

    public List<Product> getProducts(){
        System.out.println(repository.findAll().toString());
        return repository.findAll();
    }

    public Product getProductById(String id){
        System.out.println(repository.findById(id).orElse(null).toString());
        return repository.findById(id).orElse(null);
    }
/*
    public Product getProductByName(String name){
        return repository.findByName(name);
    }
*/
    public String deleteProduct(String id){
        repository.deleteById(id);
        return "product removed" + id;
    }

    public Product updateProduct(Product product){
        Product existingProduct = repository.findById(product.getPrdlstreportno()).orElse(null);
        existingProduct.setPrdlstnm(product.getPrdlstnm());
        existingProduct.setManufacture(product.getManufacture());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setImg((product.getImg()));
        existingProduct.setRawmtrl(product.getRawmtrl());
        existingProduct.setNutrient(product.getNutrient());
        existingProduct.setAllergy(product.getAllergy());
        existingProduct.setProductHashtag(product.getProductHashtag());
        existingProduct.setLikecount(product.getLikecount());
        existingProduct.setZzimcount(product.getZzimcount());

        return repository.save(existingProduct);
    }

}
