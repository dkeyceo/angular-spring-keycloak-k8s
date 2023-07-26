package com.dkey.backend.keycloak.k8s.controller;

import com.dkey.backend.keycloak.k8s.dto.Message;
import com.dkey.backend.keycloak.k8s.dto.ProductDto;
import com.dkey.backend.keycloak.k8s.entity.Product;
import com.dkey.backend.keycloak.k8s.service.ProductService;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<Product>> list(){
        List<Product> list = productService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getById(@PathVariable("id") Long id){
        if (!productService.existsById(id)) {
            return new ResponseEntity(new Message("No exists"), HttpStatus.NOT_FOUND);
        }

        Product product = productService.getOne(id).get();
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }
    
    @GetMapping("/detailname/{name}")
    public ResponseEntity<Product> getByName(@PathVariable("name") String name){
        if (!productService.existsByName(name)) {
            return new ResponseEntity(new Message("No exists"), HttpStatus.NOT_FOUND);
        }

        Product product = productService.getByName(name).get();
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductDto productDto){
    	if(StringUtils.isBlank(productDto.getName())) {
    		return new ResponseEntity(new Message("Name is required"), HttpStatus.BAD_REQUEST);
    	}
    	
    	if(productDto.getPrice() == null || productDto.getPrice() < 0) {
    		return new ResponseEntity(new Message("Price must be greater than 0"), HttpStatus.BAD_REQUEST);
    	}
    	
    	if(productService.existsByName(productDto.getName())) {
    		return new ResponseEntity(new Message("Name is exists"), HttpStatus.BAD_REQUEST);
    	}
    	
    	Product product = new Product(productDto.getName(), productDto.getPrice());
    	productService.save(product);
    	return new ResponseEntity(new Message("New Product created"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody ProductDto productDto){
    	
    	if(!productService.existsById(id)) {
    		return new ResponseEntity(new Message("No product exists for update"), HttpStatus.NOT_FOUND);
    	}
    	
    	if(productService.existsByName(productDto.getName()) && productService.getByName(productDto.getName()).get().getId() != id) {
    		return new ResponseEntity(new Message("It's name exists"), HttpStatus.BAD_REQUEST);
    	}
    	
    	if(StringUtils.isBlank(productDto.getName())) {
    		return new ResponseEntity(new Message("Name is required"), HttpStatus.BAD_REQUEST);
    	}
    	
    	if(productDto.getPrice() == null || productDto.getPrice() < 0) {
    		return new ResponseEntity(new Message("Price must be greater than 0"), HttpStatus.BAD_REQUEST);
    	}
    	
    	Product product = productService.getOne(id).get();
    	product.setName(productDto.getName());
    	product.setPrice(productDto.getPrice());
    	productService.save(product);
    	return new ResponseEntity(new Message("Product updated"), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
    	
    	
    	if(!productService.existsById(id)) {
    		return new ResponseEntity(new Message("Not found for deleting"), HttpStatus.NOT_FOUND);
    	}
    	
    	productService.delete(id);
    	return new ResponseEntity(new Message("Product deleted"), HttpStatus.OK);
    }    
}
