import { Product } from "./product.model";
export declare class ProductsService {
    products: Product[];
    getProducts(): Product[];
    getSingleProduct(id: any): Product;
    updateProduct(id: string, title: string, desc: string, price: number): void;
    insertProduct(title: string, description: string, price: number): any;
    deleteProduct(id: string): void;
    private findProduct;
}
