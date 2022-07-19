import { EventStoreState } from '@/store/eventStore/eventState';

export interface RootState {
  version: string;
  eventStore: EventStoreState;
}