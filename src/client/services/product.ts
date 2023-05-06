import Product, { Product as ProductType } from "@models/Product";
import { LeanDocument, ObjectId } from "mongoose";

const productService = {
	getProducts: async (_ids: string[]) => {
		const products = await Product.find({
			...(_ids.length && {
				_id: {
					$in: _ids,
				},
			}),
		}).lean();
		return products;
	},
};
export default productService;
