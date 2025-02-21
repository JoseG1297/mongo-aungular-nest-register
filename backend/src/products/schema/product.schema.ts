import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    id: Number;
    
    @Prop({ required: true })
    title: string;
    
    @Prop()
    description: string;

    @Prop(raw([
        {
            price: Number,
            amount: Number,
            image: String
        }
    ]))
    details: Record<string,any>[]

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);