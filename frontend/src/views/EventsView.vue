<template>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Event } from '@/schema/Event';
import EventsList from '@/components/EventsList/EventsList.vue';

@Component({
  components: {
    EventsList,
  },
})
export default class EventsView extends Vue {
  public events: Event[] = [];

  private created(): void {
    this.events = this.$store.state.eventStore.events;
  }
}
</script>
