import {helpers, maxLength, numeric, required, requiredIf, alpha, email} from "@vuelidate/validators";


const errors = {
    default: "Please enter a value",
    numeric: "Only numbers are allowed",
    maxWords: "Max 30 words",
    text: "Only text and spaces are valid",
    phone: "Please enter 10 digit",
}


const totalPercentage = (val, vm) => vm.totalPercentage >= 0 && vm.totalPercentage <= 100
const bankInfo = (val, vm) => vm.hasBank ? val : true
const text = (val, vm) => /^[a-zA-Z\s]+$/.test(val)
const maxWords = (val, vm) => /^(\S+\s*){1,30}$/.test(val)
const phone = (val, vm) => val.length === 10



const rules = {
    amount: {required, numeric},
    buyer: {required, maxLength: maxLength(255)},
    receipt_id: {required, maxLength: maxLength(20)},
    items: {required, maxLength: maxLength(255)},
    buyer_email: {required, email, maxLength: maxLength(50)},
    note: {
        required,
        maxWords: helpers.withMessage(errors.maxWords, maxWords),
    },
    city: {
        required,
        maxLength: maxLength(20),
        text: helpers.withMessage(errors.text, text),
    },
    phone: {
        required,
        numeric,
        maxWords: helpers.withMessage(errors.phone, phone),
    }


}




export {rules}
