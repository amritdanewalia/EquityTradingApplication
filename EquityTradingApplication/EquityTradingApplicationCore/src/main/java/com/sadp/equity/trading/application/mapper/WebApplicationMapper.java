package com.sadp.equity.trading.application.mapper;


import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * Created by adanew on 5/31/2017.
 */
@Provider
public class WebApplicationMapper implements ExceptionMapper<WebApplicationException> {
    @Override
    public Response toResponse(WebApplicationException exception) {
        return exception.getResponse();
    }
}
