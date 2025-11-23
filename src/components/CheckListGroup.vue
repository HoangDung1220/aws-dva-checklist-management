<template>
    <div class="group">
        <h2>{{ title }}</h2>
            <div v-for="(item, index) in items" :key="index">
                <ChecklistItem
                    :label="item"
                    :id="prefix + '_i' + index"
                    @toggle="onToggle"
                />
        </div>
    </div>
</template>


<script lang="ts">
    import { defineComponent } from "vue";
    import ChecklistItem from "./ChecklistItem.vue";

    export default defineComponent({
        components: { ChecklistItem },
        props: {
            title: { type: String, required: true },
            items: { type: Array as () => string[], required: true },
            prefix: { type: String, required: true }
        },
        methods: {
            onToggle(id: string, checked: boolean) {
                localStorage.setItem(id, checked ? "1" : "0");
                this.$emit("update");
            }
        }
    });
</script>

<style>
    .group {
        background: white;
        padding: 20px;
        margin-bottom: 16px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 80vw;
    }

    h2 {
        margin-bottom: 12px;
    }
</style>