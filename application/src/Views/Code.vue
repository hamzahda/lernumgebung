<template>
  <div id="comp">
    <div id="code">{{ code }}</div>
    <button @click="send">send</button>
    <input type="hidden" ref="ergebnis" />
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
        code : this.code
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
  
  flex-direction:row ;
  padding: 2rem;
  height: fit-content;
  width: 49vw;
}
#ergebnis {
  visibility: hidden;
}
</style>
