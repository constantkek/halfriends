import { store } from "@/store"
import { eventStore, EventStoreAction } from "@/store/eventStore";

export const fetchAll = async () => {
	await store.dispatch(EventStoreAction.fetch);
};
