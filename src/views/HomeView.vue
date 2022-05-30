<template>
    <div class="container bg-white shadow-lg">
        <h5 class="pt-3"><b>Make your own question</b></h5>
        <hr>
        <p class="text-start ">Select Category:</p>
        <select class="form-select form-select-sm w-25 bg-warning text-white " aria-label=".form-select-sm example"
         v-on:change="changeLink" id="pilih-menu">
         <option v-for="option in jenislink" v-bind:value="option.value" :key="option.value">{{option.text}}</option>
       </select>
    </div>
</template>


<script>

    export default {
    
        data() {
            return {
        jenislink:[
        {text:'Soal Pilgan', value: '01'},
        {text:'Soal Text', value: '02'},
        {text:'Soal Pendek', value: '03'}
        ]
            }
        }
       
    }
</script>

<style scoped>
  .container{
      width:850px;
      height:100vh;
  }
  p{
      margin-bottom:-3px;
  }
</style>