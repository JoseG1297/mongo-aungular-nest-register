import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './schema/product.schema';
import { CreateProductsDto } from './dto/products.dto';
@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private readonly productModel:Model<Product>
    ){}

    async createProduct(CreateProductsDto:CreateProductsDto):Promise<Product>{
        return await this.productModel.create(CreateProductsDto);
    }
}
