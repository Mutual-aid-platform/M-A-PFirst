package com.wx2work.mapplatform.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class mapOrder {
    private int orderNumber;
    private String orderStyle;
    private String orderQuest;
    private String orderDetail;
    private LocalDate orderTime;
    private int orderDone;
}
