<template>
    <div id="app">
        <router-link to="/"><h1>HN</h1></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
#app {
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    line-height: 1.5;
}
h1, h2 {
    font-weight: normal;
}
a {
    color: #111;
    text-decoration: none;
}
</style>
