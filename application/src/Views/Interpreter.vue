<template>
  <div id="comp">
    <div class="header">
      <h4> {{prog}} </h4>
    </div>
    <div> {{desc}} </div>
      <div class="div">
        <textarea v-model="code"></textarea>
        <textarea v-model="data.output">  </textarea>
      </div>
      <div class="click" @click="send"><button> run </button></div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  props: {
    desc : String,
    code: String,

    output: String,
    prog : String,
  },
  data: function(){
    return{
      data : {
        code : this.code,
        output :  '',
      }
    }
  },
  methods: {
    send: function() {
      const data = { 
        data : this.code,
      }
      axios.post("http://localhost:3000/code", data).then((resp)=>{
        this.data.output= resp.data.toString();
        
        });
  }
  }
};
</script>

<style scoped>
#comp {


  display: flex;
  justify-content: center;

  flex-direction:column ;
  background-color:snow ;
  padding:1rem;
  margin: 1rem;
}


textarea{
  width: 45%;
  height: 100%;

  padding: 1rem;
  margin: 1rem;
}


.click{
  text-align: center;
  
}
button{
  width: 8vw;
  border-style: none;
  
  padding-top: 0.5rem ;  
  padding-bottom: 0.5rem;

  background-color: slateblue;
  
  }
  .header{
    text-align: center;
  }
.div{
  display: flex;
}


</style>
