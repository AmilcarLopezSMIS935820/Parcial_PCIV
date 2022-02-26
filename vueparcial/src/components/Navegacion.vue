<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" style="padding-left:25px;">
    <b-navbar-brand to="/nosotros">Inicio</b-navbar-brand>
    
      <b-navbar-nav>

        <b-nav-item to="/calculadora">Calculadora</b-nav-item>




      </b-navbar-nav>

     
  </b-navbar>
  <br><br><br>
         <router-view/>
</div>



</template>
<script>
export default {
   name:'navegacion'
}
</script>