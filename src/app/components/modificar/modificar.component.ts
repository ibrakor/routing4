import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../add/productModel";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../product.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit{

  @Input() producto : ProductModel

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
  }

  getProduct(){
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(id)
  }

  ngOnInit(): void {
    this.getProduct()
  }
}
