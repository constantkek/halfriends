<template>
  <el-dialog
    :visible="value"
    destroy-on-clos
    title="Create new event"
    @close="close"
  >
    <template #footer>
      <el-button
        type="primary"
        @click="create"
      >
        Create
      </el-button>
    </template>
    <div class="dialog-content">
      <label>Event</label>
      <el-input
        v-model="eventName"
        placeholder="Input event name"
      />
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class EventsList extends Vue {
  @Prop({ default: false })
  public value!: boolean;

  private eventName = '';

  private close(value: boolean): void {
    this.$emit('input', value)
  }

  private create(): void {
    this.$emit('created', this.eventName);
    this.eventName = '';
  }
}
</script>

<style>
.el-dialog__header {
  text-align: left;
}

.dialog-content {
  text-align: left;
}

.el-input {
  margin-top: 5px;
}
</style>