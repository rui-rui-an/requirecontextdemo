<template>
  <div class="home">
    <A />
    <B />
    <C />
    <Ddddd />
    <div class="vuex">
      {{ userName }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    // ...mapState([])
    ...mapState({
      userName: state => state.user.name
    })
  }
}
</script>

<style lang="less">
.home {
  .vuex {
    font-size: 30px;
    color: yellowgreen;
  }
}
</style>
