new Vue({
  el: '#app',
  data() {
    return {
      text: 'Glauben sie das dies wirklich wahr ist oder werden sie von der Unwahrheit hintergangen?',
      output: '' };

  },
  mounted() {
    this.randomize(this.text);
  },
  methods: {
    randomize: function (input) {
      let output = '';
      let specialCombos = ['sch', 'an'];

      let words = input.split(' ');
      let cuttedWords = [];
      let newWords = [];
      let beginnings = [];

      words.map(word => {
        let beginning = word[0];
        for (let specialCombo of specialCombos) {
          if (word.indexOf(specialCombo) === 0)
          beginning = specialCombo;
          break;
        }
        beginnings.push(beginning);
        cuttedWords.push(word.substring(beginning.length));
      });
      for (let i = beginnings.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [beginnings[i], beginnings[j]] = [beginnings[j], beginnings[i]];
      }
      output = beginnings.reduce((satz, curr) => {
        satz.push(curr + cuttedWords.shift());
        return satz;
      }, []).join(' ');
      this.output = output;
    } },

  watch: {
    text: function (input) {
      this.randomize(input);
    } } });