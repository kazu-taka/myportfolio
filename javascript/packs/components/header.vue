<template>
<nav>
  <div class="nav-wrapper">
      <ul>
          <li><router-link to="/">Top</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/myskills">My skills</router-link></li>
          <li><router-link to="/works">Works</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
  </div>
</nav>
</template>

<style scoped>

.nav-wrapper{
    display: table;
    margin: auto;
    text-align: center;
    font-family: 'Yeseva One', cursive;
    font-size: 40px;
}

.li{
  display: table-cell;
  
}



</style>