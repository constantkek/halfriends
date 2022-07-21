<template>
  <div class="event-view__container">
    <section class="event-view__header">
      <div class="header__name">
        <div>
          <el-page-header
            title="back"
            @back="goBack"
          >
            <template #content>
              <h1>{{ event.name }}</h1>
            </template>
          </el-page-header>
        </div>
        <p
          v-if="event.description"
          class="event-view__paragraph"
        >
          {{ event.description }}
        </p>
      </div>
      <div class="header__actions">
        <div class="actions__wrapper">
          <el-button
            icon="el-icon-download"
            disabled
          >
            Export as PDF
          </el-button>
          <el-button
            icon="el-icon-download"
            disabled
          >
            Export as JSON
          </el-button>
          <el-button
            icon="el-icon-delete"
            disabled
            type="danger"
          >
            Delete event
          </el-button>
        </div>
      </div>
    </section>
    <el-divider />
    <section class="event-view__products">
      <h1>Products</h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Event } from '@/schema/Event';
import { Component, Prop } from 'vue-property-decorator';
import { eventStore } from '@/store/eventStore';

@Component
export default class EventView extends Vue {
  @Prop()
  public id!: number;

  public event?: Event;

  private created(): void {
    this.event = eventStore.event(this.id);
  }

  public goBack(): void {
    this.$router.back();
  }
}
</script>

<style>
.event-view__container {
  padding: 1.5rem;
}
.event-view__paragraph {
  font-size: 12px;
  color: #999;
  line-height: 1rem;
}
.event-view__header {
  display: flex;
  gap: 20px;
}
.header__name {
  width: 70%;
}
.header__actions {
  width: 30%;
}
.actions__wrapper {
  display: flex;
  flex-direction: column;
}
.actions__wrapper button {
  margin: 5px 0 !important;
}
.el-page-header__title {
  display: flex;
  align-items: center;
}
</style>