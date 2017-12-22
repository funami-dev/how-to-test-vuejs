<template>
  <div>
    <p>
        From Props: <em>{{dudeName}}, {{isDude}}</em>
    </p>
    <p>
        <input type="checkbox" id="isCheckedFromProps" :checked="isCheckedFromProps">
        <label for="isCheckedFromProps">{{ isCheckedFromProps }}</label>
    </p>
  </div>
</template>
<script>
export default {
  name: 'testToggle',
  data() {
    return {
      checked: false,
    };
  },
  props: {
    isDude: {
      type: Boolean,
    },
    dudeName: {
      type: String,
    },
  },
  computed: {
    isCheckedFromProps() {
      return (
        this.isDude &&
        !!this.dudeName &&
        typeof this.dudeName === 'string' &&
        this.dudeName.length > 0
      );
    },
  },
};
</script>