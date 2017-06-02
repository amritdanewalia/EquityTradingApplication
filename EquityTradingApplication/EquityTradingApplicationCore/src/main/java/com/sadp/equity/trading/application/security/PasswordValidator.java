package com.sadp.equity.trading.application.security;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

/**
 * Created by adanew on 6/2/2017.
 */
public interface PasswordValidator {
    String createHash(char[] password) ;

    boolean validatePassword(char[] password, String hash);
}
