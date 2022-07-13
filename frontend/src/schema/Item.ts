export interface Item {
	name: string,
	price: number,
	status: ItemStatus,
}

type ItemStatus = 'created' | 'in progress' | 'paid';