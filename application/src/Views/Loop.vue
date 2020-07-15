<template>
  <div class="topic">
    <div class="content">
      <h1>Schleifen In Python</h1>
      <h2>For Schleife</h2>
      <div class="text">
        <br />schleifen, werden benötigt, um einen Codeblock, den man auch als Schleifenkörper bezeichnet, wiederholt auszuführen. In Python gibt es zwei 
        Schleifentypen: die while-Schleife und die for-Schleife.
        Ablaufdiagramm einer SchleifeDie meisten Schleifen enthalten einen Zähler oder ganz allgemein Variablen, die im Verlauf der Berechnungen innerhalb 
        des Schleifenkörpers ihre Werte ändern. Außerhalb, d.h. noch vor dem Beginn der Schleife, werden diese Variablen initialisiert. Vor jedem Schleifendurchlauf
         wird geprüft, ob ein Ausdruck, in dem diese Variable oder Variablen vorkommen, wahr ist. Dieser Ausdruck bestimmt das Endekriterium der Schleife. 
         Solange die Berechnung dieses Ausdrucks "True" liefert wird der Rumpf der Schleife ausgeführt. Nachdem alle Anweisungen des Schleifenkörpers durchgeführt 
         worden sind, springt die Programmsteuerung automatisch zum Anfang der Schleife, also zur Prüfung des Endekriteriums zurück und prüft wieder, ob diese nochmals erfüllt ist.
        Wenn ja, geht es wie oben beschrieben weiter, ansonsten wird der Schleifenkörper nicht mehr ausgeführt und es wird mit dem Rest des Skriptes fortgefahren.
        Das nebenstehende Diagramm zeigt dies schematisch.<br /><br />
        <br />Denn Schleifen sind eine Möglichkeit, Code zu definieren und auszuführen, den der Computer wiederholt ausführen soll und wie oft der Computer ihn ausführen soll.
        <br />Wie z.B. sagen wir, wir wollen ein Wort 8 mal ausgeben, indem wir auf Schleifen klagen, dann müssen wir es nicht selbst so oft schreiben, wie wir dafür eine For-Schleife definieren, und das war's.
        <br />
        <br />
        
        <div class="imgc"><img src="../assets/ablauf_schleife1s.png" /></div>
        <br />
        <br />
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
          Kode:
          <pre>
            for i in range(8):
              print('Hallo')
          </pre>
        </code>
        <br />
        <br />die range()-Funktion nimmt ein Argument und erzeugt eine Zahlenfolge von 0 bis zu diesem Argument. Die range()-Funktion selbst ist kein grundlegender Bestandteil von Python
        Was der Bereich() darstellt - eine Randbedingung - ist jedoch grundlegend für die for-Schleife: Sie gibt an, wie oft die Schleife ausgeführt werden soll.
        <br />Das Schlüsselwort für ist eines der wenigen speziellen Schlüsselwörter von Python, d.h. man kann keine Variable für benennen, und in einem Texteditor sollte es hervorgehoben werden.
        <br />Das Schlüsselwort in ist ebenfalls ein weiteres speziell reserviertes Schlüsselwort.
        <br />
        <br />
        <br />
        <Interpreter code="for i in range(8):
        print('Hallo')" />
        <br />
        <br />

        <h4>Anderes Beispiel</h4>
        <br />
        <br />Anstatt immer wieder die gleiche "Hallo" zu drucken, haben wir es geschafft, dem Computer zu sagen, dass er mit jeder Iteration etwas anderes drucken soll.
        <br />
        <br />
        <br />

        <code>
          Kode:
          <pre>
            for i in range(0 , 8):
              print('Hallo',i)
          </pre>
        </code>
        <br />
        <br />

        <Interpreter code="for i in range(0 , 8):
        print('Hallo',i)" />

        <h2>While Schleife</h2>
        <br />
        <br />Eine while-Schleifenanweisung in der Programmiersprache Python führt wiederholt eine Zielanweisung aus, solange eine bestimmte Bedingung erfüllt ist.
        <br />
        <br />
        <code>
          Syntax einer while-Schleife in der Programmiersprache Python lautet -
          <pre>
            while (Bedingung):
                Anweisung
                Anweisung
          </pre>
        </code>
        <br />Wenn wir nun mit der while-Schleife das gleiche Ergebnis wie im vorherigen Beispiel erzielen möchten, sieht der Code folgendermaßen aus
        <br />
        <br />
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
          Kode:
          <pre>
            count=0
            while (count < 8):
              print('Hallo')
              count = count + 1
          </pre>
        </code>
        <br />
        <br />
        <Interpreter
          code="count=0
while (count < 8):
    print('Hallo')
    count = count +1"
        />
        <br />
        <br />

        <h4>Endlosschleifen</h4>Eine Schleife wird zu einer Endlosschleife, wenn eine Bedingung niemals FALSCH wird. Bei der Verwendung von while-Schleifen ist Vorsicht geboten,
        da diese Bedingung möglicherweise nie in einen FALSE-Wert aufgelöst wird. Dies führt zu einer Schleife, die niemals endet. Eine solche Schleife wird
        als Endlosschleife bezeichnet.
        <br />
        <br />Eine Endlosschleife kann bei der Client / Server-Programmierung hilfreich sein, bei der der Server kontinuierlich ausgeführt werden muss, damit Client-Programme
        bei Bedarf mit ihm kommunizieren können.
        <br />
        <br />
        <code>
          Kode
          <pre>
            var = 1
            while var == 1 :  # This constructs an infinite loop
            num = raw_input('Ihre name')
            print 'Name  ', num
          </pre>
        </code>

        <h4>Verwenden der else-Anweisung mit While-Schleife</h4>
        Python unterstützt die Zuordnung einer else-Anweisung zu einer Schleifenanweisung.
        Wenn die else-Anweisung mit einer while-Schleife verwendet wird, wird die else-Anweisung ausgeführt, wenn die Bedingung falsch wird.
        Das folgende Beispiel zeigt die Kombination einer else-Anweisung mit einer while-Anweisung

<br><br>
        <code>
          Kode:
          <pre>
            count=0
            while count < 2:
              print('weniger als 2')
            else:
              print('nicht weniger als 2')
          </pre>
        </code>

<br><br>
        <code>
          Ausgabe:
          <pre>
            weniger als 2
            weniger als 2
            nicht weniger als 2
          </pre>
        </code>
        <Interpreter
          code="count=0
while count < 2:
  print('weniger als 2')
  count = count +1
else:
  print('nicht weniger als 2')"
        />
        <Form lektion="5"/>
      </div>
    </div>
    

  </div>
</template>
<script>
import Interpreter from "./Interpreter";
import Form from "./Form";

export default {
  name: "topic",
  components: {
    Interpreter,
    Form
  },
  methods: {
    count: function() {}
  },
  data: () => {
    return {
      answers: [],
      selected: []
    };
  }
};
</script>
<style scoped>
img {
  text-align: center;
  align-content: center;
}
</style>
