import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class PostService {
    constructor(private _http:HttpClient){}

    getUserPage(id : number){
        return this._http.get(`http://localhost:3000/users/${id}`)
    }

    getComments(id: number){
        return this._http.get(`http://localhost:3000/rawPost/${id}`)
    }
}