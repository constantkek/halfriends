<template>
	<el-avatar
		class="avatar"
		:style="`background-color: ${getColorByUsernameHash(user)}`"
		:size="34"
	>
		<div>
			<span>{{ `${user.firstname[0]}${user.lastname[0]}` }}</span>
		</div>
	</el-avatar>
</template>
<script lang="ts">
import { User } from '@/schema/User';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserAvatarView extends Vue {
	@Prop()
	public user!: User;

	private fullname(user: User): string {
    return `${user.firstname} ${user.lastname}`;
  }

	public getColorByUsernameHash(user: User): string {
    let hash = 9237;
    this.fullname(user).split('').forEach((char) => {
      hash = ((hash << 5) + hash) + char.charCodeAt(0);
    });
    const r = ((hash & 0xFF0000) >> 16).toString(16);
    const g = ((hash & 0x00FF00) >> 8).toString(16);
    const b = (hash & 0x0000FF).toString(16);
    return "#" +
      (r.substring(r.length - 2)) +
      (g.substring(g.length - 2)) +
      (b.substring(b.length - 2)); 
  }
}
</script>

<style scoped>
.avatar {
  border: 2px solid white;
  margin-left: -7px;
  font-size: 11px;
  font-weight: 600;
}
.avatar:first-child {
	margin: 0;
}
.avatar>div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 30px;
}
.avatar:last-child>div {
  width: 30px;
}
.avatar>div>span {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>