import { Module } from 'vuex';

import { RootState } from '@/store/rootState';
import { EventStoreState } from '@/store/eventStore/eventState';
import { getters } from '@/store/eventStore/getters';
import { mutations } from '@/store/eventStore/mutations';
import { actions } from '@/store/eventStore/actions';
import { store } from '@/store';
import { ModuleBuilder } from '@/store/ModuleBuilder';

export const eventStoreModule: Module<EventStoreState, RootState> = {
	namespaced: true,
	state: {
		events: [],
		activeEvent: undefined,
	},
	getters,
	mutations,
	actions,
};

const builder = new ModuleBuilder(store, eventStoreModule, 'eventStore');

export const eventStore = builder.build({
	events: builder.getter(getters.events),
	event: builder.getter(getters.event),

	fetch: builder.action(actions.fetch),
})