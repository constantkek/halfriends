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
          <div class="inner_header">
            <img src="@/assets/crown.svg?data" />
            <i class="el-icon-back"></i>
            <i class="el-icon-money money"></i>
          </div>
          <div class="inner-content">
            <div class="avatar-view">
              <UserAvatarView :user="author" />
            </div>
            <el-divider direction="vertical" class="divider"></el-divider>
            <UsersCompactView class="users-compact-view" :users="payers" :limit="4" />
          </div>
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
import UsersCompactView from '@/components/EventCard/UsersCompactView/UsersCompactView.vue';

@Component({
  components: {
    UserAvatarView,
    UsersCompactView,
  }
})
export default class ProductCard extends Vue {
  @Prop()
  public product!: Product;

  @Prop()
  public eventId!: string;

  private get eventUsers(): User[] {
    return eventStore.eventUsers(this.eventId);
  }

  public get author(): User | undefined {
    return this.eventUsers.find((user: User) => user.id === this.product.authorId);
  }

  public get payers(): User[] {
    return this.eventUsers.filter((user: User) => this.product.userIds.includes(user.id));
  }
}
</script>

<style scoped lang="less">
.product-card__container {
  padding: 1em;
}
.product-card__inner-section {
  display: inline-flex;
  gap: 7px;
  flex-direction: column;
  .inner_header {
    display: flex;
    align-items: center;
    gap: 2px;
    img {
      width: 34px;
      height: 24px;
    }
    i {
      font-weight: 600;
      font-size: 1.4em;
      &.money {
        margin-left: 4px;
      }
    }
  }
  .inner-content {
    display: flex;
    gap: 2px;
    align-items: center;
    .avatar-view {
      display: flex;
    }
    .divider {
      height: 26px;
      margin: 0 10px;
    }
    .users-compact-view {
      display: flex;
    }
  }
}
</style>