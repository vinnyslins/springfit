package com.springfit.api.models;

import javax.persistence.*;

@Entity
@Table(name = "sf_instructor")
public class Instructor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long instructorId;

    @OneToOne
    private User user;

    @ManyToOne
    private Period period;

    public long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(long instructorId) {
        this.instructorId = instructorId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Period getPeriod() {
        return period;
    }

    public void setPeriod(Period period) {
        this.period = period;
    }
}
