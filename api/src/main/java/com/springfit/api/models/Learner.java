package com.springfit.api.models;

import javax.persistence.*;

@Entity
@Table(name = "sf_learner")
public class Learner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long learnerId;

    @OneToOne
    private User user;

    public long getLearnerId() {
        return learnerId;
    }

    public void setLearnerId(long learnerId) {
        this.learnerId = learnerId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
