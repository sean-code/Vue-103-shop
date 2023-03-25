<template>
    <Header></Header>
      <Home></Home>
    <Footer></Footer>
</template>
<script>
//importing bootstrap 5 Modules
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
export default {
 
components: {
   Header,
   Footer,
   Home
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
