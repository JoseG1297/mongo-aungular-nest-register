import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './schema/product.schema';
import { CreateProductsDto, UpdateProductsDto } from './dto/products.dto';
@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private readonly productModel:Model<Product>
    ){}

    async createProduct(createProductsDto:CreateProductsDto):Promise<Product>{
        return await this.productModel.create(createProductsDto);
    }


    async getAllProducts(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async getProductById(id: string): Promise<Product> {
        const product = await this.productModel.findById(id).exec();
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async updateProduct(id: string, updateProductsDto: UpdateProductsDto): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, updateProductsDto, {
            new: true, // Devuelve el documento actualizado
            runValidators: true,
        }).exec();

        if (!updatedProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<{ message: string }> {
        const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
        if (!deletedProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return { message: 'Product deleted successfully' };
    }
}
