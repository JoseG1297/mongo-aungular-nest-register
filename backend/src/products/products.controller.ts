import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/products.dto';
import { Product } from './schema/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Post('product')
    async createInvoice(@Body() createProductsDto:CreateProductsDto):Promise<Product>{
        return await this.productsService.createProduct(createProductsDto);
    }

}
