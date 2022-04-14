import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(  private http:HttpClient) { }

  GetPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }



  ngOnInit(): void {
    this.findedarray = this.Product
  }
  title = 'angularcard';
 
  findedarray:any = [];
  Product:any = [
    {
      id:1,
      title: 'IPHONE',
     
      
      img: 'assets/img/applehead.jpg',
      img2: 'assets/img/iphone1.jpg',
      img3: 'assets/img/iphone2.jpg',
      img4: 'assets/img/iphone3.jpg',
      img5: 'assets/img/iphone4.jpg',
      cat_name: 'ტელეფონი',
      dax:"Iphone 13",
      dax2:'color:[GREY,GOLD,WHITE,BLACK]',
      dax3:'memory:[64,128,256]',
      
    },

    {
      id:2,
      img: 'assets/img/ipad.jpg',
      img2: 'assets/img/ipad1.jpg',
      img3: 'assets/img/ipad2.jpg',
      img4: 'assets/img/ipad3.jpg',
      img5: 'assets/img/ipad4.jpg',
      title: 'IPAD',
      cat_name: 'პლანშეტი',
      dax:"Ipad",
      dax2:'color:[GREY,GOLD,WHITE,BLACK]',
      dax3:'memory:[64,128,256]',
    },
    {
      id:3,
      img: 'assets/img/imacc.jpg',
      img2: 'assets/img/imac1.jpg',
      img3: 'assets/img/imac2.jpg',
      img4: 'assets/img/imac3.jpg',
      img5: 'assets/img/imac4.jpg',
      title: 'iMac',
      cat_name: 'mac',
      dax:"iMac",
      dax2:'color:[GREY,GOLD,WHITE,BLACK]',
      dax3:'memory:[64,128,256]',
     
    },
  ];


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

