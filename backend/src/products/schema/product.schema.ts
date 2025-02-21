import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Double, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

export class Product {
    @Prop({ required: true })
    id: string;
    
    @Prop({ required: true })
    title: string;
    
    @Prop()
    description: string;
    
    @Prop()
    price: Double;

    @Prop()
    image: string;

    @Prop()
    userId: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);