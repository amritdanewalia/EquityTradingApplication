package com.sadp.equity.trading.application.controlller;

import com.sadp.equity.trading.application.data.User;
import com.sadp.equity.trading.application.security.JWTValidator;
import com.sadp.equity.trading.application.security.PasswordValidator;
import com.sadp.equity.trading.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;
    @Autowired
    private PasswordValidator passwordValidator;
    @Autowired
    private JWTValidator jwtValidator;

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    @ResponseBody
    Response login(@RequestBody UserBean userBean) {
        if (StringUtils.isEmpty(userBean.getUserId()) || StringUtils.isEmpty(userBean.getPassword())) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid userId/password").build();
        }

        User dbUser = userService.getUser(userBean.getUserId());

        if (dbUser == null) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid userId/password").build();
        } else if (!passwordValidator.validatePassword(userBean.getPassword(), dbUser.getPassword())) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Invalid userId/password").build();
        }
        String token = jwtValidator.createJWT();
        return Response.ok(token).build();
    }
}
