<template>
    <div class="testProps">
        <div v-if="isDude" class="isDude">
            <h3>There are <em>{{count}}</em> Dudes called <span>{{name}}</span></h3>
        </div>
        <div v-else>
            There is no dude
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