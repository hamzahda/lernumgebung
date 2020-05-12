<template>
    <div id="welcome">
        <Navb/>
    </div>
</template>
<script>
import Navb from './Navb';
export default {
    components : {Navb},
    name : 'welcome',
    data : ()=>{
        return{
            isAuth : true,
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