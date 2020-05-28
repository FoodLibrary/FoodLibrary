package com.foodlibrary.foodlibrary.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Data
@Entity
@Table(name = "zzims")
public class Zzim {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="prdlstreportno")
    private String prdlstreportno;

    @Column(name="nickname")
    private String nickname;
}
