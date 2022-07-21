export interface Product {
	name: string,
	price: number,
	status: ProductStatus,
}

export type ProductStatus = 'created' | 'in progress' | 'paid';