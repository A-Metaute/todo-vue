<template>
    <Teleport to="header">
        <div>
            <img alt="Vue logo" src="../assets/logo.png" />
            <p>Vue ToDo</p>
        </div>
        <nav>
            <router-link to="/">Show tasks</router-link>
            <router-link to="/add">Add task</router-link>
        </nav>
    </Teleport>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div{
    grid-column: 1 / 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

img{
    width: 48px;
    height: 48px;
    margin-left: 20px;
}

p{
    display:inline-block;
    font-weight: bold;
    font-size: 2rem;
}

nav{
    grid-column: 2 / 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
}

a{
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: black;
}

a:hover {
    color: #42b983;
}
</style>