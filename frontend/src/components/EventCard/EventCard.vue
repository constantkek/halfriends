<template>
  <el-col
    :span="8"
    class="event-view__container"
  >
    <router-link
      :to="`/event/${event.id}`"
    >
      <el-card class="event-view__card">
        <template #header>
          <div class="event-view__header">
            <span>{{ event.name }}</span>
            <strong style="float: right">{{ getOverall(event).toLocaleString() }} ₽</strong>
          </div>
        </template>
        <ItemsCompactView :items="items" />
        <UsersCompactView :users="users" />
      </el-card>
    </router-link>
  </el-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Event } from '@/schema/Event';
import { Product } from '@/schema/Product';
import { User } from '@/schema/User';
import ItemsCompactView from '@/components/EventCard/ItemsCompactView/ItemsCompactView.vue';
import UsersCompactView from '@/components/EventCard/UsersCompactView/UsersCompactView.vue';

@Component({
  components: {
    ItemsCompactView,
    UsersCompactView,
  },
})
export default class EventView extends Vue {
  @Prop()
  public event!: Event;

  public get users(): User[] {
    return this.event.users;
  }

  public get items(): Product[] {
    return this.event.products;
  }

  public getOverall(event: Event): number {
    return event.products.reduce((acc: number, product) => {
      return acc + product.price;
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