import tasks from '../data/tasks.json';
import lists from '../data/lists.json';


export const mockFetchTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        });
    });
};

export const mockFetchLists = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lists);
        });
    });
};


export const mockCreateTask = (taskList) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(taskList);
        });
    });
};