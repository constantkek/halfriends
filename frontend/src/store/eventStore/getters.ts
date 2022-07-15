import { GetterTree } from "vuex";

import { EventStoreState } from "@/store/eventStore/eventState";
import { Event } from "@/schema/Event"; 
import { RootState } from "@/store/rootState";

export enum EventStoreGetter {
	events = 'events',
}

export const getters: GetterTree<EventStoreState, RootState> = {
	events: (state: EventStoreState): Event[] => {
		return state.events;
	}
};