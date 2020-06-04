<template>
  <div class="topic">
    <div class="content">
      <h1>Variables and Data types</h1>
      <div class="text">
        <h2>What is variables ?</h2>
        Sometimes we need computers to remember the information we give it and that it
        calculates during programs.  <br> A variable can be thought of as a box that the
        computer can use to store a value. The value held in that box   <br>  can change or
        ‘vary’. A program can use as many variables as it needs it to. 
        <br>  In python w ecreate variables  like this
        <code>  var = data </code>
        <br>
        Each variable has a data type so let's see what are data types. 
        <br>
        <h2>Data types</h2>
        It is what tells the interpreter how to should it interpret or read the data
        inside of the variable. the data types that we're going to work with the folliwng:
        Numeric, String and Lists.
        <br>

      </div>

      <Interpreter
        prog="Hallo Program"
        code="print(' Hallo ')"
        desc="to see what this programm does click on the run button"
      />
    </div>
  </div>
</template>
<script>
import Interpreter from "./Interpreter";

export default {
  name: "topic",
  components: {
    Interpreter
  },
  data: () => {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
</style>
