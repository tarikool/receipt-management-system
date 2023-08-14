<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';
    import { Link } from '@inertiajs/vue3';
    import TextInput from '@/Components/TextInput.vue';


</script>

<template>
    <Head title="Report" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Report</h2>
        </template>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-between space-x-2 bg-white p-3">
                    <div class="flex">

                        <input class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                               :value="entryBy"
                               @input="searchReports"
                               placeholder="Search.."/>
                    </div>

                    <Link class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          :href="route('receipts.create')"> Add New
                    </Link>


                </div>



                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Buyer
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Receipt ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Items
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Entry By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>

                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="receipt in receipts" :key="receipt.id">
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    v-text="receipt.buyer"/>
                                <td class="px-6 py-4" v-text="receipt.amount"/>
                                <td class="px-6 py-4" v-text="receipt.receipt_id"/>
                                <td class="px-6 py-4" v-text="receipt.items"/>
                                <td class="px-6 py-4" v-text="receipt.entry_by"/>
                                <td class="px-6 py-4" v-text="receipt.entry_at"/>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </template>



                        </tbody>
                    </table>
                </div>

            </div>
        </div>


    </AuthenticatedLayout>

</template>

<script>
    import { router } from '@inertiajs/vue3'

    export default {
        name: "List",
        props: ['receipts', 'entryBy'],
        methods: {
            searchReports() {
                router.get('/reports', {entryBy: event.target.value})
            },
        },

    }
</script>

<style scoped>

</style>
