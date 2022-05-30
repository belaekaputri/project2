<template class="bg-secondary">

<div class="box bg-white  shadow-lg rounded d-flex flex-column justify-content-center align-items-center">
     <h5 class="mb-4"> Welcome to simple test </h5>
    <div class="mb-3 d-flex ">
    <label for="name" class=" col-form-label me-5 ">Nama</label>
    <input type="text" class="form-control  "  placeholder="Nama" v-model="input.nama" autocomplete="off">
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <label for="telepon" class=" col-form-label me-3">NoTelepon</label>
    <input type="text" class="form-control "  placeholder="Telepon" v-model="input.telepon" autocomplete="off">
</div>
<button type="button" class="btn btn-warning  w-25" v-on:click="login()">Next</button> 
</div>


</template>
<style>

body{
  background-color:silver !important;
}

.box{
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:0 auto;
  width:400px;
  height:250px;
}
</style>
<script>


export default {
  name: 'LoginView',
  data() {
            return {
                input: {
                    nama: "",
                    telepon: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.nama != "" && this.input.telepon != "") {
                    if(this.input.nama == this.$parent.mockAccount.nama && this.input.telepon == this.$parent.mockAccount.telepon) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "HomeView" });
                    } else {
                        console.log("The name and / or phone is incorrect");
                    }
                } else {
                    console.log("A name and phone must be present");
                }
            }
        }
}
</script>