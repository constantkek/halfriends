<template>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Event } from '../schema/Event';
import { eventStore } from '../store/eventStore';
import EventsList from '@/components/EventsList/EventsList.vue';

@Component({
  components: {
    EventsList,
  },
})
export default class EventsListView extends Vue {
  public events!: Event[];

  private created(): void {
    this.events = eventStore.events;
  }
}
</script>
