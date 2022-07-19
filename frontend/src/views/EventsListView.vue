<template>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Event } from '@/schema/Event';
import EventsList from '@/components/EventsList/EventsList.vue';
import { eventStore } from '@/store/eventStore';

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
