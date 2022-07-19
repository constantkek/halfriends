import { EventStoreState } from "./eventStore/eventState";

export interface RootState {
  version: string;
  eventStore: EventStoreState;
}