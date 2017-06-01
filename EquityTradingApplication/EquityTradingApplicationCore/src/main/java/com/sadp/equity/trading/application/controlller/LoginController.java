package com.sadp.equity.trading.application.controlller;

import com.sadp.equity.trading.application.data.User;
import com.sadp.equity.trading.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(name = "/login", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    @ResponseBody
    Response getUsers(@RequestBody com.sadp.equity.trading.application.controlller.User user) {
        System.out.println("Hello");
        User dbUser = userService.getUser(user.getUserId());
        if (dbUser == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Invalid userId/password").build();
        } else if (!dbUser.getPassword().equals(user.getPassword())) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Invalid userId/password").build();
        }
        return Response.ok().build();
    }
}
