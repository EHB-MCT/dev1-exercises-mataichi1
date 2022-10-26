"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontaLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawLines();
drawMoreLines();

function drawLines() {
	let step = width / horizontaLines;
	for (let i = 0; i < horizontaLines; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);
	}
}

function drawMoreLines() {
	let step = height / verticalLines;
	for (let i = 0; i < verticalLines; i++) {
		Utils.drawMoreLines(0 + 10 * i, 0, height - step * i, width);
	}
}
