<template>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { Event } from '@/schema/Event';
import { EventStoreGetter } from '@/store/eventStore/getters';
import EventsList from '@/components/EventsList/EventsList.vue';

@Component({
  components: {
    EventsList,
  },
})
export default class EventsView extends Vue {
  @Getter(EventStoreGetter.events, { namespace: 'eventStore' })
  public events!: Event[];
}
</script>
