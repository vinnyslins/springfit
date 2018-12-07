package com.springfit.api.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "sf_practice")
public class Practice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPractice;

    @ManyToOne
    private Train train;

    @ManyToOne
    private Exercise exercise;

    private int series;

    private int repeats;

    private boolean done;

    public long getIdPractice() {
        return idPractice;
    }

    public void setIdPractice(long idPractice) {
        this.idPractice = idPractice;
    }

    public Train getTrain() {
        return train;
    }

    public void setTrain(Train train) {
        this.train = train;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    public int getSeries() {
        return series;
    }

    public void setSeries(int series) {
        this.series = series;
    }

    public int getRepeats() {
        return repeats;
    }

    public void setRepeats(int repeats) {
        this.repeats = repeats;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
