<template>
  <div id="form">
    <b-form-group required v-for="question in questions" :key="question.quest" :label="question.question">
      <b-form-checkbox-group  v-model="checked[0]" :options="question.options" name="quest-1"></b-form-checkbox-group>
    </b-form-group>
    <button type="submit"  @click="check()">send</button>
  </div>
</template>


<script>
import axios from "axios";
import data from "../data";
export default {
  props: {
    lektion: Number
  },
  data: function() {
    return {
      checked: [],
      questions: data[this.lektion].questions
    };
  },
  methods: {
    check: function() {
      this.checked.forEach(array => {
        array.length != 0 ? this.send(data): axios.post('false',data);
      });
    },
    send: function(){
      let score=0
      console.log(this.questions)
      for (let i = 0; i < this.questions.length; i++) {
        let t= this.checked[i]
        t.forEach((chcked)=>{
          this.questions[i].respo.forEach(t => {
          chcked == t? score = score +1 :{}
          }); 
        })
      }
      const data={
        lektion: this.lektion,
        score: score
      }
      axios.post('http://localhost:3000/users'+data);
      console.log(score);
    }
  }
};
</script>
<style scoped>
#comp {
  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: snow;
  padding: 1rem;
  margin: 1rem;
}

textarea {
  width: 45%;
  height: 100%;

  padding: 1rem;
  margin: 1rem;
}

.click {
  text-align: center;
}
button {
  width: 8vw;
  border-style: none;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: slateblue;
}
.header {
  text-align: center;
}
.div {
  display: flex;
}
</style>
