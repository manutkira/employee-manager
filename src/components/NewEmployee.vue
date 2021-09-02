<template>
  <div id="new-employee">
      <h3>New Employee</h3>
      <div class="row">
          <form @submit.prevent="saveEmployee" class="col s12">
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="employee_id" required>
                      <label for="">Employee ID#</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="name" required>
                      <label for="">Name</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="dept" required>
                      <label for="">Department</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input type="text" v-model="position" required>
                      <label for="">Position</label>
                  </div>
              </div>
              <button type="submit" class="btn">Submit</button>
              <router-link to="/" class="btn grey">Cancel</router-link>
          </form>
      </div>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit'
export default {
    name: 'new-employee',
    data(){
        return{
            name: null,
            employee_id: null,
            dept: null,
            position: null,

        }
    },
    methods: {
        saveEmployee(){
            db.collection('employee').add({
                employee_id: this.employee_id,
                name: this.name,
                dept: this.dept,
                position: this.position
            }).then(docRef => {
                this.$router.push('/')
            }).catch(error => console.log(err))
        }
    }
}
</script>

<style>

</style>