<template>
  <div class="topic">
    <div class="content">
      <h1>Variables and Data types</h1>
      <div class="text">
        <br />
        <h2>Was ist Variablen und warum nutzen wie sie ?</h2>
        <div class="text">
          <br />Manchmal brauchen wir variablen, um sich an die Informationen zu erinnern, die wir ihnen geben und die sie während der Programme berechnen.
          <br />Eine Variable kann als eine eine Box in der Speicher des Computers betrachtet werden, in der der Computer einen Wert speichern kann.
          <br />Der in diesem Feld enthaltene Wert kann sich ändern oder variieren. Ein Programm kann so viele Variablen verwenden, wie es benötigt.
          <br />

          <h2>Variablen Deklarartion:</h2>
          <br />Variablen deklaration hat 3 teile: rechtes ist variablen name, links der wert und dadzwischen gibt es der zuweisung operator "=" .
          <br />
          <code>
            <pre>
              name = "wert" # name = wert
            </pre>
          </code>
          <h4>Regeln für Variablennamen</h4><br>
          Eine Variable kann einen Kurznamen (wie x und y) oder einen aussagekräftigeren Namen (Alter, Autoname, Gesamtvolumen) haben. Regeln für Python-Variablen:<br>
          Ein Variablenname muss mit einem Buchstaben oder dem Unterstrich beginnen<br>
          Ein Variablenname kann nicht mit einer Zahl beginnen<br>
          Ein Variablenname darf nur alphanumerische Zeichen und Unterstriche enthalten (A-z, 0-9 und _).<br>
          Bei Variablennamen wird zwischen Groß- und Kleinschreibung unterschieden (Alter, Alter und Alter sind drei verschiedene Variablen).<br>
          <Interpreter
            desc="In diesem interaktiven Beispiel können Sie sehen, dass wir den Wert der Variable auf 0,1 gesetzt haben und dann den Wert der zu prüfenden Variable ausgedruckt haben, und tatsächlich war er 0,1"
            code="vars= 0.1; print(vars)"
          />
        </div>
        <h2>Datentypen</h2>
        <br />Jede Variable hat einen Datentyp. Dies sagt dem Interpreter, wie er die Daten interpretieren oder lesen soll innerhalb der Variablen.
        <br />Datentypen sind die Klassifizierung oder Kategorisierung von Datenelementen. Datentypen stellen eine Art Wert dar, der bestimmt, welche Operationen mit diesen Daten durchgeführt werden können. Numerische, nicht-numerische und boolesche (wahr/falsch) Daten sind die am häufigsten verwendeten Datentypen. Jede Programmiersprache hat jedoch ihre eigene Klassifizierung, die weitgehend die jeweilige Programmierphilosophie widerspiegelt.
        <br />Python hat die folgenden standardmäßigen oder eingebauten Datentypen:
        <br />
        <h4>Numerisch</h4>
        <br />Ein numerischer Wert ist jede Darstellung von Daten, die einen numerischen Wert hat. Python identifiziert drei Arten von Zahlen:
        Ganzzahl: Positive oder negative ganze Zahlen (ohne einen Bruchteil)
        Schweben: Jede reelle Zahl mit einer Fließkommadarstellung, bei der eine gebrochene Komponente durch ein Dezimalzeichen oder eine wissenschaftliche Notation bezeichnet wird
        <Interpreter
          desc="in diesem Beispiel können Sie sehen, wie der Python-Interpeter jeder Variablen einen Datentyp zuweist, entsprechend der ihr zugewiesenen Variablen. um den Datentyp zu sehen, können wir die type-Funktion mit der Druckfunktion verwenden"
          code="variable int= 1; print(type(variable int));
variable int= 1; print(type(variable int));
variable int= 1; print(type(variable int));"
        />
        <br />
        <h4>sequenz</h4><br>
        <div>
          Eine Sequenz ist eine geordnete Sammlung von ähnlichen oder unterschiedlichen Datentypen. Python hat die folgenden eingebauten Sequenzdatentypen:<br>
          <br>*  Zeichenkette: Ein String-Wert ist eine Sammlung von einem oder mehreren Zeichen, die in einfache, doppelte oder dreifache Anführungszeichen gesetzt werden. 

          In Python werden einfache, doppelte und dreifache Anführungszeichen verwendet, um eine Zeichenfolge zu bezeichnen. Die meisten verwenden einfache Anführungszeichen bei 
          der Deklaration eines einzelnen Zeichens. Doppelte Anführungszeichen werden bei der Deklaration einer Zeile und dreifache Anführungszeichen bei der Deklaration eines 
          Absatzes/mehrerer Zeilen verwendet.<br><br>
          *  Liste : Ein Listobjekt ist eine geordnete Sammlung von einem oder mehreren Datenelementen, die nicht unbedingt vom gleichen Typ sind und in eckige Klammern gesetzt werden.
          <Interpreter desc="dasselbe für dieses Beispiel" code="vars= 0.1; print(vars)" />
        </div>

        <h4>Boolesches</h4>Daten mit einem von zwei eingebauten Werten True oder False. Beachten Sie, dass 'T' und 'F' groß geschrieben werden. true und false sind keine gültigen Booleans und Python wird für sie einen Fehler ausgeben.
        <Interpreter desc="dasselbe für dieses Beispiel" code="vars= 0.1; print(vars)" />
      </div>
      <div>
        <Form lektion="2" />
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
    return {};
  }
};
</script>
<style scoped>
</style>
