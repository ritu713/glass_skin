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

export type AnalyserData = {
    skinType : string,
    productLabel : string,
    concerns : string[]
}
export type ProductType = {
    brand : string,
    name : string,
    price : number,
    url : string,
    'skin type' : string,
    concern : string
}

export const feature_list = ['all',
    'normal',
    'dry',
    'oily',
    'combination',
    'sensitive',
    'eye bags',
    'blackheads and whiteheads',
    'dark spots',
    'pigmentation',
    'tan removal',
    'anti-pollution',
    'excess oil',
    'uneven skin tone',
    'dark circles',
    'deep nourishment',
    'pore care',
    'softening and smoothening',
    'dryness',
    'fine lines and wrinkles',
    'acne or blemishes',
    'hydration',
    'daily use',
    'general care',
    'dull skin',
    'sun protection']