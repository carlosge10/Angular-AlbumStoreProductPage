import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from "../album";
import { Product } from "../product";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  albumInfo : Album;

  constructor(private _productService : ProductService) { }

  ngOnInit() { this._productService.getProducts().subscribe(response => this.products = response); }
    //this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);}

}
