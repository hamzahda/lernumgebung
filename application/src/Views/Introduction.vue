<template>
  <div class="topic">
    <div class="content">
      <h1 >Einführung</h1>
      <hr />
      <h2>What is programming?</h2>
      <div class="text">Programming is basically talking to your computer and asking it to perform certain actions.</div><br>
      <h2
      >Was ist eigentlich eine Programmier Sprache ?</h2>
      <div class="text">
        Because computers don&#39;t understand English, you have to give them instructions in special computer languages that computers can understand these languages are called programming languages.
        A programming language is a type of written language that tells computers what to do in order to work. A programming language is like a set of instructions that the computer follows to do something.<br>
      </div>
      <br>
      <h2 >Warum Python?</h2>
      <div class="text">Pyhthon ist einfach zu lernen und ermöglicht es uns, alle Arten von Computerprogrammen zu schreiben wie z .b das erstellen von Spielen. Python wird nicht nur in Schulen, sondern auch an Universitäten und großen Firmen verwendet </div>
      <h2 class="hinweis">Hinweis !</h2><br>
      <div class="text">  be frustrated if you write some code that a computer doesn&#39;t understand. 
        Remember that computers are easily confused, and all the code instructions have to be exactly right. Computers are very picky! Little mistakes or problems in the code are called bugs. Even the best programmers make many, many bugs.</div>
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
    return {
      isAuthi: true
    };
  },
  mounted() {
    if (!this.isAuthi) this.$router.push("/signup");
  }
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
code {
  font-size: 1rem;
}
</style>
