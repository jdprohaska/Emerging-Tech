//1. Install npm package manager with terminal using: npm init -y
import { wizard } from './wizard'; // when importing you do not need the file extension. (good to know!)
import { barbarian } from './barbarian';
import { monk } from './monk';
import { fighter } from './fighter';

console.log('running from index.js');
console.log(wizard);
console.log(barbarian);
console.log(monk);
console.log(fighter);


//2. as of now this will not work. You will get an error in the console.
//3. install webpack with terminal using: npm i -D webpack webpack-cli.
//4. run webpack by using command: npx webpack.
//5. change index.html src from index.js to ./dis/main.js.
//6. refresh index.html