<template>
  <div>
    <el-tag
      v-for="item in items"
      :key="item.name"
      :type="getType(item.status)"
      class="items-compact-view__tag"
    >
      {{ item.name }} • {{ item.price }} ₽
    </el-tag>
  </div>
</template>

<script lang="ts">
import { Item, ItemStatus } from '@/schema/Item';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemsCompactView extends Vue {
  @Prop({ default: [] })
  public readonly items!: Item[];

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