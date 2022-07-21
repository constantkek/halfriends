import { Product } from '@/schema/Product';
import { User } from '@/schema/User';

export interface Event {
	id: string,
	name: string,
	isActive: boolean,
	description: string,
	products: Product[],
	users: User[],
}