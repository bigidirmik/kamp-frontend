import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // array, liste
  products: Product[] = [];
  dataLoaded = false;

  constructor(private productServices: ProductService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productServices.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number) {
    this.productServices.getProductsByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
