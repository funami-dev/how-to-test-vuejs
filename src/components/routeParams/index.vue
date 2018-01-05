<template>
  <div>
    <p>Hello {{nameFromParams}} :)</p>
    <p><router-link to="/">back</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'routeParams',
  computed: {
    nameFromParams() {
      return (typeof this.$route.params.id !== 'undefined') ? this.$route.params.id : '';
    },
  },
};
</script>