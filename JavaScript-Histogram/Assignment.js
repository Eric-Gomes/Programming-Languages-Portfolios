class MyString {

  constructor(str) {
    if (str == undefined) {
      str = "Hello, World!";
    }

    let re = /[W_]/g;
     this.str = str.toUpperCase().replace(re,'');
     this.letters = {};
  }

  frequency() {
    for (let i = 65; i <= 90; i++) {
      this.letters[String.fromCharCode(i)] = 0;
    }

    for (let i in this.str) {
      let count = this.str[i];
      this.letters[count]++;
    }
  }

  histogram() {
    for (let k in this.letters) {
      let bR = this.letters[k];
      let result = k + ": ";
      for (let i = 0; i < bR; i++) {
        result += "*";
      }

      console.log(result);
    }
  }
}
