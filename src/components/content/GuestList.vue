<template>
    <div class="guest-list">
        <table class="guest-list__table guest-table">
            <thead class="guest-table__head">
                <tr class="guest-table__head-row">
                    <th class="guest-table__head-cell">
                        guest
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell">
                        date order
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell">
                        check in
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell">
                        check out
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell">
                        room type
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell">
                        status
                        <span class="guest-table__sort-icon">
                            <SvgSprite class="guest-table__icon" symbol="upSort" size="0 0 11 6" />
                            <SvgSprite class="guest-table__icon" symbol="downSort" size="0 0 11 6" />
                        </span>
                    </th>
                    <th class="guest-table__head-cell"></th>
                </tr>
            </thead>
            <tbody class="guest-table__body">
                <template v-for="guest in list" :key="guest.id">
                    <guest-row :guest="guest" />
                </template>
            </tbody>
        </table>
        <page-selector :pageNumbers="pages" class="guest-list__pages"></page-selector>
    </div>
</template>

<script>
    import PageSelector from "../subComponents/PageSelector.vue";
    import GuestRow from "../subComponents/GuestRow.vue";
    export default {
        name: "GuestList",
        components: {
            PageSelector,
            GuestRow,
        },

        data() {
            const today = new Date();
            const tomorrow = new Date(today.getDate() + 1);
            const checkOut = new Date(tomorrow.getDate() + 1);
            return {
                contentOnPage: 6,
                guests: [
                    {
                        id: "GS-2234",
                        name: "Kierra Geidt",
                        order: today,
                        checkIn: tomorrow,
                        checkOut,
                        roomName: "Queen A-2345",
                        roomId: 24,
                        status: 1
                        //status: 0-booked, 1-pending, 2-cancled, 3-refund
                    },
                ],
            };
        },

        computed: {
            list() {
                return this.guests;
            },

            pages() {
                const pages = Math.floor(this.list.length / this.contentOnPage) + (this.list.length / this.contentOnPage === 0)?0:1;
                return pages;
            }
        }
    }
</script>

<style lang="scss">
    .guest-list {

    }

    .guest-table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        border-radius: 20px 20px 0px 0px;

        &__head {
            border-bottom: 2px solid $border-color;
            background-color: $secondary-background;
        }

        &__head-cell {
            vertical-align: middle;
            text-transform: capitalize;
            font-size: 18 / 16 * 1rem;
            font-weight: 500;
            cursor: pointer;
            padding: 22px 5px;

            &:first-child {
                padding-left: 20px;
            }

            &:last-child {
                width: 84 / 1475 * 100%;
                cursor: auto;
            }
        }

        &__sort-icon {
            color: $local-grey;
            margin-left: 20px;
            vertical-align: inherit;
            display: inline-flex;
            height: 15px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        &__sort-icon--up &__icon:first-child{
            color: $local-orange;
        }

        &__sort-icon--down &__icon:last-child{
            color: $local-orange;
        }
    }
</style>