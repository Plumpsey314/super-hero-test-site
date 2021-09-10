import {FacebookLikeButton} from './facebookLikes';

let button1 = new FacebookLikeButton();
button1.like();
button1.like();
console.log(button1.Likes)
let button2 = new FacebookLikeButton(324);
button2.unlike();
console.log(button2.Likes)