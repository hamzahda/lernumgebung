<template>
  <div class="topic">
    <div class="content">
      <h1>Einführung</h1>
      <hr />
      <h2>Was ist Programmierung?</h2>
      <div
        class="text"
      >Beim Programmieren wird grundsätzlich mit Ihrem Computer gesprochen und aufgefordert, bestimmte Aktionen auszuführen.</div>
      <br />
      <h2>Was ist eigentlich eine Programmier Sprache ?</h2>
      <div class="text">
        Da Computer kein Englisch oder Deutsch verstehen, müssen Sie ihnen Anweisungen in speziellen Computersprachen geben, damit Computer diese Sprachen verstehen können. Diese werden als Programmiersprachen bezeichnet.
        Eine Programmiersprache ist eine Art geschriebene Sprache, die Computern sagt, was zu tun ist, um zu arbeiten. Eine Programmiersprache ist wie eine Reihe von Anweisungen, denen der Computer folgt, um etwas zu tun.
        <br />
      </div>
      <br />
      <h2>Warum Python?</h2>
      <div class="text">
        Python ist eine Programmiersprache, die sich wegen ihrer klaren Syntax und einfachen Struktur auch für Totalanfänger sehr leicht erlernen lässt. Diese Sprache eignet sich
        ebenso gut für kleine Skripte und Rapid Prototyping wie für große Projekte, an denen gegebenenfalls viele Entwickler arbeiten. Letzteres wird vor allem auch durch den objektorientierten Ansatz erleichtert. Eine umfangreiche Standardbibliothek gewährleistet, dass viele Probleme nicht mehr selbst gelöst werden müssen. Python ist plattformunabhängig, d.h. es läuft unter Linux, ebenso wie unter Unix und vielen Unix-Systemen, Mac und Windows.
        Pyhthon ist einfach zu lernen und ermöglicht es uns, alle Arten von Computerprogrammen zu schreiben wie z .b das erstellen von Spielen. Python wird nicht nur in Schulen, sondern auch an Universitäten und großen Firmen verwendet
      </div>
      <h2 class="hinweis">Hinweis !</h2>
      <br />
      <div class="text">
        Seien Sie nicht frustriert, wenn Sie Code schreiben, den ein Computer nicht versteht.
        Denken Sie daran, dass Computer leicht verwirrt werden können und alle Codeanweisungen genau richtig sein müssen. Computer sind sehr wählerisch! Kleine Fehler oder Probleme
        im Code werden als Fehler bezeichnet. Selbst die besten Programmierer machen viele, viele Fehler.
      </div>
      <br><br>
      Das Erstellen eines einfachen Programms, in dem Text angezeigt wird, ist häufig das erste, was ein Programmierer tut, nachdem er seine Umgebung erstellt hat.
      aber bei diesem Titrial brauchen Sie sich darüber keine Sorgen zu machen, weil Sie die eingebettete interaktive Konsole einfach benutzen können ."Hallo Welt" scheint das häufigste Wort beim Schreiben dieser Programme zu sein. Ich werde hier an dieser Tradition festhalten, aber Sie können gerne alles schreiben, was Sie möchten!
      Wie auch immer, Sie können ein einfaches "Hallo Welt" -Programm erstellen, indem Sie die print () - Funktion von Python verwenden, um den Text "Hallo Welt" auf dem Bildschirm auszugeben.
      Wir haben dies bereits zuvor getan, aber dieses Mal speichern wir das Programm, damit wir es später ausführen können.
      <Interpreter prog="Ihr erstes Programm" code="print('  Hallo Welt  ')" desc="klicken Sie einfach auf run" />
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
    return {};
  },
}
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-evenly;
}
</style>
