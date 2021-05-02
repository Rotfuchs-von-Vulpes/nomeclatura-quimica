<template lang="pug">
  div
    section.hero.is-info.is-fullheight
      .hero-head
        nav.navbar
          .container
            .navbar-brand
              a.navbar-item
                p.is-size-4 4rtur8
            .navbar-menu
              .navbar-end
                span.navbar-item
                  a.button.is-info.is-inverted Download
      .hero-body
        .container
          .columns
            .column.is-8.is-offset-2.box.has-text-centered.padding-box
              p.is-size-3 Nomeclatura inorganica
              p.is-size-5 indica el nombre del componente
              Katex.margin-text-xl(:formula="preguntas[0].pregunta")
              .is-flex.is-justify-content-space-around
                b-button(v-for="p in preguntas[0].opciones" v-on:click="isCorrect(p.correcta)" type="is-info is-light") {{p.opcion}}

</template>

<script>
import preguntas from '../data/preguntas.json'
export default {
  name: 'HomePage',
  data () {
    return {
      answer: '',
      preguntas
    }
  },
  methods: {
    isCorrect (correcta) {
      if (correcta) {
        this.$buefy.toast.open({
          message: 'Correcta',
          type: 'is-success'
        })
      } else {
        this.$buefy.toast.open({
          message: 'Incorrecta',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import "../node_modules/katex/dist/katex.min.css";
.margin-text-xl{
  margin:30px 0;
}
.margin-text{
  margin:10px 0;
}
.padding-box{
  padding:40px 0;
}
</style>
