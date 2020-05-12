<template>
  <div id="comp">
    <div class="header">
      <h4>Simple</h4>
    </div>
    <div>here is a program as a simple</div>
      <div class="div">
        <textarea v-model="code"></textarea>
        <textarea v-model="output"></textarea>
      </div>
      <div class="click"><button> run </button></div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  props: {
    code: String,
  },
  data: function(){
    return{
      data : {
        code : this.code,
        output : '',
      }
    }
  },
  methods: {
    send: function() {
      const data = JSON.stringify(this.data);
      // eslint-disable-next-line no-console
      console.log('data : ' + data );
      axios.post( "https://pyfiddle.io/api/", {data})
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("resp : " );
      });
    },
  },
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
.result{
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
