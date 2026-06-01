package com.example.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller exposing simple endpoints for Student demo.
 */
@RestController
public class StudentController {

    // GET / -> Welcome message
    @GetMapping("/")
    public String home() {
        return "Welcome to Student REST API";
    }

    // GET /student -> return a sample Student JSON
    @GetMapping("/student")
    public Student getSampleStudent() {
        return new Student(1L, "Rahul", "CSE");
    }

    // POST /student -> accept Student JSON and echo it back
    @PostMapping("/student")
    public Student createStudent(@RequestBody Student student) {
        // In a real app you'd save to a DB — here we just return what we received
        return student;
    }
}
