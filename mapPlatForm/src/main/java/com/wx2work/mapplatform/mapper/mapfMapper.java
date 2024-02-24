package com.wx2work.mapplatform.mapper;

import com.wx2work.mapplatform.pojo.mapUser;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface mapfMapper {
    @Insert("insert into mapdb.map_user(id, name, wx_name,order_style, order_quest,order_detail, order_time, order_done) " +
            "values(#{id},#{name}, #{wxName}, #{orderStyle},#{orderQuest},#{orderDetail},#{orderTime},#{orderDone})")
    void insert(mapUser mapuser);

   @Select("select * from mapdb.map_user")
    List<mapUser> select();

   @Delete("delete from mapdb.map_user where id=#{id}")
    void delete(int id);

   @Update("update mapdb.map_user " +
           "set name = #{name}, wx_name = #{wxName}, order_style = #{orderStyle},order_quest = #{orderQuest},order_detail = #{orderDetail}, order_time = #{orderTime}, order_done = #{orderDone}")
    void update(mapUser mapuser);
}
