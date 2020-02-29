package com.therealdanvega.tasks.service;

import com.therealdanvega.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();
}
