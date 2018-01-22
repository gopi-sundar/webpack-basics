import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src='http://lorempixel.com/400/400'

document.body.appendChild(image);