import { ActionTree } from "vuex";

import { EventStoreState } from "@/store/eventStore/eventState";
import { RootState } from "@/store/rootState";
import { fetcher } from "@/utils/fetcher/fetcher";
import { Mutation } from "@/store/eventStore/mutations";

export enum EventStoreAction {
	fetch = 'fetch',
}

export const actions: ActionTree<EventStoreState, RootState> = {
	fetch: async ({ commit }) => {
		const response = await fetcher.get<{ eventsJson: Event[] }>(`${process.env.BASE_URL}/events`);
		commit(Mutation.setEvents, response.eventsJson);
	}
};