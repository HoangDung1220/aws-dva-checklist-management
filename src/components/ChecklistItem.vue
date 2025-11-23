<template>
    <label class="item">
    <input type="checkbox" :checked="checked" @change="toggle" />
    <span>{{ label }}</span>
    </label>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        props: {
            label: { type: String, required: true },
            id: { type: String, required: true }
        },
        
        setup(props, { emit }) {
            const checked = ref(false);

            const saved = localStorage.getItem(props.id);
            if (saved) checked.value = saved === "1";

            function toggle(event: Event) {
                const input = event.target as HTMLInputElement;
                checked.value = input.checked;
                emit("toggle", props.id, checked.value);
            }

            return { checked, toggle };
        }
    });
</script>


<style>
    .item {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        gap: 8px;
    }
</style>