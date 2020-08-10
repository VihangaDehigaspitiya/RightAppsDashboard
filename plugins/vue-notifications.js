import VueNotifications from 'vue-notifications'
import Vue from 'vue'
import 'jquery'
import toastr from 'toastr' // https://github.com/CodeSeven/toastr
import 'toastr/build/toastr.min.css'

toastr.options = {
  "positionClass": "toast-bottom-right"
}

function toast({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return toastr[type](message, title, { timeOut: timeout })
}


const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
