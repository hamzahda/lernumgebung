<template>
    <div id="welcome">

    </div>
</template>
<script>
export default {
    name : 'welcome',
    data : ()=>{
        return{
            isAuth : false,
        }
    },
    methods : {

    },
    created(){
       if (! this.isAuth)
        this.$router.push("/signup");
    }
}
</script>