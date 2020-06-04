<template>
  <div class="topic">
    <div class="content">
      <h1 id="comments">Comments</h1>
      <h2>What is a Comment in Python</h2>
      <p>
        a comment is simply a piece of code that is not executed by the
        interpreter. Comments are used to document and help other other
        programmers understand what it does without having to read all the code.
      </p>
      <h2>Types of Python Comments</h2>
      <p>
        In Python there are two types of comments- Single line comments and
        Multiple lines comments. Single line commenting is commonly used for a
        brief and quick comment (or to debug a program, we will see it later).
        On the other hand we use the Multiple lines comments to note down
        something much more in details or to block out an entire chunk of code.
      </p>
      <h4>Single Line Comments</h4>
      <p>
        In Python for single line comments use
        <code>#</code> sign to comment out everything following it on that line.
      </p>
      <pre><code><span class="comment">#this is a comment</span>
      myVar = <span class="string">"hello comments"</span> <span class="comment"># a variable containing something</span>
<span class="built">print</span>(myVar) <span class="comment">#print statement to print contents of a variable</span>
</code></pre>
      <h4>Multiple lines comments</h4>
      <p>
        Simply use 3 single quotes before and after the part you want to be
        commented.
      </p>
      <pre><code>
print(I am in Multiple line comment line 1)
print (I am in Multiple line comment line 2)
print(I am out of Multiple line comment)
</code></pre>
      <h4>Let's start playing with some code</h4>
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
    Interpreter,
  },
  data: () => {
    return {};
  },
  mounted() {},
};
</script>
<style scoped></style>
