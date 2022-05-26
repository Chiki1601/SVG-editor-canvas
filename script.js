var app = new Vue({
  el: "#app",
  data: {
    editor: true
  },
  methods: {
    closeEditor: function() {
      this.editor = false
    }
  }
})

var timeline = new TimelineMax({yoyo: true, repeat: -1});

//set labels
timeline.add('change');
timeline.add('revert');

//Green Lines
timeline.to('.Green-Line-1', 1, {scaleX: 1.5}, "change");
timeline.to('.Green-Line-1', 1, {scaleX: 0.55},"revert+=1");
timeline.to('.Green-Line-2', 1, {scaleX: 1.5}, "change");
timeline.to('.Green-Line-3', 1, {x: 40},"change");
timeline.to('.Green-Line-2', 1, {scaleX: 0.75}, "revert+=1");
timeline.to('.Green-Line-3', 1, {x: -10},"revert+=1");

//Red Lines
timeline.to('.Red-Line-1', 1, {scaleX: 1.5}, "change2-=1");
timeline.to('.Red-Line-1', 1, {scaleX: 0.55},"revert2+=1");
timeline.to('.Red-Line-2', 1, {x: 25}, "change2-=1");
timeline.to('.Red-Line-3', 1, {scaleX: 1.2},"change2-=1");
timeline.to('.Red-Line-2', 1, {x: -5}, "revert2+=2");
timeline.to('.Red-Line-3', 1, {scaleX: 0.9},"revert2+=1");
timeline.fromTo('.Red-Line-4', 1, {x: 20}, {x:15}, "change2-=1");
timeline.to('.Red-Line-4', 1, {x: -5}, "revert2+=1");

//Blue Lines
timeline.to('.Blue-Line-1', 1, {scaleX: 1.1}, "change3-=2");
timeline.to('.Blue-Line-1', 1, {scaleX: 0.35},"revert3+=2");
timeline.to('.Blue-Line-2', 1, {x: 25}, "change3-=2");
timeline.to('.Blue-Line-2', 1, {scaleX: 0.5, x: 0}, "revert3+=2");

//Yellow Lines
timeline.to('.Yellow-Line-1', 1, {scaleX: 1.4}, "change");
timeline.to('.Yellow-Line-1', 1, {scaleX: 0.85},"revert+=1");
timeline.to('.Yellow-Line-3', 1, {x: 5, scaleX: 1.1}, "change");
timeline.to('.Yellow-Line-3', 1, {x: 0, scaleX: 0.8},"revert+=1");
timeline.to('.Yellow-Line-2', 1, {x: 5}, "change");
timeline.to('.Yellow-Line-2', 1, {x: 0}, "revert+=1");