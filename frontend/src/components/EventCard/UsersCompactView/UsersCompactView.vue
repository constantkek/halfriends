<template>
  <div class="user-compact-view__container">
    <UserAvatarView
      v-for="(user, index) in slicedUsers"
      :key="index"
      :user="user"
    />
    <span
      v-if="users.length > slicedUsers.length"
      class="user-compact-view_span"
    >
      and {{ users.length - slicedUsers.length }} more
    </span>
  </div>
</template>

<script lang="ts">
import { User } from '@/schema/User';
import { Component, Prop, Vue } from 'vue-property-decorator';

import UserAvatarView from '@/components/EventCard/UserAvatarView/UserAvatarView.vue';

@Component({
  components: {
    UserAvatarView,
  }
})
export default class UsersCompactView extends Vue {
  @Prop({ default: () => [] })
  public readonly users!: User[];

  @Prop({ default: 7 })
  public readonly limit!: number;

  public get slicedUsers(): User[] {
    return this.users.slice(0, this.limit);
  }
}
</script>

<style scoped>
.user-compact-view__container {
  display: flex;
  align-items: center;
  margin: 5px 12px 0 12px;
}
.user-compact-view_span {
  display: flex;
}
</style>