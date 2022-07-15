import { Module } from 'vuex';

import { RootState } from '@/store/rootState';
import { EventStoreState } from '@/store/eventStore/eventState';
import { getters } from '@/store/eventStore/getters';
import { mutations } from '@/store/eventStore/mutations';
import { actions } from '@/store/eventStore/actions';

export const eventStore: Module<EventStoreState, RootState> = {
	namespaced: true,
	state: {
		events: [],
		activeEvent: undefined,
	},
	getters,
	mutations,
	actions,
};