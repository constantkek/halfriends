<template>
  <div class="events-list__container">
    <div v-if="events.length">
      <el-button
        type="primary"
        icon="el-icon-plus"
      >
        Add new
      </el-button>
      <div
        v-for="event in events"
        :key="event.id"
      >
        <EventView :event="event" />
      </div>
    </div>
    <div v-else>
      <el-empty description="Events aren't created yet">
        <el-button
          type="primary"
        >
          Create
        </el-button>
      </el-empty>
    </div>
  </div>
</template>

<script lang="ts">
import { Event } from '@/schema/Event';
import { Component, Prop, Vue } from 'vue-property-decorator';
import EventView from '@/components/EventView/EventView.vue';

@Component({
  components: {
    EventView,
  }
})
export default class EventsList extends Vue {
  @Prop({ default: [] })
  public events!: Event[];
}
</script>

<style scoped>
  .events-list__container {
    padding: 2%;
  }
</style>