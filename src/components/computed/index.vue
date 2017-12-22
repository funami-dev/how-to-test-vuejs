<template>
    <div class="testProps">
        <div v-if="isDude" class="isDude">
            <p>There {{isJustOneDude ? 'is' : 'are'}} <em>{{count}}</em> Dude{{!isJustOneDude ? 's' : ''}} called <span>{{name}}</span></p>
        </div>
        <div v-else>
            <p>There is no dude</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'testProps',
  computed: {
    isJustOneDude() {
      return this.count === 1;
    },
  },
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