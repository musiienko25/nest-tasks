import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.module';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
      this.tasks;
    }

    createTask(title: string, description: string): Task {
      const task: Task = {
        id: uuidv4(),
        title,
        description,
        status: TaskStatus.OPEN
      }
      this.tasks.push(task)
      return task;
    }

    getTaskByid(id: string): Task {
      return this.tasks.find((task) => task.id === id)
    }

    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id === id)
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
      const task = this.getTaskByid(id)
      task.status = status;
      return task;
    }
}
