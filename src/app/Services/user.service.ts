import { User } from "../Models/user";

export class UserService{
    users :User[]=[
        new User(1, 'John Smith', 'js', 'Admin12345*'),
        new User(2, 'Merry Jane', 'mj', 'Admin12345*'),
        new User(3, 'Mark Vought', 'mv', 'Admin12345*'),
        new User(4, 'Sarah King', 'sk', 'Admin12345*')
    ]
}