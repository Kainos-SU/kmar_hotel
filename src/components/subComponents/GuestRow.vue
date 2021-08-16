<template>
    <tr class="guest-row">
        <td class="guest-row__guest">
            {{guest.id}}
            <br>
            {{guest.name}}
        </td>
        <td class="guest-row__order">
            {{orderDate}}
            <br>
            {{orderTime}}
        </td>
        <td class="guest-row__check-in">
            {{checkInDate}}
            <br>
            {{checkInTime}}
        </td>
        <td class="guest-row__check-out">
            {{checkOutDate}}
            <br>
            {{checkOutTime}}
        </td>
        <td class="guest-row__room">
            <div class="guest-row__room-name">
                {{guest.roomName}}
            </div>
            <div class="guest-row__room-id">
                Room No. {{String(guest.roomId).padStart(4, "0")}}
            </div>
        </td>
        <td :class="{'guest-row__status':true, 'guest-row__status--booked':guest.status===0, 'guest-row__status--pending':guest.status===1, 'guest-row__status--canceled':guest.status===2, 'guest-row__status--refund':guest.status===3}">
            {{getStatus}}
        </td>
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
        
        locale: {
            type: String,
            default: "en-US",
        }
    },

    methods: {
        getDate (date) {
            const format = new Intl.DateTimeFormat(this.locale, {
                weekday: "long",
                month: "short",
                year: "numeric",
                day: "numeric",
            });

            return format.format(date);
        },

        getTime (date) {
            const format = new Intl.DateTimeFormat(this.locale, {
                hour: "2-digit",
                minute: "2-digit",
            });

            return format.format(date);
        },

        getBaseDate(date) {
            const format = new Intl.DateTimeFormat(this.locale, {
                month: "short",
                year: "numeric",
                day: "numeric",
            });

            return format.format(date);
        },
    },

    computed: {
        orderDate() {
            return this.getDate(this.guest.order);
        },

        orderTime() {
            return this.getTime(this.guest.order);
        },

        checkInDate () {
            return this.getBaseDate(this.guest.checkIn);
        },

        checkInTime () {
            return this.getTime(this.guest.checkIn);
        },

        checkOutDate () {
            return this.getBaseDate(this.guest.checkOut);
        },

        checkOutTime () {
            return this.getTime(this.guest.checkOut);
        },

        getStatus () {
            switch (this.guest.status) {
                case 0:
                    return "booked";
                case 1:
                    return "pending";
                case 2:
                    return "canceled";
                default:
                    return "refund";
            }    
        },

    },
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
