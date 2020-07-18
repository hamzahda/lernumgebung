<template>
  <div id="form">
    <br />
    <br />

    
    <h4>Evaluation</h4>
    <b-form-group
      required
      v-for="question in questions"
      :key="question.quest"
      :label="question.question"
    >
      {{question.quest}}
      <b-form-checkbox-group  v-model="checked[0]" :options="question.options" name="quest-1">
      </b-form-checkbox-group>
    </b-form-group> 
    <button type="submit" @click="check()">send</button>
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
        array.length != 0 ? this.send(data) : {};
      });
    },
    send: function() {
      let score = 0;
      console.log(this.questions);
      let t = this.checked[0];
      for (let i = 0; i < this.questions.length; i++) {
        t.forEach(chcked => {
          this.questions[i].respo.forEach(t => {
            chcked == t ? (score = score + 1) : {};
          });
        });
      }   
      let user =  JSON.parse(localStorage.getItem("user"))
      const data = {
        lektion: this.lektion,
        score: score,
        name: user.name
      };
      console.log(data.lektion);
      axios.post("http://localhost:3000/users/score",data).then(s => {
        console.log(s);
        alert('Ihre Antworte sind erfolgreich geschickt')
        axios.get("http://localhost:3000/users/"+user.id).then(s =>{
        console.log("the user  :  ",s.data.scores);
        this.$store.dispatch("set", s.data)
      }).catch(s => console.log(s));
      }).catch(s => console.log(s));
    }
  }
};
</script>
<style scoped>
#form{
  text-align: start;
}
button {
  width: 8vw;
  border-style: none;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: slateblue;
}
</style>
