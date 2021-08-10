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
            <custom-search @input="search"/>
            <custom-select :items="sorts" @change="sort"></custom-select>

        </div>
        <ul class="consierge-list__list">
            <consierge-card
                class="consierge-list__item"
                v-for="(consierge, index) in consiergeList"
                :key="index"
                :consierge="consierge"
                v-show = "(consierge.active && showActive) || (!(consierge.active) && showInactive)"
            ></consierge-card>
        </ul>
    </div>
</template>

<script>
    import ConsiergeCard from '../subComponents/ConsiergeCard.vue';
    import CustomSelect from '../subComponents/CustomSelect.vue';
    import CustomSearch from '../subComponents/CustomSearch.vue';
    import logo from "@/assets/logo.png";

    export default {
        components: {
            ConsiergeCard,
            CustomSelect,
            CustomSearch,
        },

        data() {
            return {
                showActive: true,
                showInactive: true,
                sorts: [
                    {value:0, name:"Sort by Newest"},
                    {value:1, name:"Sort by Oldest"}
                ],
                consiergeList: [
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date("2020", "0", "21"),
                        image: logo
                    },
                    {
                        active: false,
                        name: "andy lee",
                        id: "#EMP-00023",
                        tel: "+380970477946",
                        desc: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
                        join: new Date("2021", "0", "21"),
                    },
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date("2020", "11", "21"),
                        image: logo
                    },
                    {
                        active: false,
                        name: "andy lee",
                        id: "#EMP-00023",
                        tel: "+380970477946",
                        desc: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
                        join: new Date("2020", "5", "2"),
                    },
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date("2021", "5", "5"),
                        image: logo
                    },
                    {
                        active: false,
                        name: "andy lee",
                        id: "#EMP-00023",
                        tel: "+380970477946",
                        desc: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
                        join: new Date(),
                    }
                ],
            };
        },

        methods: {
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
        
    }
</script>

<style lang="scss">
    .consierge-list {
        


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