<template>
  <vue-cal
    style="height: 500px"
    class="vuecal--blue-theme"
    :events="events"
    :time-from="12 * 60"
  ></vue-cal>
</template>

<script setup>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

let events = [
  {
    start: '2022-09-02 17:00',
    end: '2022-09-02 19:00',
    title: 'Training',
  },
  {
    start: '2022-09-01 17:00',
    end: '2022-09-01 19:00',
    title: 'Training',
  },
  {
    start: '2022-09-03 17:00',
    end: '2022-09-03 19:00',
    title: 'Training',
    background: true,
  },
];
</script>

<style>
/* Green-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #6771fc;
}
.vuecal__title-bar {
  background-color: #c1c1c1;
}
.vuecal__cell--today,
.vuecal__cell--current {
  background-color: rgba(240, 240, 255, 0.4);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, 0.4);
}
.vuecal__cell--selected:before {
  border-color: rgba(66, 185, 131, 0.5);
}

/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: rgba(195, 255, 225, 0.5);
}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: rgba(0, 81, 255, 0.25);
}
</style>
