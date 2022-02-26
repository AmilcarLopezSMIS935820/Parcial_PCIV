<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/inicio">Inicio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    
      <b-navbar-nav>

        <b-nav-item to="/nosotros">Nosotros</b-nav-item>
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