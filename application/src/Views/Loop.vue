<template>
  <div class="topic">
    <div class="content">
      <h1>For Schleife</h1>
      <div class="text">
        Denn Schleifen sind eine Möglichkeit, Code zu definieren und auszuführen, den der Computer wiederholt ausführen soll und wie oft der Computer ihn ausführen soll.  <br />
        Wie z.B. sagen wir, wir wollen ein Wort 8 mal ausgeben, indem wir auf Schleifen klagen, dann müssen wir es nicht selbst so oft schreiben, wie wir dafür eine For-Schleife definieren, und das war's.  <br />
        <code>
          Beispiel:
          <pre>
            Hallo
            Hallo
            Hallo
            Hallo
            Hallo
            Hallo
            Hallo
            Hallo
          </pre>
        </code>
        <code>
          Code:
          <pre>
            for i in range(8):
              print('Hallo')
          </pre>
        </code>  <br  />
        die range()-Funktion nimmt ein Argument und erzeugt eine Zahlenfolge von 0 bis zu diesem Argument. Die range()-Funktion selbst ist kein grundlegender Bestandteil von Python
        Was der Bereich() darstellt - eine Randbedingung - ist jedoch grundlegend für die for-Schleife: Sie gibt an, wie oft die Schleife ausgeführt werden soll.  <br  />
        Das Schlüsselwort für ist eines der wenigen speziellen Schlüsselwörter von Python, d.h. man kann keine Variable für benennen, und in einem Texteditor sollte es hervorgehoben werden.  <br  />
        Das Schlüsselwort in ist ebenfalls ein weiteres speziell reserviertes Schlüsselwort.  <br  />
        <Interpreter  
        code="for i in range(8):
        print('Hallo')"  
        />
        <h4>Anderes Beispiel</h4>
        Anstatt immer wieder die gleiche "Hallo" zu drucken, haben wir es geschafft, dem Computer zu sagen, dass er mit jeder Iteration etwas anderes drucken soll.  <br  />

        <code>
          Code:
          <pre>
            for i in range(0 , 8):
              print('Hallo',i)
          </pre>
        </code>
        <Interpreter  
        code="for i in range(0 , 8):
        print('Hallo',i)"  
        />
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
  methods: {
    count: function() {}
  },
  data: () => {
    return {
      answers: [],
      selected: []
    };
  },
  mounted() {}
};
</script>
<style scoped>
</style>
