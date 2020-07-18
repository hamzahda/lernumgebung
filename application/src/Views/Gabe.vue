<template>
  <div class="topic">
    <div class="content">
      <h1>Eingabe in Python</h1>
      <div class="text">
        <br />
        <br />Entwickler haben oft das Bedürfnis, mit Benutzern zu interagieren, entweder um Daten zu erhalten oder um irgendeine Art von Ergebnis zu liefern.
        <br />
        <br />Die meisten Programme verwenden heute ein Dialogfeld, um den Benutzer aufzufordern, irgendeine Art von Eingabe zu machen. Während Python uns mit eingebauten Funktionen ausstattet, um sowohl die Eingabe von der Tastatur zu lesen als auch das Ergebnis auf dem Bildschirm auszugeben.
        Die Druckfunktion in Python ist eine Funktion, die in Ihrem Konsolenfenster ausgibt, was immer Sie ausdrucken wollen.
        <br />
        <br />Auf den ersten Blick mag es den Anschein haben, dass die Druckfunktion für die Programmierung ziemlich nutzlos ist, aber in Wirklichkeit ist sie eine der am häufigsten verwendeten Funktionen in ganz Python. Der Grund dafür ist, dass sie ein großartiges Debugging-Werkzeug darstellt.
        Als "Debugging" bezeichnet man den Vorgang des Findens, Beseitigens und Behebens von Fehlern und Irrtümern im Code.
        Syntax der Funktion input().
        <br />
        <br />Die Syntax der input()-Funktion lautet:
        <br />
        <br />
        <code>
          <pre>
               
            str = input("Ihr Name: ")  # danach es wird gewartet bis Sie eine Eingabe eingeben
            print(str)  # Ihre Eingabe wird angezeigt

            </pre>
        </code>
        <br />
        <br />Als Parameter nimmt es eine Zeichenkette, die im Terminal ausgegeben wird.
        Dies ist ein optionaler Parameter, manchmal auch Prompt genannt.
        Der Parameter ist ein Text, der auf dem Bildschirm ausgegeben wird. Wenn wir von Text sprechen, sagen wir String.
        Sie können dem Benutzer Informationen ausdrucken, d.h. welchen Wert er eingeben soll.
        Die Funktion input():
        <br />
        <br />Verwenden Sie die Funktion input(), um Python-Benutzereingaben über die Tastatur zu erhalten
        Drücken Sie nach der Eingabe des Wertes die Eingabetaste.
        Das Programm wartet unbestimmt auf Benutzereingaben, es gibt keine Zeitüberschreitung.
        <br />Die Eingabefunktion gibt eine Zeichenfolge zurück, die Sie in einer Variablen speichern können
        Beenden mit Strg-D (Unix) oder Strg-Z+Return (Windows)
        <Form lektion="0" />
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
