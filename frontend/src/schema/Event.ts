import { Item } from '@/schema/Item';
import { Participant } from '@/schema/Participant';

export interface Event {
	name: string,
	isActive: boolean,
	items: Item[],
	participants: Participant[],
}