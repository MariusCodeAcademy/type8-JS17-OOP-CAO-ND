class ProccessInput {
  constructor(val) {
    this.rawInput = val;
    this.readyVal;
    this.splitVal();
  }

  makeCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  splitVal() {
    const result = this.rawInput.split(' ').filter((el) => el !== '');
    console.log('result ===', result);
    this.readyVal = {
      name: this.makeCap(result[0]),
      lName: this.makeCap(result[1]),
    };
  }
} // class END
