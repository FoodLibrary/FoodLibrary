package com.foodlibrary.foodlibrary.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="ranks")
public class Rank {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    @Column(name="count")
    private int count;

    @Column(name="searchword")
    private String searchword;

}
