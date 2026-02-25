import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { Header } from "./header";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone:true,
  selector:'app-root',
  template:`
  <div>
    <a routerLink=''>Home</a> | 
    <a routerLink='contact'>contact</a>
  </div>
  <h1>anandhu</h1>
  <p>{{counter()}}</p>
  <button (click)="increase()">+</button>
  <button (click)="decrease()">-</button><br>
  <p>first name</p>
  <input id="text" type="text" (input)="changedName($event)">
  <button (click)="saveName()">save</button>
  <p *ngFor="let n of NameArray">
    {{ n }}
  </p>

  <child-app></child-app>
  <router-outlet></router-outlet>
  `,
imports: [CommonModule,Header,RouterOutlet,RouterLink],

})
export class App {

  TestData:string = 'jocker'
  NameArray:String[] = []
  Name: String =''

  counter = signal(0)
  saveName(){
    this.NameArray.push(this.Name)
    console.log(this.NameArray);
    
  }

  changedName(e:Event){
    const data = e.target as HTMLInputElement;
    this.Name=(data.value)
    return 0
  }

  increase(){
    this.counter.update((v)=>{return v+1})
  }
  decrease(){
    this.counter.update((v)=>{return v-1})
  }

}