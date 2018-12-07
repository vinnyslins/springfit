package com.springfit.api.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "sf_permission")
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idPermission;

    private String description;

    public long getIdPermission() {
        return idPermission;
    }

    public void setIdPermission(long idPermission) {
        this.idPermission = idPermission;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
