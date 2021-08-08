<template>
    <!-- <label class="container"> -->
    <label class="switch">
        <input type="checkbox"
            class="switch__input"
            v-model="state"
            @change="sendState"

        />
        <span class="switch__switch"></span>
        <span class="switch__label">
            <slot />
        </span>
    </label>
</template>

<script>
export default {
    name: "switch",
    props: {
        checked: {
            required: true,
            type: Boolean,
        },
    },

    data() {
        return {
            state: false,
        };
    },

    methods: {
        sendState() {
            this.$emit("stateChange", this.state);
        }
    },

    watch: {
        checked: {
            immediate: true,
            handler(curent) {
                this.state = curent;
            },
        }
    },

}
</script>

<style lang="scss" scoped>
    .switch {
        cursor: pointer;
        display: flex;
        align-items: center;

        &__label {
            margin-left: 12px;
            color: #1a202c;
        }

        &__input {
            position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
        }

        &__switch {
            --switch-container-width: 50px;
            --switch-size: calc(var(--switch-container-width) / 2);
            --light-gray: #e2e8f0;
            --gray: #cbd5e0;
            --dark-gray: #a0aec0;
            --teal: #4fd1c5;
            --dark-teal: #319795;

            /* Vertically center the inner circle */
            display: flex;
            align-items: center;
            position: relative;
            height: var(--switch-size);
            flex-basis: var(--switch-container-width);
            /* Make the container element rounded */
            border-radius: var(--switch-size);
            background-color: var(--light-gray);
            transition: background-color 0.25s ease-in-out;

            &::before {
                content: "";
                position: absolute;
                /* Move a little bit the inner circle to the right */
                left: 1px;
                height: calc(var(--switch-size) - 4px);
                width: calc(var(--switch-size) - 4px);
                /* Make the inner circle fully rounded */
                border-radius: 9999px;
                background-color: white;
                transition: transform 0.375s ease-in-out;
            }
        }

        &__input:checked + &__switch {
            /* Teal background */
            background-color: var(--teal);
        }

        &__input:checked + &__switch::before {
            border-color: var(--teal);
            /* Move the inner circle to the right */
            transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
        }
    }
</style>