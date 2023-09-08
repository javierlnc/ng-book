export class Product {
    constructor(
        public sku: String,
        public name: String,
        public imageUrl: String,
        public deparment: String[],
        public price: number
    ) {
        
    }
}