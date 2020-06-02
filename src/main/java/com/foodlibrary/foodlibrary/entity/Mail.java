package com.foodlibrary.foodlibrary.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Mail {
    private String address;
    private String title;
    private String message;
}
