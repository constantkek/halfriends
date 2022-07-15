<template>
  <div class="hello">
    <EventsList :events="events" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Event } from '@/schema/Event';
import EventsList from './EventsList/EventsList.vue';

@Component({
  components: {
    EventsList,
  }
})
export default class HelloWorld extends Vue {
  @Prop()
  public readonly msg!: string;

  public events: Event[] = [];

  private created(): void {
    console.log(this.$store.state.eventStore);
    this.events = this.$store.state.eventStore.events;
    
  }

}
</script>

<style scoped>

</style>
