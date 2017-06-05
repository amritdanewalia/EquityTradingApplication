package com.sadp.equity.trading.application.controlller.users;

import com.sadp.equity.trading.application.data.User;
import com.sadp.equity.trading.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

/**
 * Created by adanew on 6/5/2017.
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(name = "/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    Response getUsers(@QueryParam("userId") String userId) {
        if (StringUtils.isEmpty(userId)) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid userId").build();
        }

        User dbUser = userService.getUser(userId);

        if (dbUser == null) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid userId").build();
        }
        return Response.ok(new com.sadp.equity.trading.application.controlller.users.User(dbUser.getUserId(), dbUser.getName())).build();
    }
}

