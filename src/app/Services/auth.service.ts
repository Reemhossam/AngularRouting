import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

Injectable()
export class AuthService{
    isLogged: boolean = false;
    userService: UserService = inject(UserService)
    login(username: string, password: string){
        let user =this.userService.users.find(user => user.username == username && user.password == password);
        if(!user)
            this.isLogged = false;
        else
            this.isLogged = true;
        return user;
    }

    logout(){
        console.log(`isLogged is ${this.isLogged}`);
        this.isLogged = false;

    }
    IsAuthenticated(){
        return this.isLogged;
    }
}