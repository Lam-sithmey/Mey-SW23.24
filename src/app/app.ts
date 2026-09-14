// this is import it is mean libray
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

   heading = 'STUDENT INFORMATION SYSTEM';
    headingColor = 'blue';
   bgColor = 'linear-gradient(to right, purple, green)';
 

  protected readonly title ="WELCOME TO ANGULAR SW24 ";
  
  // Declear variable using Typscript
  studentid: Number = 10;
  studentname: String = "Leang Sophanny";
  subject: String = "Web Development III (SW24)";
  dateofbrith : Date = new Date("2026-04-16");
  productId : number = 1;
  productName : string = "laptop";
  Quantity : number = 2;
  Price : number = 800.00;
  Amount : number = this.Quantity*this.Price;
  description: string = "High performance laptop";
  created_date : Date = new Date("2026-04-10");
  Categories_Name : string = "Computer";
}



