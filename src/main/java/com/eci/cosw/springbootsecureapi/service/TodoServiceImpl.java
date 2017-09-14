package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private List<Todo> todos=new ArrayList<Todo>();

    @Autowired
    public TodoServiceImpl(){
        
    }

    @Override
    public List<Todo> getTodoList() {
        return todos;
    }

    @Override
    public Todo addTodo(Todo todo) {
        todos.add(todo);
        return todos.get(todos.size()-1);
    }
}
