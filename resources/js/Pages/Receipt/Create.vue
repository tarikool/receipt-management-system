<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';
    import { Link } from '@inertiajs/vue3';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';


</script>

<template>
    <Head title="Report" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Receipt</h2>
        </template>


        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 mt-3">
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <section>
                    <header>
                        <h2 class="text-lg font-medium text-gray-900">Add Receipt</h2>

                        <p class="mt-1 text-sm text-gray-600">
                            Insert Items and Buyer Information
                        </p>
                    </header>

                    <form @submit.prevent="saveBrand" class="mt-6 space-y-6">

                        <div class="grid grid-cols-3 gap-4">
                            <div class="sm:max-w-md">
                                <InputLabel for="amount" value="Amount" />
                                <TextInput id="amount" type="text" class="mt-1 block w-full" autocomplete="off"
                                           v-model="amount" @blur="vx.amount.$touch"/>
                                <InputError class="mt-2" v-if="vx.amount.$error"
                                            :message="errorMsg(vx.amount)" />
                            </div>
                            <div class="sm:max-w-md">
                                <InputLabel for="buyer" value="Buyer" />
                                <TextInput id="buyer" type="text" class="mt-1 block w-full" autocomplete="off"
                                           v-model="buyer" @blur="vx.buyer.$touch"/>
                                <InputError class="mt-2" v-if="vx.buyer.$error"
                                            :message="errorMsg(vx.buyer)" />
                            </div>
                            <div class="sm:max-w-md">
                                <InputLabel for="receipt_id" value="Receipt ID" />
                                <TextInput id="receipt_id" type="text" class="mt-1 block w-full" autocomplete="off"
                                           v-model="receipt_id" @blur="vx.receipt_id.$touch"/>
                                <InputError class="mt-2" v-if="vx.receipt_id.$error"
                                            :message="errorMsg(vx.receipt_id)" />
                            </div>

                            <div class="sm:max-w-md">
                                <InputLabel for="buyer_email" value="Buyer Email" />
                                <TextInput id="buyer_email" type="text" class="mt-1 block w-full" autocomplete="off"
                                           v-model="buyer_email" @blur="vx.buyer_email.$touch"/>
                                <InputError class="mt-2" v-if="vx.buyer_email.$error"
                                            :message="errorMsg(vx.buyer_email)" />
                            </div>

                            <div class="sm:max-w-md">
                                <InputLabel for="city" value="City" />
                                <TextInput id="city" type="text" class="mt-1 block w-full" autocomplete="off"
                                           v-model="city" @blur="vx.city.$touch"/>
                                <InputError class="mt-2" v-if="vx.city.$error"
                                            :message="errorMsg(vx.city)" />
                            </div>
                            <div class="sm:max-w-md">
                                <InputLabel for="phone" value="Phone" />

                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <TextInput type="text" class="w-20 rounded-l" value="+880" disabled/>
                                        <TextInput id="phone" type="text" class="mt-1 block w-full rounded-l" autocomplete="off"
                                                   v-model="phone" @blur="vx.phone.$touch"/>
                                    </div>
                                </div>

                                <InputError class="mt-2" v-if="vx.phone.$error"
                                            :message="errorMsg(vx.phone)" />

                            </div>



                        </div>


                        <div class="grid grid-cols-3 gap-4">
                            <div class="mb-4">
                                <InputLabel for="phone" value="Items" />

                                <textarea
                                    id="items"
                                    class="border border-gray-300 rounded px-3 py-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Enter items here"
                                    v-model="items"
                                    @blur="vx.items.$touch"
                                ></textarea>
                                <InputError class="mt-2" v-if="vx.items.$error" :message="errorMsg(vx.items)" />
                            </div>

                            <div class="mb-4">
                                <InputLabel for="phone" value="Note" />

                                <textarea
                                    id="note"
                                    class="border border-gray-300 rounded px-3 py-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Enter note here"
                                    v-model="note"
                                    @blur="vx.note.$touch"
                                ></textarea>
                                <InputError class="mt-2" v-if="vx.note.$error" :message="errorMsg(vx.note)" />
                            </div>

                        </div>














                        <div class="flex items-center gap-4">
                            <PrimaryButton >Save</PrimaryButton>
                        </div>
                    </form>
                </section>

            </div>
        </div>



    </AuthenticatedLayout>

</template>

<script>
    import useVuelidate from "@vuelidate/core";
    import {rules} from './Validations/createRules'

    export default {
        name: "Create",

        data() {
            return {
                name: '',
                amount: null,
                buyer: '',
                receipt_id: '',
                items: '',
                buyer_email: '',
                note: '',
                city: '',
                phone: '',
                vx: useVuelidate()
            }
        },


        methods: {
            async validate() {
                const validate = await this.vx.$validate()
                return this.vx.$errors.length;
            },

            saveBrand() {

            },

            errorMsg(input) {
                return input.$errors.length ? input.$errors[0].$message : false;
            },




        },


        validations() {
            return {...rules}
        },
    }
</script>

<style scoped>

</style>
