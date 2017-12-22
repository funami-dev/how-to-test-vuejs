<template>
  <div>
    <div v-if="isDude" class="isDude">
        <p>There are <em>{{count}}</em> Dudes called <span>{{name}}</span></p>
    </div>
    <div v-else>
        <p>There is no dude</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testProps',
  props: {
    count: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '?',
    },
    isDude: {
      type: Boolean,
      default: true,
    },
  },
};
</script>