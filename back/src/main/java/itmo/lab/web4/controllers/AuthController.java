package itmo.lab.web4.controllers;

import itmo.lab.web4.models.User;
import itmo.lab.web4.services.AuthService;
import itmo.lab.web4.services.JwtUtil;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;


@RestController()
@RequestMapping("/api")
public class AuthController {
    // можно заменить на map с временем, удалять после 2-х дней 
    private HashSet<String> BanList = new HashSet<String>();


    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user){

        String token = authService.login(user);
        String refresh_token = jwtUtil.generateToken(user.getUsername() + "_refresh", 1000 * 60 * 60 * 24 * 2);
        
        Map<String, String> response = new HashMap<>();

        response.put("access_token", token);
        response.put("refresh_token", refresh_token);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) throws BadRequestException {

        String token = authService.register(user);
        String refresh_token = jwtUtil.generateToken(user.getUsername() + "_refresh", 1000 * 60 * 60 * 24 * 2);

        Map<String, String> response = new HashMap<>();

        response.put("access_token", token);
        response.put("refresh_token", refresh_token);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/refresh")
    public ResponseEntity<Map<String, String>> refresh(@RequestBody Map<String, String> refresh_token){

        Map<String, String> response = new HashMap<>();

        String old_refresh_token = refresh_token.get("refresh_token");

        String refresh_username = jwtUtil.extractUsername(old_refresh_token); // разделить по _

        if(!jwtUtil.validateToken(old_refresh_token, refresh_username) || this.BanList.contains(old_refresh_token)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
        }
        // добавление в бан лист
        this.BanList.add(old_refresh_token);

        String token = jwtUtil.generateToken(refresh_username.split("_")[0], 1000 * 60);
        String new_refresh_token = jwtUtil.generateToken(refresh_username, 1000 * 60 * 60 * 24 * 2);
    
        
        response.put("access_token", token);
        response.put("refresh_token", new_refresh_token);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(@RequestBody Map<String, String> refresh_token){


        Map<String, String> response = new HashMap<>();

        String old_refresh_token = refresh_token.get("refresh_token");

        // добавление в бан лист
        this.BanList.add(old_refresh_token);

        return ResponseEntity.ok(response);
    }


}
