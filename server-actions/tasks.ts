'use server';
import connectDB from '@/config/mongodb.connection';
import Task from '@/models/task.model';
import { getCurrentUserFromMongodb } from './users';

connectDB();

export const createNewTask = async (taskData: any) => {
  try {
    const newTask = await Task(taskData);
    await newTask.save();
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
    const tasks = await Task.find({ postedBy: loggedInUser.data?._id });
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
