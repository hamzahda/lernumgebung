<template>

    <div id="login">
        <div id="form">
            <h2>register</h2>
        <b-form-input class="form" v-model="name" placeholder="Enter name"></b-form-input>
        <b-form-input class="form" v-model="powrd" placeholder="Enter pword"></b-form-input>
        <b-form-input class="form" v-model="rPowrd" placeholder="Repeat your pword"></b-form-input>
        <button type="submit">register</button>
        </div>
   </div>

</template>

<script>
export default {
    name:"login",
    data:()=>{
        return{
            user:{
                name:"" ,
                pword:"",
                rPword:'',
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 1rem;
}

#login{
    height: 100vh;
    display: flex;
    justify-content: center;
    }
#form{
    margin-top: 8rem;
    padding: 1rem;
}

.form{
    padding: 1rem;
}
button{
    padding: 0.5rem;
width: 100%;
border-style: none;
border-radius: 0.1rem;
background-color:steelblue ;}
</style>
