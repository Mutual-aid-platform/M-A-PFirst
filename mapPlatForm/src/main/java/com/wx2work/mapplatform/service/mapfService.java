package com.wx2work.mapplatform.service;

import com.wx2work.mapplatform.pojo.mapUser;
import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface mapfService {
    void insert(mapUser mapuser);

    List<mapUser> select();

    void delete(int id);

    void update(mapUser mapuser);
}
