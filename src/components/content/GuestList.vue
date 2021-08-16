<template>
    <div class="guest-list">
        <circular-loader v-show="loading"/>
        <table class="guest-list__table guest-table" v-show="!loading">
            <thead class="guest-table__head">
                <tr class="guest-table__head-row">
                    <th class="guest-table__head-cell" @click="sortByName">
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
    import CircularLoader from "../subComponents/CircularLoader.vue";
    export default {
        name: "GuestList",
        components: {
            PageSelector,
            GuestRow,
            CircularLoader,
        },

        data() {
            return {
                contentOnPage: 6,
                loading: true,
                guests: [
                   
                ],
            };
        },

        methods: {
            sortByState() {
                return this.guests.sort((a, b)=>{
                    const aState = a.status;
                    const bState = b.status;
                    const aName = a.name;
                    const bName = b.name;
                    if (aState < bState) {
                        return -1;
                    }
                    if (aState > bState) {
                        return 1;
                    }
                    if (aName < bName) {
                        return -1
                    }
                    if (aName > bName) {
                        return 1;
                    }
                    return 0;
                });
            },

            sortByName() {
                return this.guests.sort((a, b)=>{
                    const aValue = a.name;
                    const bValue = b.name;
                    if (aValue < bValue) {
                        return -1;
                    }
                    if (aValue > bValue) {
                        return 1;
                    }

                    return 0;
                });
            },
        },

        computed: {
            list() {
                return this.guests;
            },

            pages() {
                const pages = Math.floor(this.list.length / this.contentOnPage) + (this.list.length / this.contentOnPage === 0)?0:1;
                return pages;
            }
        },

        async created() {
            this.loading = true;
            
            const response = await fetch("./json/guest-list.json");
            const data = await response.json();
            for (let guest of data) {
                guest.order = new Date(guest.order);
                guest.checkIn = new Date(guest.checkIn);
                guest.checkOut = new Date(guest.checkOut);
                this.guests.push(guest);
            }
            //some code

            this.loading = false;
        },
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
