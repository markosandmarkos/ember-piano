import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    play(sound) {
      let note = new Audio(`notes/${sound}`);
      note.play();
    }
  }
});
