<template>
  <div class="topic">
    <div class="content">
      <h1>Arrays in Python</h1>
      <div class="text">
        <br />Array ist ein Container, der eine feste Anzahl von Elementen enthalten kann. Diese Elemente sollten vom gleichen Typ
        sein. Die meisten Datenstrukturen verwenden Arrays, um ihre Algorithmen zu implementieren. Im Folgenden sind die wichtigen
        Begriffe aufgeführt, um das Konzept des Arrays zu verstehen.
        <br />Element - Jedes in einem Array gespeicherte Element wird als Element bezeichnet.
        <br />Index - Jede Position eines Elements in einem Array verfügt über einen numerischen Index, mit dem das Element identifiziert wird.
        <br />
        <br />Array-Darstellung
        <br />Arrays können auf verschiedene Arten in verschiedenen Sprachen deklariert werden. Unten ist eine Illustration.
        <br />
        <br />

        <div class="imgc">
          <img src="../assets/arrays.png" />
        </div>

        <br />
        <br />Im Folgenden sind die grundlegenden Operationen aufgeführt, die von einem Array unterstützt werden.
        <br />
        <br />Traverse - Druckt alle Array-Elemente nacheinander.
        <br />Einfügen - Fügt ein Element am angegebenen Index hinzu.
        <br />Löschen - Löscht ein Element am angegebenen Index.
        <br />Suchen - Sucht ein Element anhand des angegebenen Index oder anhand des Werts.
        <br />Aktualisieren - Aktualisiert ein Element am angegebenen Index.
        <br />Das Array wird in Python erstellt, indem das Array-Modul in das Python-Programm importiert wird. Dann wird das Array wie gezeigt als eblow deklariert.
        <br />
        <br />

        <code>
          Kode:
          <pre>
            from array import *
            arrayName = array(typecode, [Initializers])
          </pre>
        </code>

        <br />
        <br />Bevor Sie sich verschiedene Array-Operationen ansehen, können Sie ein Array mit Python erstellen und drucken.
        Der folgende Code erstellt ein Array mit dem Namen array1.
        <br />
        <br />Zum Drucken des Arrays können wir den folgenden Code verwenden
        <br />
        <br />
        <code>
          Kode:
          <pre>
            array1 = ['erste','zweite']
            for i in array1:
              print(i)
          </pre>
        </code>
        <br />
        <br />

        <code>
          Ausgabe
          <pre>
            ertste
            zweite
          </pre>
        </code>
        <br />
        <br />Adding Array Elements
        You can use the append() method to add an element to an array.
        <br />
        <br />
        <code>
          Kode:
          <pre>
            array1 = ['erste','zweite']
            array1.append("neue")
          </pre>
        </code>
        <br />
        <br />Access the Elements of an Array
        You refer to an array element by referring to the index number.
        <br />
        <br />
        <code>
          Kode:
          <pre>
            array1 = ['erste','zweite']
            array1[0]  # 0 ist das index
          </pre>
        </code>
        <br />
        <br />
        <Interpreter
          desc="Interaktiven Beispiel"
          code="array1 = ['erste','zweite']
print(array1[0])"
        />
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
img {
  height: 49vh;
  width: 49vw;
}
</style>
