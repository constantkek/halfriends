import { ActionContext } from 'vuex';

import { EventStoreState } from '@/store/eventStore/eventState';
import { RootState } from '@/store/rootState';
import { fetcher } from '@/utils/fetcher/fetcher';
import { BASE_URL } from '@/config/config';
import { Mutation } from '@/store/eventStore/mutations';
import { Event } from '@/schema/Event';

export enum EventStoreAction {
	fetch = 'fetch',
}

export const actions = {
	fetch: async ({ commit }: ActionContext<EventStoreState, RootState>): Promise<void> => {
		const response = await fetcher.get<{ eventsJson: Event[] }>(`${BASE_URL}/events`);
		commit(Mutation.setEvents, response.eventsJson);
	}
};