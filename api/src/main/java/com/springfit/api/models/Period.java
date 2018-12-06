package com.springfit.api.models;

import javax.persistence.*;

@Entity
@Table(name = "sf_period")
public class Period {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPeriod;

    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getIdPeriod() {
        return idPeriod;
    }

    public void setIdPeriod(long idPeriod) {
        this.idPeriod = idPeriod;
    }
}
