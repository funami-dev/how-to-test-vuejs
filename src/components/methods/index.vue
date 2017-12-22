<template>
    <div class="testMethods">
        <div v-if="isDude" class="isDude">
            <p>
              <span>{{name}} say:</span><br>
              <span v-if="randomQuote">
                {{randomQuote}}
              </span>
            </p>
            <p>
              <button @click="getRandomQuote">Random quote</button>
            </p>
        </div>
        <div v-else>
            <p>There is no dude</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'testMethods',
  data() {
    return {
      randomQuote: null,
      quotes: [
        'Yeah, well, you know, that’s just, like, your opinion, man.',
        'That rug really tied the room together.',
        "Obviously you're not a golfer.",
        "Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man.",
        'Who the fuck are the Knutsens?',
        'Mr. Treehorn treats objects like women, man.',
        'Hey, nice marmot!',
        'My only hope is that the big Lebowski kills me before the Germans can cut my dick off.',
      ],
    };
  },
  methods: {
    getRandomQuote() {
      // eslint-disable-next-line
      const randomNumber = (Math.random() * (this.quotes.length - 0) +
        0
      ).toFixed(0);
      this.randomQuote = this.quotes[randomNumber];
    },
    getDataFromApi() {
      // get async random quote
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