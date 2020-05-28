package com.foodlibrary.foodlibrary.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="reviewdesc")
    private String reviewdesc;

    @Column(name="prdlstreportno")
    private String prdlstreportno;

    @Column(name="userid")
    private int userid;

    @Column(name="star")
    private double star;

    @Column(name="reviewimg")
    private String reviewimg;

    @Column(name="reviewhashtag")
    private String reviewhashtag;

    @Column(name="reviewtitle")
    private String reviewtitle;
}
