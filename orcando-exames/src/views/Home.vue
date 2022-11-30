<template>
  <section fluid>
    <ExameBuscar/>

    <ExameLista/>

  </section>
</template>

<script>
import ExameBuscar from "@/components/ExameBuscar.vue"
import ExameLista from "@/components/ExameLista.vue"

export default {
  name: "HomePage",
  components: {
    ExameBuscar,
    ExameLista,
  }

}
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
  }
</style>