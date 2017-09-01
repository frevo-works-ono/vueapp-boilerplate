<template>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { TODO } from '../vuex/mutation-types'

export default {
  name: 'todo',
  computed: {
    ...mapGetters('todo', ['completeList'])
  },
  methods: {
    ...mapActions([TODO.FIND_LIST])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
