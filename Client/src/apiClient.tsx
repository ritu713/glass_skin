import { LoginFormData, RegisterFormData, RoutineData} from "../../Server/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

//auth related fetches
export const createNewUser = async (form_data : RegisterFormData) => {
    console.log("In api call")
    const body = {
        "emailID" : form_data.emailID,
        "password" : form_data.password,
        "createdAt" : new Date(),
        "profile" : {
            "fName" : form_data.fName,
            "lName" : form_data.lName,
            "skinType" : form_data.skinType,
            "skinConcerns" : form_data.skinConcerns
        }
    }
    console.log(form_data.skinConcerns)
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method : "POST",
        credentials : "include",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    });
    console.log("Got response from " + API_BASE_URL)
    const responseBody = await response.json();
    if(!response.ok){
        throw new Error(responseBody);
    }
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {credentials : "include"});
    if(!response.ok){
        throw new Error("Your session has expired")
    }

    return response.json();
}

export const login = async (form_data : LoginFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        credentials : "include",
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(form_data)
    })

    if(!response.ok){
        console.log(response.json())
        throw new Error("Something went wrong")
    }

    return response.json();
}

export const logout = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {credentials : "include", method : "POST"})
    if(!response.ok){
        throw new Error("Error during sign out")
    }
    return response.json()
}

export const fetchCurrentUser = async() => {
    const response = await fetch(`${API_BASE_URL}/api/auth/user`, {
        credentials : "include"
    })

    if(!response.ok){
        throw new Error("Error fetching user details")
    }

    return response.json();
}

//routine route fetches
export const createNewRoutine = async (routine : RoutineData) => {
    const response = await fetch(`${API_BASE_URL}/api/routine/new`, {
        credentials:"include",
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(routine)
    })

    if(!response.ok){
        throw new Error("Something went wrong")
    }

    return response.json();
}

export const fetchAllRoutines = async () => {
    const response = await fetch(`${API_BASE_URL}/api/routine`, {
        credentials : "include"
    })

    if(!response.ok){
        throw new Error("Something went wrong")
    }

    return response.json();
}

export const deleteRoutine = async (routineID : string) => {
    console.log(routineID)
    const response = await fetch(`${API_BASE_URL}/api/routine/delete/:${routineID}`)

    if(!response.ok){
        throw new Error("Something went wrong")
    }

    return response.json()
}
