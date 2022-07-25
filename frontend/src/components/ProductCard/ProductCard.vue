<template>
  <div>
    <el-col
      :span="6"
      class="product-card__container"
    >
    <el-card class="product-card__card">
        <template #header>
          <div class="product-card__header">
            <span>{{ product.name }}</span>
            <strong style="float: right">{{ product.price.toLocaleString() }} ₽</strong>
          </div>
        </template>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Product } from '@/schema/Product';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductCard extends Vue {
  @Prop()
  public product!: Product;
}
</script>

<style scoped>
.product-card__container {
  padding: 1em;
}
</style>