<template>
    <div class="testMethods">
        <div v-if="isDude" class="isDude">
            <button class="getDataFromApi" @click="getDataFromApi">Get async data</button>
            <div v-if="!loading">
              <pre v-if="data">
                {{data}}
              </pre>
            </div>
            <div v-else>
              <p>loading...</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'testMethods',
  data() {
    return {
      loading: false,
      data: null,
    };
  },
  methods: {
    getDataFromApi() {
      // get async random quote
      this.loading = true;
      setTimeout(() => {
        this.data = 'nix gefunden';
        this.loading = false;
        return 'nix gefunden';
      }, 3000);
    },
    sendDataToApi() {
      // get async random quote
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