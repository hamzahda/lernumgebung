<template>
    <div class="topic">
       <Navb/> 
       <div class="content">
           <h2>Python Statement</h2>
           <div>
               Instructions that a Python interpreter can execute are called statements. For example, 
               <code>a = 1</code> is an assignment statement. <br> <code>if</code> statement, <code> for </code> statement, <code>while </code> statement, etc. are other kinds of statements which will be discussed later.
            </div>
            <h2>Multi-line statement</h2>
            <div>
                In Python, the end of a statement is marked by a newline character. 
                <br> But we can make a statement extend over multiple lines with the line continuation character <code>\</code>. For example:
            </div>
           <Code code="print('Hello')" />
       </div>
    </div>
</template>
<script>
import Code from './Code';
import Navb from './Navb';
export default {
    name: "topic",
    components:{
        Navb, 
        Code
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