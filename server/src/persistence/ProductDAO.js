import DAOContainer from "./DAOContainer.js";
import { ProductModel } from "../models/Product.js";

let instance = null;

class ProductDAO extends DAOContainer {
    constructor() {
        super(ProductModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new ProductDAO();
        };
        return instance;
    };

    async createProduct(name, description, image_url, price) {
        const newProduct = new ProductModel({
            name,
            description,
            image_url,
            price
        });

        const product = await newProduct.save();
        return product;
    };
};

export default ProductDAO;