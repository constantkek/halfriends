<template>
  <el-col
    span="8"
    class="event-view__container"
  >
    <el-card class="event-view__card">
      <template #header>
        <div class="event-view__header">
          <span>{{ event.name }}</span>
          <strong style="float: right">{{ getOverall(event).toLocaleString() }} ₽</strong>
        </div>
      </template>
      <ItemsCompactView :items="items" />
    </el-card>
  </el-col>
</template>

<script lang="ts">
import { Event } from '@/schema/Event';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemsCompactView from '@/components/ItemsCompactView/ItemsCompactView.vue';
import { Item } from '@/schema/Item';

@Component({
  components: {
    ItemsCompactView,
  },
})
export default class EventView extends Vue {
  @Prop()
  public event!: Event;

  public get items(): Item[] {
    return this.event.items;
  }

  public getOverall(event: Event): number {
    return event.items.reduce((acc: number, item) => {
      return acc + item.price;
    }, 0);
  }
}
</script>

<style scoped>
.event-view__container {
  padding: 10px;
}
.event-view__card {
  text-align: left;
  cursor: pointer;
}
</style>