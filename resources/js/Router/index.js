import {createRouter, createWebHistory} from "vue-router";

import ReceiptList from "../Components/Receipt/List";
import ReceiptCreate from "../Components/Receipt/Create";


const routes = [
    {
        path: '/receipts/list',
        name: 'receipts.list',
        component: ReceiptList
    }, {
        path: '/receipts/create',
        name: 'receipts.create',
        component: ReceiptCreate
    },
]


export default createRouter({
    history: createWebHistory(),
    routes
})
