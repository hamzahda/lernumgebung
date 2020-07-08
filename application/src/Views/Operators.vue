<template>
  <div class="topic">
    <div class="content">
    <h1>Variablen and Datatypen</h1>
      <div class="text">
        <h2>Python Operators</h2>
        <br />
        Der Operator kann als ein Symbol definiert werden, das für eine bestimmte Operation zwischen zwei Operanden verantwortlich ist. <br />Operatoren sind die Säulen eines Programms, auf denen die Logik in einer bestimmten Programmiersprache aufgebaut ist. Python bietet eine Vielzahl von Operatoren, die wie folgt beschrieben werden.
        <br />Bei der Auswertung einzelner mathematischer Ausdrücke gilt wie üblich „Punkt vor Strich“. Um eine andere Auswertungsreihenfolge zu bewirken, können einzelne Ausdrücke, wie in der Mathematik üblich, durch runde Klammern zusammengefasst werden.<br />
        Für die in Python üblichen Operatoren ist eine allgemein gültige „Rangfolge“ für die Auswertungsreihenfolge festgelegt.<br /> In den folgenden Tabellen werfen wir einen Blick auf die bsic-Operatoren, die wir zur Programmierung einfacher Programme benötigen
        <br />
        <h4>Vergleich Operatoren</h4>
        Diese Operatoren vergleichen die Werte auf beiden Seiten und entscheiden über die Beziehung zwischen ihnen. Sie werden auch Relationale Operatoren genannt. Sie liefern als Ergbnis entweder Falsch oder Richtig.
       <br />
        <img src="../assets/vg.jpg" />
        <Interpreter  desc="One way to check wether a given statement is true or false is to use the print fucntion and output the result on the screen. you can play with variables as you want and check whether your assumption is right"
        code="print(0>8)
print(0 != 8)
print(0 == 0)"
      />
        <br />
        <h4>Logische Operatoren in Python</h4>
        <br>
        <div>Arithmetische Operatoren werden bei numerischen Werten verwendet, um gängige mathematische Operationen durchzuführen:</div>
        <img src="../assets/op.jpg" />
        <img src="../assets/sonstiges.jpg" />

        <Interpreter  desc="you can play with variables as you want and check whether your assumption is right"
        code="print(0 * 0)
print(8 ** 1)
print(8 % 1)
"
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
  data: () => {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
img{
  margin-top: 1rem;
  margin-left: 8rem;
}
</style>