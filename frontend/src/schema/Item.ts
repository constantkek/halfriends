export interface Item {
	name: string,
	price: number,
	status: ItemStatus,
}

export type ItemStatus = 'created' | 'in progress' | 'paid';