<template>
  <div class="orange-button" v-bind="$attrs">
    <button class="orange-button__button" @click="showModal"><slot /></button>
  </div>
  <div class="custom-modal" v-if="modal">
    <div class="custom-modal__window">
      <div class="custom-modal__header">
        <h4 class="custom-modal__title">
          <slot />
        </h4>
        <div @click="close" class="custom-modal__close">X</div>
      </div>
      <form class="custom-modal__form" @submit.prevent="sendParams">
        <ul class="custom-modal__list">
          <li v-for="name in names" :key="name" class="custom-modal__item">
            <label class="custom-modal__param-name">
              {{ name }}
              <input
                v-model="result[name]"
                required
                class="custom-modal__input"
                type="text"
              />
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
  name: "customModal",
  data() {
    return {
      modal: false,
      result: {},
    };
  },
  emits: ["send"],
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

    sendParams() {
      const result = this.result;
      this.$emit("send", result);
      this.result = {};
      this.close();
    },
  },
};
</script>

<style lang="scss">
    .orange-button {
        &__button {
            border: none;
            background-color: $local-orange;
            color: $secondary-background;
            font-size: 15 / 16 * 1rem;
            font-weight: 500;
            font-family: "Poppins", sans-serif;
            padding: 15px 24px;
            border-radius: 14px;
            cursor: pointer;
            -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
            transition: background-color 0.25s, box-shadow 0.25s, border-color 0.5s;
            border: 2px solid transparent;
            outline: none;

            &:hover {
            background-color: $local-orange-hover;
            }

            &:active {
            -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
            -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
            box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
            }

            &:focus-visible,
            &:focus {
            border: 2px solid $text-color;
            }
        }
    }
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
        z-index: 100;

        &__window {
            position: relative;
            max-width: 800px;
            width: 90%;
            background-color: $base-background;
            padding: 10px 30px 20px;
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
            margin-bottom: 15px;
        }

        &__close {
            cursor: pointer;
            font-weight: 600;
        }

        &__list {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        &__param-name {
            font-size: 14 / 16 * 1rem;
            text-transform: capitalize;
        }

        &__input {
            display: block;
            font-family: "Poppins", sans-serif;
            padding: 5px;
            font-size: 15 / 16 * 1rem;

        }

        &__submit {
            border: 2px solid transparent;
            font-family: "Poppins", sans-serif;
            border-radius: 10px;
            background-color: $local-green;
            display: block;
            margin: 0 auto;
            font-size: 15 / 16 * 1rem;
            padding: 0.5em;
            cursor: pointer;
            color: $text-color;
            transition: background-color 0.25s, border-color 0.15s;
            outline: none;

            &:hover {
                background-color: $local-green-hover;
            }



            &:focus,
            &:focus-visible {
                border-color: $text-color;
            }
        }
    }
</style>
