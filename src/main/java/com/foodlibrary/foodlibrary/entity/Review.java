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
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="reviewdesc")
    private String reviewdesc;

    @Column(name="prdlstreportno")
    private String prdlstreportno;

    @Column(name="nickname")
    private String nickname;

    @Column(name="star")
    private double star;

    @Column(name="reviewimg")
    private String reviewimg;

    @Column(name="reviewhashtag")
    private String reviewhashtag;

    @Column(name="reviewtitle")
    private String reviewtitle;

    @Column(name="datetime")
    private String datetime;

    public Review(){

    }

    public Review(String reviewdesc, String prdlstreportno, String nickname, double star,
                  String reviewimg, String reviewhashtag, String reviewtitle, String datetime) {
        this.reviewdesc = reviewdesc;
        this.prdlstreportno = prdlstreportno;
        this.nickname = nickname;
        this.star = star;
        this.reviewimg = reviewimg;
        this.reviewhashtag = reviewhashtag;
        this.reviewtitle = reviewtitle;
        this.datetime = datetime;
    }


}