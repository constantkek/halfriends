<template>
  <div>
    <el-tag
      v-for="item in slicedItems"
      :key="item.name"
      :type="getType(item.status)"
      class="items-compact-view__tag"
    >
      {{ item.name }} • {{ item.price }} ₽
    </el-tag>
    <span v-if="items.length > limit">
      and {{ items.length - limit }} more..
    </span>
  </div>
</template>

<script lang="ts">
import { Item, ItemStatus } from '@/schema/Item';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemsCompactView extends Vue {
  @Prop({ default: [] })
  public readonly items!: Item[];

  public readonly limit = 3;

  public get slicedItems(): Item[] {
    return this.items.slice(0, this.limit);
  }

  public getType(status: ItemStatus): string {
    switch (status) {
      case 'created':
        return 'info';
      case 'paid':
        return 'success';
      case 'in progress':
      default:
        return '';
    }
  }
}
</script>

<style scoped>
.items-compact-view__tag {
  margin: 5px;
}
</style>