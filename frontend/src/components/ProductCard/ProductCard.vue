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
        <div class="product-card__inner-section">
          <div class="inner-king">
            <img src="@/assets/crown.svg?data" />
            <div class="avatar-view">
              <UserAvatarView :user="author" />
            </div>
          </div>
          <div class="inner-divider">
            <i class="el-icon-back arrow"></i>
            <el-divider direction="vertical" class="divider"></el-divider>
          </div>
          <div class="inner-users"></div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Product } from '@/schema/Product';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '@/schema/User';
import { eventStore } from '@/store/eventStore';

import UserAvatarView from '@/components/EventCard/UserAvatarView/UserAvatarView.vue';

@Component({
  components: {
    UserAvatarView,
  }
})
export default class ProductCard extends Vue {
  @Prop()
  public product!: Product;

  @Prop()
  public eventId!: string;

  public get author(): User | undefined {
    return eventStore.eventUsers(this.eventId).find((user: User) => user.id === this.product.authorId);
  }
}
</script>

<style scoped lang="less">
.product-card__container {
  padding: 1em;
}
.product-card__inner-section {
  display: inline-flex;
  .inner-king {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    img {
      width: 24px;
      height: 24px;
    }
    .avatar-view {
      display: flex;
    }
  }
  .inner-divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .arrow {
      margin-top: 3px;
      font-size: larger;
      font-weight: bold;
    }
    .divider {
      height: 34px;
    }
  }
  .inner-users {

  }
}
</style>