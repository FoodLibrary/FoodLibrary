package com.foodlibrary.foodlibrary.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    private String id;

    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @Column(name="birthday")
    private String birthday;

    @Column(name="sex")
    private String sex;

    @Column(name="userAlergy")
    private String userAlergy;

    @Column(name="userDisease")
    private String userDisease;

    @Column(name="phoneNumber")
    private String phoneNumber;

    @Column(name="email")
    private String email;
}
