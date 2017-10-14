<template>
  <div class="item">
    <h2>{{ item.title }}</h2> 
  </div>
</template>

<script>
export default {
  name: 'item',
  asyncData ({store, route}) {
    // return the Promise from action
    return store.disptch('fetchItem', route,params.id)
  },
  computed: {
    // display the item from store state
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
</style>