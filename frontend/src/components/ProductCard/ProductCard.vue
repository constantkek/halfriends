<template>
  <div>
    ProductCard
  </div>
</template>

<script lang="ts">
import { Product } from '@/schema/Product';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ProductCard extends Vue {
  public product?: Product;
}
</script>