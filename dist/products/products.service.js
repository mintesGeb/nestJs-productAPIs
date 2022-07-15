"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(id) {
        const product = this.findProduct(id)[0];
        if (!product) {
            throw new common_1.NotFoundException('Could not find product ');
        }
        return product;
    }
    updateProduct(id, title, desc, price) {
        const [product, index] = this.findProduct(id);
        let updatedProduct = Object.assign({}, product);
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }
    insertProduct(title, description, price) {
        const prodId = (0, uuid_1.v4)();
        const newProduct = new product_model_1.Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }
    deleteProduct(id) {
        this.products = this.products.filter(prod => prod.id !== id);
    }
    findProduct(id) {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new common_1.NotFoundException('Could not find product ');
        }
        return [product, productIndex];
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map