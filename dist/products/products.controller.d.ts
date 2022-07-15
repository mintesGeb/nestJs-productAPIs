import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly prodctsService;
    constructor(prodctsService: ProductsService);
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): import("./product.model").Product;
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: any;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    deleteProduct(prodId: string): any;
}
