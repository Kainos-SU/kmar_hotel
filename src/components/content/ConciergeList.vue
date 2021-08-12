<template>
    <div class="consierge-list">
        <div class="consierge-list__header">
            <ul class="consierge-list__filters filters-list">
                <li
                    :class="{'filters-list__item':true, 'filters-list__item--active':showActive && showInactive}"
                    @click="setAll"
                >all stats</li>
                <li
                    :class="{'filters-list__item':true, 'filters-list__item--active':showActive && !showInactive}"
                    @click="setActive"
                >active</li>
                <li
                    :class="{'filters-list__item':true, 'filters-list__item--active':!showActive && showInactive}"
                    @click="setInactive"
                >inactive</li>
            </ul>
            <custom-search class="consierge-list__search" @input="search"/>
            <custom-select class="consierge-list__select" :items="sorts" @change="sort"></custom-select>
            <button-modal class="consierge-list__btn" @send="log" :names="consiergeParams">Add concierge</button-modal>
        </div>
        <ul class="consierge-list__list">
            <consierge-card
                class="consierge-list__item"
                v-for="(consierge, index) in pageList"
                :key="index"
                :consierge="consierge"
                v-show = "(consierge.active && showActive) || (!(consierge.active) && showInactive)"
            ></consierge-card>
        </ul>
        <ul class="consierge-list__pages">
            <li class="consierge-list__page" v-for="index in pageLength" :key="index">{{index}}</li>
        </ul>
    </div>
</template>

<script>
    import ConsiergeCard from '../subComponents/ConsiergeCard.vue';
    import CustomSelect from '../subComponents/CustomSelect.vue';
    import ButtonModal from '../subComponents/ButtonModal.vue';
    import CustomSearch from '../subComponents/CustomSearch.vue';

    export default {
        components: {
            ConsiergeCard,
            CustomSelect,
            CustomSearch,
            ButtonModal,
        },

        data() {
            return {
                page: 0,
                elementsOnPage: 6,
                consiergeParams: [
                    "name",
                    "phone",
                    "job desc"
                ],
                showActive: true,
                showInactive: true,
                sorts: [
                    {value:0, name:"Sort by Newest"},
                    {value:1, name:"Sort by Oldest"}
                ],
                consiergeList: [],
            };
        },

        methods: {
            log(i) {
                console.log(i);
            },

            sort(event) {
                const sorting = (a,b)=>{
                    const aValue = a.join.valueOf();
                    const bValue = b.join.valueOf();

                    if (aValue > bValue) {
                        return -1;
                    }
                    if (aValue < bValue) {
                        return 1;
                    }
                    return 0;
                };
                if (event === 0) {
                    this.consiergeList.sort(sorting);
                    return;
                }
                if (event === 1) {
                    this.consiergeList.sort((a, b)=>sorting(a,b)*-1);
                    return;
                }
            },

            search(event) {
                console.log(event);
            },

            setAll () {
                this.showActive = true;
                this.showInactive = true;
            },

            setActive () {
                this.showActive = true;
                this.showInactive = false;
            },

            setInactive () {
                this.showActive = false;
                this.showInactive = true;
            },
        },

        async created() {
            const response = await fetch("./json/consierge-list.json");
            const data = await response.json();
            for (const consierge of data) {
                consierge.join = new Date(consierge.join);
                this.consiergeList.push(consierge);
            }
        },

        computed: {
            pageLength() {
                const length = this.consiergeList.length;
                const pages = Math.floor(length / this.elementsOnPage) + (length % this.elementsOnPage!==0?1:0);
                return pages;
            },

            pageList() {
                const start = this.page * this.elementsOnPage;
                const end = start + this.elementsOnPage;
                if (this.consiergeList < end) {
                    return this.consiergeList.slice(start);
                }
                return this.consiergeList.slice(start, end);
            },
        },


        
    }
</script>

<style lang="scss">
    .consierge-list {
        
        &__header {
            display: flex;
            align-items: center;
        }

        &__filters {
            width: calc(339 / 1476 * 100%);
        }

        &__search {
            margin: 0 calc(24 / 1476 * 100%) 0 calc(149 / 1476 * 100%);
            width: calc(554 / 1476 * 100%);

            @media screen and (max-width: 1400px) {
                margin-left: calc(49 / 1476 * 100%);
                width: 35%;
            }
        }

        &__select {
            width: calc(187 / 1476 * 100%);
            margin-right: calc(24 / 1476 * 100%);

            @media screen and (max-width: 1400px) {
                width: 150px;
            }
        }


        &__list {
            display: flex;
            flex-wrap: wrap;
            padding: 50px;
        }

        &__item {
            flex: 0 1 auto;
            min-width: 250px;
            margin-bottom: 40 / 1476 * 100%;
            margin-right: 40 / 1476 * 100%;

            @media screen and (max-width: 1450px) {
                width: 30%;
            }

            @media screen and (max-width: 1115px) {
                width: 45%;
            }

            @media screen and (max-width: 812px) {
                margin: 0 auto 40 / 1476 * 100%;
                width: 85%;
            }
        }


    }
</style>
