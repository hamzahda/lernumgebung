<template>
    <div class="topic">
       <Navb/> 
       <div class="content">
           <br>
           <h2>Einfügrung</h2>
           <div>
             was ist Python ?
             was ermöglicht Python und beispiele
           </div>
            <br>
            <h2>Multi-line statement</h2>
            <div>
                In Python, the end of a statement is marked by a newline character. 
                <br> But we can make a statement extend over multiple lines with the line continuation character <code>\</code>. For example:
            </div>
           <Interpreter code="print('Hello')" />
       </div>
    </div>
</template>
<script>
import Interpreter from './Interpreter';
import Navb from './Navb';
export default {
    name: "topic",
    components:{
        Navb, 
        Interpreter
    }
}
</script>
<style scoped>
.topic{
    display: flex;

}
.content{
    margin: 2rem;
    padding: 2rem;
}
</style>