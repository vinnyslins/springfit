package com.springfit.api.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "sf_train")
public class Train {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idTrain;

    @ManyToOne
    private Instructor instructor;

    @ManyToOne
    private Learner learner;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    public Instructor getInstructor() {
        return instructor;
    }

    public void setInstructor(Instructor instructor) {
        this.instructor = instructor;
    }

    public Learner getLearner() {
        return learner;
    }

    public void setLearner(Learner learner) {
        this.learner = learner;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public long getIdTrain() {
        return idTrain;
    }

    public void setIdTrain(long idTrain) {
        this.idTrain = idTrain;
    }
}
