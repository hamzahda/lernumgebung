<template>
  <div class="topic">
    <div class="content">
      <h1 id="comments">Kommentare</h1>
      <br />
      <h2>Was sind denn Kommentare ?</h2>
      <br />
      <div
        class="text"
      >Ein Kommentar ist einfach ein Code, der vom Interpreter nicht ausgeführt wird. Kommentare werden verwendet, um andere Programmierer zu dokumentieren und ihnen zu helfen, zu verstehen, was sie tun, ohne den gesamten Code lesen zu müssen.</div>

      <h2>Arten der Kommentare ?</h2>
      <br />
      <div class="text">
        In Python gibt es zwei Arten von Kommentaren: Einzeilige Kommentare und
        Mehrzeilige Kommentare. Einzeilige Kommentare werden üblicherweise für a verwendet
        kurzer und schneller Kommentar (oder um ein Programm zu debuggen, werden wir es später sehen).
        Auf der anderen Seite verwenden wir die Kommentare für mehrere Zeilen, um sie zu notieren
        etwas viel mehr im Detail oder um einen ganzen Teil des Codes auszublenden.
      </div>
      <br />
      <h2>Einzeilige Kommentare</h2>
      <br />
      <div
        class="text"
      >Verwenden Sie in Python für einzeilige Kommentare das Zeichen #, um alles zu kommentieren, was in dieser Zeile folgt.</div>
      <code>
        <pre>
          <span class="comment">#this is a comment</span>
          <span class="code">myVar =</span> <span class="string">"hello comments"</span> <span class="comment"># a variable containing something</span>
          <span class="code">print</span>(myVar) <span class="comment">#print statement to print contents of a variable</span>

        </pre>
      </code>
      <br />
      <h2>Kommentare mit mehreren Zeilen</h2>
      <br />
      <div class="text">
        Verwenden Sie einfach 3 einfache Anführungszeichen vor und nach dem Teil, der Sie sein möchten
        kommentiert.
      </div>
      <code>
        <pre>
        <span class="comment">'''
        <span class>print</span>(<span class>I am in Multiple line comment line 1</span>)
        <span class>print</span>(<span class>I am in Multiple line comment line 2</span>)
        <span class>print</span>(<span class>I am out of Multiple line comment</span>)
        '''</span>
  </pre>
      </code>

      <Interpreter prog="Hallo Program" code="print('Hallo') #Kommentare testen" />
      <div>
        <b-form-group label="Individual radios">
          <b-form-radio v-model="slcted[0]" name="some-radios" value="A">Option A</b-form-radio>
          <b-form-radio v-model="slcted[0]" name="some-radios" value="B">Option B</b-form-radio>
          <button @click="count">send</button>
          counter: {{counter}}
        </b-form-group>
      </div>
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
      answers: ["a"],
      slcted: [],
      counter: 0
    };
  },
  mounted() {},
  methods: {
    count: function() {
    }
  }
};
</script>
<style scoped></style>
