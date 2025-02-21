import { PartialType } from '@nestjs/mapped-types';

export class CreateProductsDto {
    id: Number;
    title: string;
    description: string;
    details: [
        {
            price: Number;
            amount: Number;
            image: String;
        }
    ];
}

export class UpdateProductsDto extends PartialType(CreateProductsDto) {}