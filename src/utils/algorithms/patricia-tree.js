//https://github.com/maxemitchell/portfolio/blob/master/src/pages/code_art/thanksgiving_break/index.js
const Node = function (val, p5Instance) {
  this.val = val;
  this.content = '';
  this.leaf = false;
  this.children = [];

  this.updateWeights = function () {
    if (this.children.length == 0) {
      this.w = this.content.length;
    } else {
      let s = 0;
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].updateWeights();
        s += this.children[i].w;
      }
      this.w = s;
    }
  };

  this.draw = function (x, y, w) {
    p5Instance.push();
    p5Instance.translate(x, y);

    const st = this.leaf ? this.content : this.val;
    const color = this.leaf ? '#8f8' : '#fff';
    p5Instance.fill(color);
    p5Instance.rect((w >> 1) - st.length * 4, 0, st.length * 8, 20);
    p5Instance.fill('#000');
    p5Instance.text(st, w >> 1, 15);

    let cx = 0;
    for (let i = 0; i < this.children.length; i++) {
      const wd = ((1.0 * this.children[i].w) / this.w) * w;
      p5Instance.line(w >> 1, 20, cx + (wd >> 1), 50);
      this.children[i].draw(cx, 50, wd);
      cx += wd;
    }

    p5Instance.pop();
  };
};

export const PatriciaTree = function (x, y, w, p5Instance) {
  (this.x = x), (this.y = y), (this.w = w);
  this.root = new Node('*', p5Instance);
  this.nodes = [];

  function addNode(p, val, curVal) {
    if (curVal == '') {
      p.leaf = true;
      return;
    }

    let isElement = false;
    for (let i = 0; i < p.children.length; i++) {
      if (p.children[i].val == curVal.charAt(0)) {
        addNode(p.children[i], val, curVal.substring(1, curVal.length));
        isElement = true;
        break;
      }
    }

    if (!isElement) {
      const newP = new Node(curVal.charAt(0), p5Instance);
      newP.content = p.content + curVal.charAt(0);
      p.children.push(newP);
      addNode(newP, val, curVal.substring(1, curVal.length));
    }
  }

  this.addNode = function (val) {
    addNode(this.root, val, val);
    this.nodes.push(val);
  };

  this.draw = function () {
    this.root.updateWeights();
    p5Instance.textAlign(p5Instance.CENTER);
    p5Instance.textSize(12);
    this.root.draw(this.x, this.y, this.w);
  };
};
