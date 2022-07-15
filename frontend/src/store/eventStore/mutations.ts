import { MutationTree } from "vuex";

import { EventStoreState } from "@/store/eventStore/eventState";
import { Event } from "@/schema/Event"; 

export enum Mutation {
	setEvents = 'setEvents',
}

export const mutations: MutationTree<EventStoreState> = {
	setEvents: (state: EventStoreState, events: Event[]) => {
		state.events = events;
	},
};