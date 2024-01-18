import { Component } from '@angular/core';
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

constructor(private productService: ProductService) {
}
  showProducts(){
    return this.productService.getProductsToADd()
  }
}
