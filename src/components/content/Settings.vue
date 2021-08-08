<template>
    <ul class="setting-list">
        <li class="setting-list__item" v-for="item in config" :key="item.key">
            <span class="setting-list__name">{{item.name}}</span>
            <span class="setting-list__switch">
                <switch-button @stateChange="updateConfig(item, $event)" :checked="item.value"/>
            </span>
        </li>
    </ul>
</template>

<script>
import SwitchButton from "../subComponents/SwitchButton.vue"
export default {
    name: "settings",

    components: {
        SwitchButton,
    },

    $emits: [
        "config-change",
    ],

    props: {
        config: {
            required: true,
        },
    },

    methods: {
        updateConfig(item, event) {
            item.value = event;
            console.log(item);
            console.log(event);
            this.$emit('config-change', item);

        }
    },

    mounted() {

    },
    
}
</script>

<style>
    .setting-list__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .setting-list__switch {
        width: 25%;
    }
</style>