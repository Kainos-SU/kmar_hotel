<template>
        <div>
            <circular-loader v-if="isLoading"/>    
            <div v-else class="consierge-list">
                <div class="consierge-list__header">
                    <radio-buttons @seted="setFilterMode" :names="filters" groop="filter" class="consierge-list__filters"/>
                    <custom-search class="consierge-list__search" @input="search"/>
                    <custom-select class="consierge-list__select" :items="sorts" @change="setSortMode"></custom-select>
                    <button-modal class="consierge-list__btn" @send="addConsierge" :names="consiergeParams">Add concierge</button-modal>
                </div>
                <ul class="consierge-list__list">
                    <li
                        class="consierge-list__item"
                        v-for="consierge in pageList"
                        :key="consierge.id">
                        <consierge-card
                            :consierge="consierge"
                            :query="searchQuery"
                        ></consierge-card>
                    </li>
                </ul>
                <page-selector class="consierge-list__pages-list" :pageNumbers="pageLength" @pageChange="setPage"/>
            </div>
        </div>
</template>

<script>
    import ConsiergeCard from '../subComponents/ConsiergeCard.vue';
    import CustomSelect from '../subComponents/CustomSelect.vue';
    import ButtonModal from '../subComponents/ButtonModal.vue';
    import CustomSearch from '../subComponents/CustomSearch.vue';
    import CircularLoader from '../subComponents/CircularLoader.vue';
    import RadioButtons from '../subComponents/RadioButtons.vue';
    import PageSelector from '../subComponents/PageSelector.vue';

    
    export default {
        components: {
            ConsiergeCard,
            CustomSelect,
            CustomSearch,
            ButtonModal,
            CircularLoader,
            RadioButtons,
            PageSelector,
        },

        data() {
            return {
                isLoading: false,
                page: 0,
                searchQuery: "",
                elementsOnPage: 12,
                consiergeParams: [
                    "name",
                    "phone",
                    "job desc"
                ],
                filterMode: 0,
                filters: [
                    "all stats",
                    "active",
                    "inactive",
                ],
                sorts: [
                    {value:0, name:"Sort by Newest"},
                    {value:1, name:"Sort by Oldest"}
                ],
                sortMode: 0,
                consiergeList: [],
            };
        },

        methods: {
            addConsierge(event) {
                const consierge = {};
                consierge.id = "#EMP-" + String(this.lastId + 1).padStart(5, "0");
                consierge.active = true;
                consierge.image = null;
                consierge.join = new Date();
                consierge.name = event.name;
                consierge.desc = event["job desc"];

                this.consiergeList.push(consierge);
            },

            setSortMode (value) {
                this.sortMode = value;
            },

            sort(value) {
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
                if (value === 0) {
                    this.consiergeList.sort(sorting);
                    return;
                }
                if (value === 1) {
                    this.consiergeList.sort((a, b)=>sorting(a,b)*-1);
                    return;
                }
            },

            setFilterMode (value) {
                this.filterMode = value;
                console.log(value + "\t" + this.filterMode);
            },

            search(event) {
                console.log(event);
                this.searchQuery = event;
            },

            setPage(number) {
                this.page = number;
            }

        },

        async created() {
            this.isLoading = true;
            const response = await fetch("./json/consierge-list.json");
            const data = await response.json();
            for (const consierge of data) {
                consierge.join = new Date(consierge.join);
                this.consiergeList.push(consierge);
            }
            this.isLoading = false;
        },

        computed: {

            lastId() {
                let id = 0;
                const reg = /(?<=0)\d+/gi;
                for (const consierge of this.consiergeList) {
                    const curentId = consierge.id.match(reg)[0];
                    if (id < (+curentId)) {
                        id = parseInt(curentId)
                    }
                }

                return id;
            },

            getList() {
                this.sort(this.sortMode);
                const vm = this;
                const list = this.searchQuery === "" ? this.consiergeList : this.consiergeList.filter(a=>a.name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1);

                if (this.filterMode === 2) {
                    return list.filter(a=>!(a.active));
                }
                if (this.filterMode === 1) {
                    return list.filter(a=>a.active);
                }
                return list;
            },

            pageLength() {
                const length = this.getList.length;
                const pages = Math.floor(length / this.elementsOnPage) + (length % this.elementsOnPage!==0?1:0);
                return pages;
            },

            pageList() {
                const start = this.page * this.elementsOnPage;
                const end = start + this.elementsOnPage;
                if (this.getList.lenght < end) {
                    return this.getList.slice(start);
                }
                return this.getList.slice(start, end);
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
            padding: 50px 0 40px;
        }

        &__item {
            flex: 0 1 auto;
            min-width: 250px;
            width: 22%;
            margin-bottom: 40 / 1476 * 100%;
            margin-right: 40 / 1476 * 100%;

            @media screen and (max-width: 1575px) {
                width: 30%;
            }

            @media screen and (max-width: 1220px) {
                width: 45%;
            }

            @media screen and (max-width: 812px) {
                margin: 0 auto 40 / 1476 * 100%;
                width: 85%;
            }
        }

        &__pages-list {
            margin-bottom: 50px;
        }

    }
</style>
