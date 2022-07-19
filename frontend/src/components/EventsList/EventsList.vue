<template>
  <div class="events-list__container">
    <div v-if="events.length">
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="showDialog"
      >
        Add new
      </el-button>
      <div
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :event="event" />
      </div>
    </div>
    <div v-else>
      <el-empty description="Events aren't created yet">
        <el-button
          type="primary"
          @click="showDialog"
        >
          Create
        </el-button>
      </el-empty>
    </div>
    <EventDialog
      v-model="isDialogVisible"
      @created="onDialogCreated"
    />
  </div>
</template>

<script lang="ts">
import { Event } from '@/schema/Event';
import { Component, Prop, Vue } from 'vue-property-decorator';
import EventCard from '@/components/EventCard/EventCard.vue';
import EventDialog from '@/components/EventDialog/EventDialog.vue';

@Component({
  components: {
    EventCard,
    EventDialog,
  }
})
export default class EventsList extends Vue {
  @Prop({ default: () => [] })
  public events!: Event[];

  public isDialogVisible = false;

  public showDialog(): void {
    this.isDialogVisible = true;
  }

  public onDialogCreated(eventName: string): void {
    this.isDialogVisible = false;
  }
}
</script>

<style scoped>
  .events-list__container {
    text-align: center;
    padding: 2%;
  }
</style>