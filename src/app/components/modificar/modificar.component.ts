import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../add/productModel";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit{

  producto: ProductModel
  accion : number

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  getProduct(){
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id')
    this.producto = this.productService.getProductById(id)!!
  }

  delete() {
    if (this.accion==1){
      this.productService.deleteProductById(this.producto.codigo)
    }
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion'])
    this.getProduct()
  }
}
