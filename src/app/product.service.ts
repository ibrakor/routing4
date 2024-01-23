import {Injectable} from '@angular/core';
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

  deleteProductById(id: number) {
    const index = this.productos.findIndex(product => product.codigo === id);

    if (index !== -1) {
      this.productos.splice(index, 1);
      alert(`Producto con ID ${id} eliminado correctamente.`);
    } else {
      alert(`No se encontró un producto con ID ${id}. No se realizó ninguna acción.`);
    }
  }

}
