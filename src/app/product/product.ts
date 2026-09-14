import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl:'./product.html',
  styleUrl: './product.css',
})
export class Product {

  searchText: string = '';
  selectedCategory: string='';
  showDeleteModal = false;
  showEditModal = false;
  // asign 0 it mean not yet action
  selectedId:number = 0;
  // any mean any value
  editData : any={};

  product=[
    {
      productid:1,
      productname:"Coca Cola",
      price: 2.50,
      quantity: 430,
      description:"List product coca cola",
      created_date: new Date("2026-05-06"),
      categoryname:"Soft Drink",
      image:"https://cdn.pnggallery.com/wp-content/uploads/cocacola-can-01.png"
    },
    {
      productid:2,
      productname:"Cambodia",
      price: 4.76,
      quantity:1200,
      description:"List product abc beer",
      created_date: new Date("2026-05-30"),
      categoryname:"Beer",
      image:"https://www.monde-selection.com/wp-content/uploads/2023/05/1039070.png"
    },
    {
      productid:3,
      productname:"Cambodia Water",
      price: 1.90,
      quantity:17000,
      description:"List product cambodia water",
      created_date: new Date("2026-06-12"),
      categoryname:"Water",
      image:"https://www.monde-selection.com/wp-content/uploads/2025/05/1044847.png"
    },
    {
      productid:4,
      productname:"Fanta",
      price: 2.30,
      quantity:900,
      description:"List product fanta",
      created_date: new Date("2026-06-20"),
      categoryname:"Soft Drink",
      image:"https://cdn.pnggallery.com/wp-content/uploads/fanta-orange-01.png"
    },
    {
      productid:5,
      productname:"Tiger",
      price: 3.66,
      quantity:500,
      description:"List product tiger",
      created_date: new Date("2026-07-10"),
      categoryname:"Beer",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH_74OJnBtDqs1L89fU5h4Lt6_73QLC0XmA&s"
    },
    {
      productid:6,
      productname:"Sting",
      price: 2.80,
      quantity: 400,
      description:"List product sting",
      created_date: new Date ("2026-08-12"),
      categoryname: "Soft Drink",
      image:"https://www.bbassets.com/media/uploads/p/l/40113907_5-sting-energy-drink.jpg"
    }
  ];

  get filterProduct(){
      return this.product.filter(p=>{
        const matchSearch=
              p.productname.toLowerCase().
              includes(this.searchText.toLowerCase()) ||
              p.productid.toString().includes(this.searchText);
        const matchCategory=
              this.selectedCategory=='' ||
              p.categoryname== this.selectedCategory;
      return matchSearch && matchCategory;
      });
  }
  // create funtion deleteproduct
    deleteProduct(id: number){
       this.selectedId=id;
       this.showDeleteModal=true;
      }

      confrimDelete(){
        this.product = this.product.filter(
         (p)=>p.productid!==this.selectedId
        );
        this.showDeleteModal = false;
        alert("Product Delte successfully!");
      }

      cancelDelete(){
        this.showDeleteModal = false;
      }


      editProduct (product:any){
        this.editData={...product,
          created_date: new Date(product.created_date).toISOString().split('T')[0]
        };
        // for close product 
        this.showEditModal=true;
      }

      // create function updateproduct
      updateProduct(){
        const index = this.product.findIndex(
          (p)=>p.productid === this.editData.productid
        );
        if(index !=-1){
            this.product[index]= this.editData;
          
          alert ("Product updated successfully");
          this.showEditModal=false;
          }
      }
    }


