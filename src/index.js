import "core-js/stable";
import "regenerator-runtime/runtime";

const greetings = (name) => {
 return `hello ${name}`;
}

console.log(greetings('Konrad'));
var array = [1,2,3];

console.log('hello world, we are using babel with browserslist');
Array.from(array).forEach(($item) => {
 console.log($item);
});
