export type RegisterFormData = {
    emailID : string,
    password : string,
    confirmPassword : string,
    fName : string,
    lName : string,
    skinType : string,
    skinConcerns : string[]
}

export type LoginFormData = {
    emailID : string,
    password : string
}

export type User = {
    emailID : string,
    createdAt : Date,
    profile : {
        fName : string,
        lName : string,
        pfp : string,
        skinType : string,
    }
}

export type RoutineData = {
    productType : string[],
    timeOfUse : string
}