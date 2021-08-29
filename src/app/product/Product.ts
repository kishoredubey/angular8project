import Inventory from '../inventory/inventory';

export default class Product {  
    id: number;
    name: string;  
    description: string;  
    price: number;  
    offerPrice: number;
    files: [];
    subCategoryId: number;
    inventory: Inventory;
  }  