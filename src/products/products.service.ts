import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class ProductsService {
    products:Product[]=[];
    getProducts(){
        return [...this.products];
    }
    getSingleProduct(id){
        const product = this.findProduct(id)[0]
        if(!product){
            throw new NotFoundException('Could not find product ')
        }
        
        return product;
    }

    updateProduct(id:string, title:string,desc:string,price:number){
        const [product,index] = this.findProduct(id)
let updatedProduct = {...product};
if(title){
    updatedProduct.title = title;
}
if(desc){
    updatedProduct.description = desc;
}
if(price){
    updatedProduct.price = price;
}

        this.products[index]=updatedProduct;
    }


    insertProduct(title:string,description:string,price:number){
        const prodId=uuidv4();
        const newProduct = new Product(prodId,title,description,price);
        this.products.push(newProduct);
        return prodId;
    }

    deleteProduct(id:string){
        this.products = this.products.filter(prod=>prod.id!==id)
    }
    private findProduct(id:string):[Product,number]{
        const productIndex = this.products.findIndex(prod=>prod.id===id)
        const product = this.products[productIndex]
        if(!product){
            throw new NotFoundException('Could not find product ')
        }
        
        return [product,productIndex];
    }
}