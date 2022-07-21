<template>
  <div class="user-compact-view__container">
    <el-avatar
      v-for="user in slicedUsers"
      :key="user.firstname"
      class="avatar"
      size="small"
    >
      <div>
        <span>{{ `${user.firstname[0]}${user.lastname[0]}` }}</span>
      </div>
    </el-avatar>
  </div>
</template>

<script lang="ts">
import { User } from '@/schema/User';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UsersCompactView extends Vue {
  @Prop({ default: () => [] })
  public readonly users!: User[];

  public readonly limit = 9;

  public get slicedUsers(): User[] {
    return this.users.slice(0, this.limit);
  }
}
</script>

<style scoped>
.user-compact-view__container {
  margin: 5px;
  margin-left: 12px;
}
.avatar {
  border: 2px solid white;
  margin-left: -7px;
  font-size: 9px;
}
.avatar>div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 24px;
}
.avatar>div>span {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>