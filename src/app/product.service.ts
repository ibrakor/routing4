import { Injectable } from '@angular/core';
import {ProductModel} from "./components/add/productModel";
import {PRODUCTS, PRODUCTSTOADD} from "./components/PRODUCTOSMOCK";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productos: ProductModel[] = PRODUCTS
  productsToAdd: ProductModel[] = PRODUCTSTOADD
  constructor() { }

  getProducts(){
    return this.productos
  }
  getProductsToADd(){
    return this.productsToAdd
  }

  // @ts-ignore
  getProductById(id: number){
    for (let product of this.productos){
      if (product.codigo==id){
        return product
      }
    }
  }
}
