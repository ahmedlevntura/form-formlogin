import { postResource } from "./network";

export function login(path , data , success , fail) {
    postResource(
        path , 
        data , 
        success,
        fail,
        
    )
}

export function register(path , data , success , fail) {
    postResource(
        path , 
        data , 
        success,
        fail,
       
    )
}