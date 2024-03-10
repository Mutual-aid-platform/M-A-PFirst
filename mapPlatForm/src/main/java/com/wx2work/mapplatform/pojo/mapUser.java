package com.wx2work.mapplatform.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class mapUser {
    private int id;
    private String name;
    private String wxName;
}
