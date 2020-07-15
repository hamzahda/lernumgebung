<template>
  <div class="topic">
    <div class="content">
    <h1>Python Operatoren</h1>
      <div class="text">
        <br />
        Der Operator kann als ein Symbol definiert werden, das für eine bestimmte Operation zwischen zwei Operanden verantwortlich ist. <br><br>Operatoren sind die Säulen eines Programms,
         auf denen die Logik in einer bestimmten Programmiersprache aufgebaut ist. Python bietet eine Vielzahl von Operatoren,<br> die wie folgt beschrieben werden.
        <br />Bei der Auswertung einzelner mathematischer Ausdrücke gilt wie üblich „Punkt vor Strich“. Um eine andere Auswertungsreihenfolge zu bewirken, können einzelne Ausdrücke, wie in der Mathematik üblich, durch runde Klammern zusammengefasst werden.<br />
        Für die in Python üblichen Operatoren ist eine allgemein gültige „Rangfolge“ für die Auswertungsreihenfolge festgelegt.<br><br>In den folgenden Tabellen werfen wir einen Blick auf die bsic-Operatoren, die wir zur Programmierung einfacher Programme benötigen
        <br><br>
        <h2>Vergleich Operatoren</h2>
        <br><br>
        Diese Operatoren vergleichen die Werte auf beiden Seiten und entscheiden über die Beziehung zwischen ihnen. Sie werden auch Relationale Operatoren genannt. Sie liefern als Ergbnis entweder Falsch oder Richtig.
       <br />
        <img src="../assets/vg.jpg" />
        <Interpreter  desc="One way to check wether a given statement is true or false is to use the print fucntion and output the result on the screen. you can play with variables as you want and check whether your assumption is right"
        code="print(0>8)
print(0 != 8)
print(0 == 0)"
      />
        <br />
        <h2>Logische Operatoren in Python</h2>
        <br>
        <div>Arithmetische Operatoren werden bei numerischen Werten verwendet, um gängige mathematische Operationen durchzuführen:</div>
        <img src="../assets/op.jpg" /><br><br>
        <img src="../assets/sonstiges.jpg" />

        <Interpreter  desc="you can play with variables as you want and check whether your assumption is right"
        code="print(0 * 0)
print(8 ** 1)
print(8 % 1)
"
      />
      <Form lektion="3"/>
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
  data: () => {
    return {};
  },

};
</script>
<style scoped>
img{
  margin-top: 1rem;
  margin-left: 8rem;
}
</style>