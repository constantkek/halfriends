import { EventStoreState } from '@/store/eventStore/eventState';
import { Event } from '@/schema/Event';

export enum EventStoreGetter {
	events = 'events',
	event = 'event',
}

export const getters = {
	events: (state: EventStoreState): Event[] => {
		return state.events;
	},
	event: (state: EventStoreState) => (id: string): Event | undefined => {
		return state.events.find(event => event.id === id);
	},
};