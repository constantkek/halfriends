import { fetcher } from '@/utils/fetcher/fetcher';
import { Event } from '@/schema/Event';
import { ActionContext } from 'vuex';
import { BASE_URL } from '@/config/config';

interface EventStoreState {
	events: Event[],
	activeEvent?: Event,
}

export enum EventStoreAction {
	fetch = 'fetch',
}

export enum EventStoreGetter {
	events = 'events',
}

const enum Mutation {
	setEvents = 'setEvents',
}

const actions = {
	fetch: async (context: ActionContext<EventStoreState, EventStoreState>) => {
		const response = await fetcher.get<{ eventsJson: Event[] }>(`${BASE_URL}/events`);
		context.commit(Mutation.setEvents, response.eventsJson);
	}
};

const getters = {
	events: (state: EventStoreState) => () => {
		return state.events;
	}
};

const mutations = {
	setEvents: (state: EventStoreState, events: Event[]) => {
		state.events = events;
	},
};

export const eventStore = {
	state: {
		events: [],
		activeEvent: undefined,
	},
	getters,
	mutations,
	actions,
};