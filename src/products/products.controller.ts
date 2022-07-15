import { Body, Controller, Post ,Get, Param, Patch, Delete} from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(private readonly prodctsService:ProductsService){}

    @Get()
    getAllProducts(){
       return this.prodctsService.getProducts();
    }
    
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.prodctsService.getSingleProduct(prodId)
    }


    @Post()
    addProduct(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number
    ){  
        const generatedId=this.prodctsService.insertProduct(prodTitle, prodDesc, prodPrice)
        
        return {id:generatedId}
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId:string, 
    @Body('title') prodTitle:string,
    @Body('description') prodDesc:string,
    @Body('price') prodPrice:number
    ){
         this.prodctsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
         return null
    }

    @Delete(":id")
    deleteProduct(@Param('id') prodId:string){
        this.prodctsService.deleteProduct(prodId);
        return null
    }

}