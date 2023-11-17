
<style scoped>
.top-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-bottom: solid 1px #222;
}

.content {
  text-align: center;
  padding: 2rem;
}
</style>
<template>
  <div>
    <div class="top-bar">
      <div>{{ session?.user.email }}</div>
      <div></div>
      <button @click="signOut()">Sair</button>
    </div>
    <div class="content">

      <h1>Bem vindo !</h1>
      <h4>{{ session?.user.name }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
const { signOut, session, status, } = useAuth()




</script>