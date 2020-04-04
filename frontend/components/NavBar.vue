<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      RPA
    </nuxt-link>
    <nav>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.nav a {
  display: inline-block;
}
</style>
