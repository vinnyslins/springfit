package com.springfit.api.models;

import javax.persistence.*;

@Entity
@Table(name = "sf_exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idExercise;

    private String name;

    public long getIdExercise() {
        return idExercise;
    }

    public void setIdExercise(long idExercise) {
        this.idExercise = idExercise;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
