import { Item } from '@/schema/Item';
import { Participant } from '@/schema/Participant';

export interface Event {
	id: string,
	name: string,
	isActive: boolean,
	description: string,
	items: Item[],
	participants: Participant[],
}