<template>
  <footer>
    <nav class="footer-nav">
      <router-link to="/"><h3>Início</h3></router-link>
    </nav>
    <div id="install-icon"></div>
    <small>&copy; MediQuix 2024. Todos os direitos reservados.</small>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
}

.footer-nav {
  margin-bottom: 0.5rem;
}

.footer-nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #2ecc71;
}
</style>
