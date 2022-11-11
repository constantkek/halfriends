import { EventStoreState } from '@/store/eventStore/eventState';
import { Event } from '@/schema/Event';
import { User } from '@/schema/User';

export enum EventStoreGetter {
	events = 'events',
	event = 'event',
	eventUsers = 'eventUsers',
}

export const getters = {
	events: (state: EventStoreState): Event[] => {
		return state.events;
	},
	event: (state: EventStoreState) => (id: string): Event | undefined => {
		return state.events.find(event => event.id === id);
	},
	eventUsers: (state: EventStoreState) => (id: string): User[] => {
		return state.events.find(event => event.id === id)?.users ?? [];
	},
};