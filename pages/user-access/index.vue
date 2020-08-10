<template>
  <div>
    <div class="row no-gutters">
      <div class="col-md-10 ml-3">
        <div class="card">
          <div class="card-header">
            Requests
          </div>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">ContactNumber</th>
                <th scope="col">Reason</th>
                <th scope="col">State</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="request in requests"
                  :key="request._id"
                  v-if="request.emailAddress"
              >
                <td>{{request.emailAddress}}</td>
                <td>{{request.contactNumber}}</td>
                <td>{{request.reason}}</td>
                <td>{{request.status}}</td>
                <td class="text-center">
                  <button class="btn btn-success" @click="approve(request._id)">Approve</button>
                  <button class="btn btn-danger" @click="reject(request._id)">Reject</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "index",
    layout: "dashboard",
    mounted() {
      this.$store.dispatch('access/getAllRequests')
    },
    methods: {
      approve(id) {
        this.$store.dispatch('access/approveUser', id)
          .then(res => {
            !res.data.status
              ? this.showErrorMsg({message: res.data.payload.message})
              : this.showSuccessMsg()
            this.$store.dispatch('access/getAllRequests')
          })
          .catch(err => {
            this.showErrorMsg();
          })
      },
      reject(id) {
        this.$store.dispatch('access/rejectUser', id)
          .then(res => {
            !res.data.status
              ? this.showErrorMsg({message: res.data.payload.message})
              : this.showSuccessMsg()
            this.$store.dispatch('access/getAllRequests')
          })
          .catch(err => {
            this.showErrorMsg();
          })
      }
    },
    notifications: {
      showErrorMsg: {
        title: "Error",
        message: "Something went wrong",
        type: "error"
      },
      showSuccessMsg: {
        title: "Success",
        message: "User access is successfully updated",
        type: "success"
      },
    },
    computed: {
      ...mapState({
        requests: state => state.access.requests,
      })
    }
  }
</script>

<style scoped>

</style>
