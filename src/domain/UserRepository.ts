export interface User{
    idUser: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UserRepository{
    save(user:User):Promise<number>;
    findId(idUser:User):Promise<User|null>;
    findAll():Promise<User[]>;
    deleteById(idUser:User):Promise<void>;
}