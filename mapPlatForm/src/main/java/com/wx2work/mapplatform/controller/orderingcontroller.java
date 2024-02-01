package com.wx2work.mapplatform.controller;

import com.wx2work.mapplatform.pojo.mapUser;
import com.wx2work.mapplatform.pojo.result;
import com.wx2work.mapplatform.service.mapfService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@Slf4j
@RestController
public class orderingcontroller {
//    @RequestMapping(value = "/mapInter",method = RequestMethod.POST)
@Qualifier("mapfSerivceImpl")
@Autowired
    private mapfService mapfservice;
// 用户新增订单
    @PostMapping("/mapInsert")
    public result mapInsert(@RequestBody mapUser mapuser){
        log.info("新增order数据: {}", mapuser);

        mapfservice.insert(mapuser);
        return result.success();
    }
// 用户查询订单进度
    @GetMapping("/mapSelect")
    public result mapSelect(){
        log.info("查询数据");

       List<mapUser> mapSelectList = mapfservice.select();

        return result.success(mapSelectList);
    }
// 用户更新订单
    @PutMapping("/mapUpdate")
    public result mapUpdate(@RequestBody mapUser mapuser){
        log.info("修改用户数据");

        mapfservice.update(mapuser);

        return result.success();
    }
// 用户删除订单
    @DeleteMapping("/mapDelete/{id}")
//    @PathVariable使用路径的参数
    public result mapDelete(@PathVariable int id){
        log.info("删除数据");

        mapfservice.delete(id);

        return result.success();
    }
}
