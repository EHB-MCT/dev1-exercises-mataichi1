"use strict";

/**
 * @type {CanvasRenderingContext2D}
 */
let context;

setupcontext();

export default context;

function setupcontext() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}
