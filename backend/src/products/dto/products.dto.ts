export class ProductsDto {
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