<<<<<<< HEAD
import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {TaskPriorities, TaskStatuses} from "./api/todolists-api";
=======

import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {TaskType} from "./Todolist";
>>>>>>> c63cd4c7e8abcfaedb972b3ee90da3158e48a524

export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action("Status changed");
const changeTaskTitleCallback = action("Title changed");
const removeTaskCallback = action("Task removed");


export const TaskBaseExample = (props: any) => {
    return <>
    <Task
<<<<<<< HEAD
        task={{id:'1', status: TaskStatuses.Completed, title: 'CSS', todoListId: "todolistId1",
        description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}}
=======
        task={{id:'1', isDone: true, title: 'CSS'}}
>>>>>>> c63cd4c7e8abcfaedb972b3ee90da3158e48a524
        changeTaskStatus={changeTaskStatusCallback}
        changeTaskTitle={changeTaskTitleCallback}
        removeTask={removeTaskCallback}
        todolistId={"todolistId1"}
    />
    <Task
<<<<<<< HEAD
        task={{id:'2', status: TaskStatuses.New, title: 'JS', todoListId: "todolistId1",
            description: '', startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}}
=======
        task={{id:'2', isDone: false, title: 'JS'}}
>>>>>>> c63cd4c7e8abcfaedb972b3ee90da3158e48a524
        changeTaskTitle={changeTaskStatusCallback}
        changeTaskStatus={changeTaskTitleCallback}
        removeTask={removeTaskCallback}
        todolistId={"todolistId2"}
    />
    </>
}