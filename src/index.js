"use strict";

require('promise-polyfill/src/polyfill');

class MyClass {
    async run() {
        if (false) {
            await console.log("if block 1");
        }
        else if (false) {
            await console.log("if block 2");
        }
        else {
            await console.log("if block 3");
        }
    }
}
