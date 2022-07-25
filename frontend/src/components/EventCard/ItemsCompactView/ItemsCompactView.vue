<template>
  <div>
    <span
      v-for="item in slicedItems"
      :key="item.name"
    >
      <el-tooltip
        :content="item.status"
        placement="top"
      >
        <el-tag
          :type="getType(item.status)"
          class="items-compact-view__tag"
        >
          {{ item.name }} • {{ item.price }} ₽
        </el-tag>
      </el-tooltip>
    </span>
    <span v-if="items.length > limit">
      and {{ items.length - limit }} more..
    </span>
  </div>
</template>

<script lang="ts">
import { Product, ProductStatus } from '@/schema/Product';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemsCompactView extends Vue {
  @Prop({ default: [] })
  public readonly items!: Product[];

  public readonly limit = 5;

  public get slicedItems(): Product[] {
    return this.items.slice(0, this.limit);
  }

  public getType(status: ProductStatus): string {
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