import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector:'child-app',
    standalone:true,
    imports:[CommonModule],
    template:`<h1>Header</h1>
    <p>click the button to show the detail of students</p>
    <button (click)="fetchData()">fetch data</button>
    <p *ngFor="let val of data" >
        {{val.name}}
    </p>
    `
    
})
export class Header {
    data: any[] = []
    constructor(private http:HttpClient){}
    fetchData(){
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(res=>{
            this.data= res
            console.log(this.data);
        })
    }
}