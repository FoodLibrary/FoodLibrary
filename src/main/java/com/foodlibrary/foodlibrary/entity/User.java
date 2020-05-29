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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="nickname")
    private String nickname;

    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @Column(name="birthday")
    private String birthday;

    @Column(name="sex")
    private String sex;

    @Column(name="useralergy")
    private String useralergy;

    @Column(name="userdisease")
    private String userdisease;

    @Column(name="phonenumber")
    private String phonenumber;

    @Column(name="email")
    private String email;
}
