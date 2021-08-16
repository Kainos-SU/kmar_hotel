<template>
    <tr class="guest-row">
        <td class="guest-row__guest">
            {{guest.id}}
            <br>
            {{guest.name}}
        </td>
        <td class="guest-row__order">

        </td>
        <td class="guest-row__check-in"></td>
        <td class="guest-row__check-out"></td>
        <td class="guest-row__room"></td>
        <td class="guest-row__status"></td>
        <td class="guest-row__menu">
            <div class="guest-row__menu-icon">
                <div class="guest-row__dot"></div>
                <div class="guest-row__dot"></div>
                <div class="guest-row__dot"></div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "GuestRow",

    props: {
        guest: {
            type: Object,
            required: true,
        },
    },

    computed: {
        odrderDate() {
            const date = this.guest.odrder;
            return date;
        },
    }
}
</script>

<style lang="scss">
    .guest-row {
        &__menu {
            vertical-align: middle;
        }

        &__menu-icon {
            border-radius: 50%;
            position: relative;
            width: 24px;
            height: 24px;
            color: $local-grey;
            cursor: pointer;
            margin: auto;
        }

        &__dot {
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:first-child {
                left: calc(50% - 8px);
            }

            &:last-child {
                left: calc(50% + 8px);
            }
        }
    }
</style>