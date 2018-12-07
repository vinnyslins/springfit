package com.springfit.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;

@Entity
public class Train  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTrain;

    private User pupil;

    private User trainer;

    private List<Exercise> exercises;

    private Date createDate;

    private Date updateDate;

    private String description;

    private String notes;

    public long getIdTrain() {
        return idTrain;
    }

    public void setIdTrain(long idTrain) {
        this.idTrain = idTrain;
    }

    public User getPupil() {
        return pupil;
    }

    public void setPupil(User pupil) {
        this.pupil = pupil;
    }

    public User getTrainer() {
        return trainer;
    }

    public void setTrainer(User trainer) {
        this.trainer = trainer;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
