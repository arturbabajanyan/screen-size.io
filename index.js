function winSize() {
    document.querySelector('#screen-info').innerText = (`
Inner Width: ${this.innerWidth}
Inner Height: ${this.innerHeight}
Outer Width: ${this.outerWidth}
Outer Height: ${this.outerHeight}
`);}

winSize();