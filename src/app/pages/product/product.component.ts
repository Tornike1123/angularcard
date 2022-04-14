import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

Product:any[] = [];

  constructor(
private ProdServ:ProductServiceService
  ) { 
    this.Product = this.ProdServ.Product;


    
 
  this.ProdServ.GetPosts().subscribe((data: any)=>{
    this.Product = data
    
  });

}

 

  ngOnInit(): void {
    this.findedarray = this.Product
  }
  title = 'angularcard';
  findedarray:any = [];



  getdate(){
    this.ProdServ.GetPosts().subscribe((data: any)=>{
      this.Product = data
      
    });
  }



 firstNumber : any;
 secondNumber : any;
 result : any;

 multiply(){
   this.result = (this.firstNumber) * (this.secondNumber);
 }

 finds(title:any){
  this.findedarray = this.Product.filter((el:any) =>{
    return el.title.search(title) != -1
  })
   console.log(this.findedarray)
 }

}





