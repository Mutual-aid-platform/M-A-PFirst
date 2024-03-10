package com.wx2work.mapplatform.service.impl;

import com.wx2work.mapplatform.mapper.mapfMapper;
import com.wx2work.mapplatform.pojo.mapOrder;
import com.wx2work.mapplatform.pojo.mapUser;
import com.wx2work.mapplatform.service.mapfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class mapfSerivceImpl  implements mapfService {
    @Autowired
    private mapfMapper mapfmapper;
    @Override
    public void insert(mapOrder maporder, int id) {
        mapfmapper.insert(maporder);
    }

    @Override
    public List<mapUser> select() {
        return mapfmapper.select();
    }

    @Override
    public void delete(int id) {
        mapfmapper.delete(id);
    }

    @Override
    public void update(mapUser mapuser) {
        mapfmapper.update(mapuser);
    }
}
