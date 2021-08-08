import { createRouter, createWebHashHistory } from 'vue-router';
import BookingPage from '../components/content/BookingPage.vue';
import ConciergeList from '../components/content/ConciergeList.vue';
import DashboardScreen from '../components/content/DashboardScreen.vue';
import GuestList from '../components/content/GuestList.vue';
import RoomsList from '../components/content/RoomsList.vue';
import Settings from '../components/content/Settings.vue';


const routes = [
    {
        path: '/',
        name: "Dashboard",
        component: DashboardScreen,
    },
    {
        path: '/booking',
        name: "Bookings",
        component: BookingPage,
    },
    {
        path: '/guest',
        name: "Guest",
        component: GuestList,
    },
    {
        path: '/concierge',
        name: "Concierge",
        component: ConciergeList,
    },
    {
        path: '/rooms',
        name: "Rooms",
        component: RoomsList,
    },
    {
        path: '/settings',
        name: "Settings",
        component: Settings,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;