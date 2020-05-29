<template>
  <div class="topic">
    <Navb />
    <div class="content">
      <h1>Einführung</h1>
      <div class="text">
        <code> What is programming? </code> <br> Programming is basically talking to your computer and asking it to perform certain actions.
        <br>
        <code>Was ist eigentlich eine Programmier Sprache ?</code> <br>
        Because computers don't understand English, you have to give them
        instructions in special computer languages that computers can understand
        these languages are called programming languages. <br> A programming language
        is a type of written language that tells computers what to do in order
        to work. A programming language is like a set of
        instructions that the computer follows to do something. <br> 
        <code> Warum Python? </code> <br>
        Pyhthon ist einfach zu lernen und ermöglicht es uns, alle Arten von Computerprogrammen zu schreiben wie z .b das erstellen von Spielen. Python wird nicht nur in Schulen, sondern auch an Universitäten und großen Firmen verwendet
        <br />
        <code> Hinweis !  </code> <br>
        Don't be frustrated if you write some JavaScript that a computer doesn't
        understand. Remember that computers are easily confused, and all the
        JavaScript instructions have to be exactly right. Computers are very
        picky! Little mistakes or problems in the JavaScript are called bugs.
        Even the best programmers make many, many bugs.
      </div>
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
