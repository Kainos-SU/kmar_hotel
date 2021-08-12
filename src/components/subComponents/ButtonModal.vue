<template>
    <div class="orange-button">
        <button class="orange-button__button" @click="showModal"><slot/></button>
    </div>
    <div class="custom-modal" v-if="modal">
        <div class="custom-modal__window">
            <div class="custom-modal__header">
                <h4 class="custom-modal__title">
                   <slot/> 
                </h4>
                <div @click="close" class="custom-modal__close">X</div>
                </div>
                <form class="custom-modal__form" @submit.prevent="sendParams">
                    <ul class="custom-modal__list">
                        <li 
                        v-for="name in names"
                        :key="name"
                        class="custom-modal__item">
                            <label
                            class="custom-modal__parma-name">
                                {{name}}
                                <input
                                    v-model="result[name]"
                                    required
                                    class="custom-modal__input"
                                    type="text">
                            </label>
                        </li>

                    </ul>
                    <button type="submit" class="custom-modal__submit">Submit</button>
                </form>
        </div>
    </div>
</template>

<script>
    export default {
        name:"customModal",
        data() {
            return {
                modal: false,
                result: {},
            };
        },
        emits: [
            "send"
        ],
        props: {
            names: {
                type: Array,
                required: true,
            },
        },

        methods: {
            showModal() {
                this.modal = true;
            },

            close() {
                this.modal = false;
                this.result = {};
            },
            
            sendParams () {
                const result = this.result;
                this.$emit("send", result);
                this.result = {};
                this.close();
            },

        },

    };
</script>

<style lang="scss">
    .custom-modal {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;

        &__window {
            position: relative;
            max-width: 800px;
            width: 90%;
            background-color: $base-background;
            padding: 40px 10px 20px;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $text-color;
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
</style>
