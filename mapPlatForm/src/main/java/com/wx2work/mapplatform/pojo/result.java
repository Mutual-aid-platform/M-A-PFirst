package com.wx2work.mapplatform.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class result {
    private Integer code;
    private String msg;
    private Object data;

//查询成功
    public static result success(Object data){
        return new result(1, "success", data);
    }
//    新增提交成功
    public static result success(){
        return new result(1, "success", null);
    }
//   错误提交
    public static result error(){
        return new result(0, "false", null);
    }
}
