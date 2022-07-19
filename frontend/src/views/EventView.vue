<template>
  <div>
    {{ id }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Event } from '@/schema/Event';
import { Component, Prop } from 'vue-property-decorator';
import { eventStore } from '@/store/eventStore';

@Component
export default class EventView extends Vue {
  @Prop()
  public id!: number;

  public event?: Event;

  private created(): void {
    this.event = eventStore.event(this.id);
  }
}
</script>