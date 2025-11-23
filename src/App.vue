<template>
  <div class="max">
    <h1>AWS DVA Checklist Manager</h1>
    <div v-for="(group, index) in groups" :key="index">
      <ChecklistGroup
        :title="group.week"
        :items="group.items"
        :prefix="'g' + index"
        @update="saveState"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ChecklistGroup } from './data/checklist';
import { checklist } from './data/checklist';
import ChecklistGroupComponent from "./components/CheckListGroup.vue";

export default defineComponent({
  components: 
    { ChecklistGroup: ChecklistGroupComponent },

  data() {
    return {
      groups: checklist as ChecklistGroup[]
    };
  },

  mounted() {
    this.restoreState();
  },

  methods: {
    saveState() {
      localStorage.setItem("aws_dva_checklist", JSON.stringify(this.groups));
    },

    restoreState() {
      const saved = localStorage.getItem("aws_dva_checklist");
      if (!saved) return;
    }
  }
  });
</script>


<style>
body {
font-family: Arial, sans-serif;
margin: 0;
padding: 20px;
background: #f5f5f5;
}
.max {
max-width: 900px;
margin: auto;
}
h1 {
margin-bottom: 20px;
}
</style>