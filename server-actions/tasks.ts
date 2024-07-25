'use server';
import { revalidatePath } from 'next/cache';
import connectDB from '@/config/mongodb.connection';
import Task from '@/models/task.model';
import { getCurrentUserFromMongodb } from './users';

connectDB();

export const createNewTask = async (taskData: any) => {
  try {
    const newTask = await Task(taskData);
    await newTask.save();
    revalidatePath('/profile/tasks');
    return {
      success: true,
      message: 'Task created successfully!',
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const updateTask = async ({
  taskId,
  taskData,
}: {
  taskId: string;
  taskData: any;
}) => {
  try {
    await Task.findByIdAndUpdate(taskId, taskData);
    revalidatePath('/profile/tasks');
    return {
      success: true,
      message: 'Task updated successfully!',
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    await Task.findByIdAndDelete(taskId);
    revalidatePath('/profile/tasks');
    return {
      success: true,
      message: 'Task deleted successfully!',
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getTaskPostedByLoggedInUser = async () => {
  try {
    const loggedInUser = await getCurrentUserFromMongodb();
    const tasks = await Task.find({ user: loggedInUser.data?._id }).sort({
      createdAt: -1,
    });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(tasks)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getTaskById = async (taskId: string) => {
  try {
    const task = await Task.findById(taskId);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(task)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAllTasks = async () => {
  try {
    const task = await Task.find().sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(task)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
