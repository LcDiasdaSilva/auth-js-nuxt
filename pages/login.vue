


<style scoped>
.page {
  width: 100%;
  height: 100vh;
  text-align: center;
  margin: 0;
  padding-top: 8rem;
  box-sizing: border-box;
}

.btn-sign-in {
  border: none;
  padding: 1rem 5rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all .2s ease-in-out;
  background: #000;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin: 2rem 0;
}

.btn-sign-in:hover {
  transform: scale(1.2);
}
</style>
<template>
  <div class="page">
    <div>
      <img src="/github.svg" alt="logo" title="logo" />
    </div>
    <div>
      <button type="button" class="btn-sign-in" @click="signIn(`github`)">Entrar</button>
    </div>

    <div v-if="status === 'loading'"><img src="/loading.svg" /></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/" } })
const { signIn, status } = useAuth()

</script>