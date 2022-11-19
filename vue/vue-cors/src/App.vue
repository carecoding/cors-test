<script>
export default{
  name: 'App',
  data(){
    return {
      dataObject:null
    }
  },
  created(){
    fetch("https://carecoding-crispy-happiness-g9x7qgr6g6rfwvqg-3000.preview.app.github.dev/data", {
        method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.dataObject = data
      })
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <br>
  <h2>Fetched data is: {{dataObject}}</h2>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
