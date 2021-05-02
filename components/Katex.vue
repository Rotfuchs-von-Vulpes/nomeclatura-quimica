<template lang="pug">
  div.is-size-3(ref="katexdiv")
</template>
<script>
import katex from 'katex'
export default {
  props: ['formula'],
  mounted () {
    katex.render(this.formula, this.$refs.katexdiv, {
      throwOnError: false
    })
  }
}
</script>
