import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto, UpdateProductsDto  } from './dto/products.dto';
import { Product } from './schema/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async createInvoice(@Body() createProductsDto:CreateProductsDto):Promise<Product>{
        return await this.productsService.createProduct(createProductsDto);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return this.productsService.getProductById(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProductsDto: UpdateProductsDto,
    ): Promise<Product> {
        return this.productsService.updateProduct(id, updateProductsDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<{ message: string }> {
        return this.productsService.deleteProduct(id);
    }
}
