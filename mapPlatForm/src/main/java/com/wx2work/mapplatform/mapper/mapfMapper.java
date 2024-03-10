package com.wx2work.mapplatform.mapper;

import com.wx2work.mapplatform.pojo.mapOrder;
import com.wx2work.mapplatform.pojo.mapUser;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface mapfMapper {
//    @Insert("")
    void insert(mapOrder maporder);

//   @Select("select * from mapdb.map_user")
    List<mapUser> select();

   @Delete("delete from mapdb.map_user where id=#{id}")
    void delete(int id);

   @Update("update mapdb.map_user " +
           "set name = #{name}, wx_name = #{wxName}, order_style = #{orderStyle},order_quest = #{orderQuest},order_detail = #{orderDetail}, order_time = #{orderTime}, order_done = #{orderDone}")
    void update(mapUser mapuser);
}
