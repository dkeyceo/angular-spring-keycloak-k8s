package com.dkey.backend.keycloak.k8s.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class ProductDto {
    @NotBlank
    private String name;
    @Min(0)
    private Double price;

    public ProductDto() {
    }

    public ProductDto(String name, Double price) {
        this.name = name;
        this.price = price;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
    
}
