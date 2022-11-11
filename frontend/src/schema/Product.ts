export interface Product {
	name: string,
	price: number,
	status: ProductStatus,
	authorId: string,
	userIds: string[],
}

export type ProductStatus = 'created' | 'in progress' | 'paid';