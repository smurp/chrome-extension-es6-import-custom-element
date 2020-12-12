import User from './models/user.js';
import {CuStom} from './custom.js';

customElements.define('cu-stom', CuStom)

export function main() {
  const user = User.new({name: 'otiai20, and this is proof that ES6 import works in content_script'});
  console.log(user.greet());
  console.log("Is chrome.runtime available here?",
              typeof chrome.runtime.sendMessage == "function");
  const aCustom = document.createElement('cu-stom');
  console.log("supports custom elements: ",
              aCustom.constructor.name == 'CuStom');
}
