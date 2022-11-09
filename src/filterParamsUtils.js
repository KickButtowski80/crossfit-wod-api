
function Arr(ar = [], otherProp = {}) {
  this.arr = ar;
  this.prop = otherProp;
}

Arr.prototype.sliceArr = function () {
  this.arr = this.arr.slice(0, this.prop.length);
  return this;
};

Arr.prototype.filterArr = function () {
  this.arr = this.arr.filter((a) => a.mode.toLowerCase().includes(this.prop.mode.toLowerCase()));
  return this;
};

Arr.prototype.sortArr = function (sortValue) {  

  this.arr.sort((a, b) => (new Date(a[sortValue]) > new Date(b[sortValue])) ? 1
    : -1)
  return this
}

module.exports = Arr;


