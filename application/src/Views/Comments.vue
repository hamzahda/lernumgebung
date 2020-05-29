<template>
  <div class="topic">
    <Navb />
    <div class="content">
      <h1>Comments</h1>
      <div class="text">
        <code> What is Comments ? </code> <br>
        A coment is simply a piece of code that is not executed by the interpreter and we use them to document the code.
        <br>
        <code>Why do we use comments ?</code>
        <code>Types of Python Comments</code> <br>
        In Python there are two types of comments- Single line comments and Multiple lines comments. Single line commenting is commonly used for a brief and quick comment (or to debug a program, we will see it later). On the other hand we use the Multiple lines comments to note down something much more in details or to block out an entire chunk of code.
        <code>
          <pre>
            Simply use 3 single quotes before and after the part you want to be commented.
            '''
            print("I am in Multiple line comment line 1")
            print ("I am in Multiple line comment line 2")
            '''
            print("I am out of Multiple line comment")
          </pre>
        </code>
        <br>
        <code>Single Line Comments</code>  <br> 
        In Python for single line comments use # sign to comment out everything following it on that line.
        <br />
        <code>
          <pre>
            #this is a comment
            myVar = "hello comments" # a variable containing something
            print(myVar) #print statement to print contents of a variable
          </pre>
        </code>
      <h4> Let's start playing with some code </h4>
      <Interpreter prog="Hallo Program" code="print(' Hallo ')" desc="to see what this programm does click on the run button" />
    </div>
  </div>
</template>
<script>
import Interpreter from "./Interpreter";
import Navb from "./Navb";
export default {
  name: "topic",
  components: {
    Navb,
    Interpreter,
  },
  data: () => {
    return {
      isAuthi: true,
    };
  },
  mounted() {
    if (!this.isAuthi) this.$router.push("/signup");
  },
};
</script>
<style scoped>
.topic {
  display: flex;
}
.content {
  margin: 2rem;
  padding: 2rem;


}

.text {
  font-family: Helvetica;
  color: #303030;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
}
code{
    font-size: 1rem;
}
</style>
