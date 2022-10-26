"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontaLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawLines();
drawMoreLines();
draw();

function drawLines() {
	let step = width / horizontaLines;
	for (let i = 0; i < horizontaLines; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);
	}
}

function drawMoreLines() {
	let step = height / verticalLines;
	for (let i = 0; i < verticalLines; i++) {
		Utils.drawLine(0, 0 + 10 * i, width, height - step * i);
	}
}

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "orange";
	context.fillRect(0, 0, 600, 300);
	drawLines();
	drawMoreLines();
}
