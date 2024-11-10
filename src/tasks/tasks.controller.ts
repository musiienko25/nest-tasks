import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.module';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {

    }
    @Get()   
    getTasks() {
      return this.tasksService.getAllTasks()
    }
    @Post()
    createTask(@Body('title') title: string, @Body('description') description: string) : Task {
        return this.tasksService.createTask(title, description)
    }

    @Get()
    getTaskByid(@Param('id') id: string) {
        return this.tasksService.getTaskByid(id)
    }

    
}
