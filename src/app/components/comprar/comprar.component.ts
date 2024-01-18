import { Component } from '@angular/core';
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent {

  constructor(private productService: ProductService) {

  }

  showProducts(){
    return this.productService.getProducts()
  }



}
