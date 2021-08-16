<template>
    <tr class="guest-row">
        <td class="guest-row__guest">
            <a href="#" @click.prevent class="guest-row__guest-id">
                {{guest.id}}
            </a>
            
            <div class="guest-row__guest-name">
                {{guest.name}}
            </div>
        </td>
        <td class="guest-row__order">
            <div class="guest-row__order-date">{{orderDate}}</div>
            <div class="guest-row__order-time">{{orderTime}}</div>
        </td>
        <td class="guest-row__check-in">
            <div class="guest-row__checkIn-date">{{checkInDate}}</div>
            <div class="guest-row__checkIn-time">{{checkInTime}}</div>
        </td>
        <td class="guest-row__check-out">
            <div class="guest-row__checkOut-date">{{checkOutDate}}</div>
            <div class="guest-row__checkOut-time">{{checkOutTime}}</div>
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
            <div>{{getStatus}}</div>
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

        height: 125px;

        &__guest-id {
            color: $local-orange;
            font-weight: 400;
            font-family: inherit;
            font-size: 1rem;
            display: block;
            margin-bottom: 8px;
            text-transform: uppercase
        }

        &__guest-name {
            font-weight: 500;
            font-size: 15 / 16 * 1rem;
            font-weight: 400;
            color:$text-color;
        }

        &__order-date,
        &__checkIn-date,
        &__checkOut-date,
        &__room-name {
            font-size: 15 / 16 * 1rem;
            font-weight: 500;
            margin-bottom: 8px;
        }

        &__order-time,
        &__checkIn-time,
        &__checkOut-time,
        &__room-id {
            font-size: 14 / 16 * 1rem;
            font-weight: 400;
        }

        &__status {
            text-transform: capitalize;
            vertical-align: middle;
            & div {
                width: 113px;
                height: 50px;
                border-radius: 14px;
                transition: background-color 0.25s, color 0.25s;
                font-size: 15 / 16 * 1rem;
                font-weight: 500;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    color: $text-color;
                }
            }

            &--pending div {
                background-color: rgba($local-yellow, 0.15);
                color: $local-yellow;

                &:hover {
                    background-color: $local-yellow;
                }
            }

            &--booked div {
                background-color: rgba($local-green, 0.15);
                color: $local-green;

                &:hover {
                    background-color: $local-green;
                }
            }

            &--canceled div {
                background-color: rgba($menu-color, 0.15);
                color: $menu-color;

                &:hover {
                    background-color: $menu-color;
                }
            }

            &--refund div {
                background-color: rgba($local-red, 0.15);
                color: $local-red;

                &:hover {
                    background-color: $local-red;
                }
            }
        }

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
