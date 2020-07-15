<template>
  <div class="topic">
    <div class="content">
      <h1>Fluss Kontrole: If Else Bedingungen</h1>
      <div class="text">
        <br />Alles, was Sie bisher gesehen haben, bestand aus einer sequentiellen Ausführung, bei der Anweisungen immer eine nach der anderen ausgeführt werden, und zwar in genau der angegebenen Reihenfolge.
        <br />
        <br />Häufig muss ein Programm einige Anweisungen überspringen, eine Reihe von Anweisungen wiederholt ausführen oder zwischen alternativen Sätzen von Anweisungen zur Ausführung wählen.
        <br />An dieser Stelle kommen Kontrollstrukturen ins Spiel. Eine Kontrollstruktur lenkt die Reihenfolge der Ausführung der Anweisungen in einem Programm (als Kontrollfluss des Programms bezeichnet).
        Das lernen Sie in diesem Tutorial: Sie werden auf Ihre erste Python-Kontrollstruktur stoßen, die if-Anweisung.
        <br />
        <br />

        <br />In der realen Welt müssen wir in der Regel Informationen um uns herum auswerten und dann die eine oder andere Vorgehensweise auf der Grundlage unserer Beobachtungen wählen:
        <br />Wenn das Wetter schön ist, dann mähe ich den Rasen. (Es heißt: Wenn das Wetter nicht schön ist, dann mähe ich den Rasen nicht).
        <br />
        <br />In einem Python-Programm ist die if-Anweisung, wie Sie diese Art der Entscheidungsfindung durchführen. Sie ermöglicht die bedingte Ausführung einer Anweisung oder einer Gruppe von Anweisungen auf der Grundlage des Wertes eines Ausdrucks.
        Einführung in die if-Anweisung
        <br />
        <br />Hinweis !
        <br />
        <br />Linien und Einrückungen
        Python bietet keine geschweiften Klammern, um Codeblöcke für Klassen- und Funktionsdefinitionen oder die Flusskontrolle anzugeben. Codeblöcke werden durch Zeileneinrückungen gekennzeichnet, die streng erzwungen werden.
        Die Anzahl der Leerzeichen in der Einrückung ist variabel, aber alle Anweisungen innerhalb des Blocks müssen gleich viel eingerückt werden. Zum Beispiel -
        <br />
        <br />Wir beginnen mit der Betrachtung der grundlegendsten Art von if-Anweisung. In seiner einfachsten Form sieht er wie folgt aus:
        <br />
        <br />
        <code>
          <pre>
            if (Hier schreiben Sie eine Bedingung):
                [Anweisung]
          </pre>
        </code>
        [Anweisung] ist ein Ausdruck, der im booleschen Kontext ausgewertet wird, wie im Abschnitt über logische Operatoren im Tutorial Operatoren und Ausdrücke in Python besprochen.
        <br />[Anweisung] ist eine gültige Python-Aussage, die eingerückt werden muss. (Sie werden sehr bald sehen, warum).
        <br />Wenn [Anweisung] wahr ist (wird zu einem Wert ausgewertet, der "wahr" ist), dann wird [stat] ausgeführt.
        <br />Wenn [Anweisung] falsch ist, dann wird [Anweisung] übersprungen und nicht ausgeführt.
        <br />Beachten Sie, dass der Doppelpunkt (:) nach [Anweisung] erforderlich ist. Einige Programmiersprachen verlangen, dass [Anweisung] in Klammern eingeschlossen werden muss, Python hingegen nicht.
        <Interpreter code="if(0 == 0):
        print('richtig')" />
        <br />In der oben gezeigten Form:
        <br />In allen oben gezeigten Beispielen ist auf jedes [Answeisung]: nur eine einzige Anweisung gefolgt.
        Es muss eine Möglichkeit geben zu sagen: "Wenn [Answeisung]: wahr ist, tun Sie alle folgenden Dinge".
        <br />Beachten Sie, dass es kein Token gibt, das das Ende des Blocks kennzeichnet. Vielmehr wird das Ende des Blocks durch eine Zeile angezeigt, die weniger eingerückt ist als die Zeilen des Blocks selbst.
        <br />Jetzt wissen Sie, wie Sie eine if-Anweisung verwenden können, um eine einzelne Anweisung oder einen Block von mehreren Anweisungen bedingt auszuführen. Es ist an der Zeit, herauszufinden, was Sie sonst noch tun können.
        <br />Manchmal möchten Sie eine Bedingung auswerten und einen Weg wählen, wenn sie wahr ist, aber einen alternativen Weg angeben, wenn sie nicht wahr ist. Dies wird mit einer else Klausel erreicht:
        <br />
        <code>
          <pre>
        wenn():
            [Answeisung]
            [Answeisung]
        sonst():
            [Answeisung]
            [Answeisung]
  </pre>
        </code>
        Wenn [Answeisung] wahr ist, wird die erste Suite ausgeführt, und die zweite wird übersprungen. Wenn [Answeisung] falsch ist, wird die erste Suite übersprungen und die zweite ausgeführt. In beiden Fällen wird die Ausführung dann nach der zweiten Suite fortgesetzt. Beide Suiten werden, wie oben beschrieben, durch Einrückung definiert.
        <br />
        <code>
          <pre>
        if(0 != 0):
            print('erste Bedingung ist richtig')
        else:
            print('war falsch. Else ist ausgefuehrt')
          </pre>
        </code>

        <Interpreter
          code="if(0 != 0):
        print('erste Bedingung ist richtig')
else:
        print('war falsch. Else ist ausgefuehrt')"
        />
      <Form lektion="4" />
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
</style>
