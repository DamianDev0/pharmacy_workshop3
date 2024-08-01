
export interface Medicine{
    id?:number,
    name: string,
    quantity:number,
    expiration_date: Date,
    price:number
}

export interface Pacient{
    id?:number,
    name: string,
    age: number,
    medical_history: string
}