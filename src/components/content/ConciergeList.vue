<template>
    <!-- <custom-select :items="sorts"></custom-select> -->
    <consierge-card v-for="(consierge, index) in consiergeList" :key="index" :consierge="consierge"></consierge-card>
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
                        active: true,
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