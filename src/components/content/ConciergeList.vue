<template>
    <div class="consierge-list">
        <!-- <custom-select :items="sorts"></custom-select> -->
        <ul class="consierge-list__list">
            <consierge-card class="consierge-list__item" v-for="(consierge, index) in consiergeList" :key="index" :consierge="consierge"></consierge-card>
        </ul>
    </div>
</template>

<script>
    import ConsiergeCard from '../subComponents/ConsiergeCard.vue';
    // import CustomSelect from '../subComponents/CustomSelect.vue';
    import logo from "@/assets/logo.png";

    export default {
        components: {
            ConsiergeCard,
            // CustomSelect,
        },

        data() {
            return {
                consiergeList: [
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date(),
                        image: logo
                    },
                    {
                        active: false,
                        name: "andy lee",
                        id: "#EMP-00023",
                        tel: "+380970477946",
                        desc: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
                        join: new Date(),
                    },
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date(),
                        image: logo
                    },
                    {
                        active: false,
                        name: "andy lee",
                        id: "#EMP-00023",
                        tel: "+380970477946",
                        desc: "Offer restaurant and activity recommendations and assist guests in arranging transportation",
                        join: new Date(),
                    },
                    {
                        active: true,
                        name: "alfonso franci",
                        id: "#EMP-00025",
                        tel: "+380970477946",
                        desc: "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
                        join: new Date(),
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
        
    }
</script>

<style lang="scss">
    .consierge-list {
        


        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 620px) {
            &__item {
                min-width: 90%;
                margin: auto;
            }
        }


    }
</style>