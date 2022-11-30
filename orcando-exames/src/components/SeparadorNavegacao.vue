<template>
  <v-list color="grey lighten-2" v-if="$store.state.login">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ titulo }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "SeparadorNavegacao",
  props: ["titulo"],
};
</script>

<style>
</style>