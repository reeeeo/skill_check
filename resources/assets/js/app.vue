<template>
  <div class="text-center">
    <header id="header">
      <navbar></navbar>
    </header>
    <main id="main">
      <router-view></router-view>
    </main>
    <footer id="footer">
      <p class="text-muted">Copyright &copy; 2018 NexSeed. All Rights Reserved.</p>
    </footer>
  </div>
</template>
<script>
  export default {
    components: {
      navbar: require('./components/navbar.vue')
    }
  }
</script>
