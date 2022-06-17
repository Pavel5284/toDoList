import {v1} from "uuid";
import {TodolistType} from "../api/todolists-api";

export let todolistId1 = v1();
export let todolistId2 = v1();

const initialState: TodolistDomainType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}

export const todolistsReducer = (state:Array<TodolistDomainType> = initialState, action:TodolistsReducerType): TodolistDomainType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el=>el.id!==action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = action.todolistId;
            let newTodolist: TodolistDomainType = {id: newTodolistId,
                title: action.payload.title,
                filter: 'all',
                addedDate: '',
                order: 0
            };
          /*  setTodolists([newTodolist, ...todolists]);
            setTasks({
                ...tasks,
                [newTodolistId]: []*/


            return [newTodolist, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE':{
            return state.map(el=>el.id===action.payload.id ? {...el, title:action.payload.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER':{
            return state.map(el=>el.id===action.payload.id ? {...el, filter:action.payload.filter} : el)
        }
        default:
            return state
    }

}

type TodolistsReducerType=RemoveTodolistsReducerType | AddTodolistACType | ChangeTodolistTitleACType | ChangeFilterACType

export type RemoveTodolistsReducerType=ReturnType<typeof removeTodolistAC>

export const removeTodolistAC=(todolistId:string)=> {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        },
        id: todolistId
    }as const
}

export type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC=(title:string)=> {
    return{
        type: 'ADD-TODOLIST',
        payload:{title},
        todolistId: v1()
    } as const
}


type ChangeTodolistTitleACType=ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC=(id:string, title: string)=>{
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id, title
        }
    }as const
}

type ChangeFilterACType=ReturnType<typeof changeFilterAC>
export const changeFilterAC=(filter: FilterValuesType, id:string)=>{
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload:{id, filter}
    }as const
}