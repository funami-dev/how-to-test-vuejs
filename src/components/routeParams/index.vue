<template>
  <div>
    <p>Hello {{name}} :)</p>
    <p><router-link to="/">back</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'routeParams',
  computed: {
    name() {
      return this.$route.params.id;
    },
  },
};
</script>