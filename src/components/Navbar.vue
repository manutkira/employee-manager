<template>
    <nav>
        <div class="nav-wrapper green">
            <div class="container">
                <router-link to="/" class="brand-logo">Employee Manager</router-link>
                <ul class="right">
                    <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
                    <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
                    <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                    <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                    <li v-if="isLoggedIn"><button @click="logout" class="btn black">Log Out</button></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase/app'
export default {
    name: 'navbar',
    data(){
        return{
            isLoggedIn: false,
            currentUser: false,
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() =>{
                this.$router.push('/login')
            })
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.email
        }
    }
}
</script>
<style scoped>
.email{
    padding-right: 10px;
}
</style>