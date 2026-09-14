import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product';

@Component({
  selector: 'app-list-product',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})
export class ListProduct {
  products:any[]=[];
  constructor(private  service: ProductService){}
  ngOnInit(){
    this.loadProduct();
  }
  //subscribe((rest)) for get data form data
  loadProduct(){
    this.service.getProduct().subscribe((res:any)=>{
      this.products=res.products;
    });
  }

  currentPage=1;
  pageSize = 5;
  get totalPages():number{
    return Math.ceil(this.products.length/this.pageSize);
  }

  get pageinatedProducts(){
    const start = (this.currentPage-1)* this.pageSize;
    return this.products.slice(start, start+this.pageSize);
  }

  nextPage(){
    if(this.currentPage<this.totalPages){
      this.currentPage ++;
    }
  }
  // back return
  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
    }
  }

  // back first page
  firstPage(){
    this.currentPage=1;
  }

  lastPage(){
    this.currentPage=this.totalPages;
  }
}
