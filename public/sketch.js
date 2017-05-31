// Connection variables
var socket = io();
// ---

function setup() {
  createCanvas(400, 400);
  socket.emit('test', 'hello');   // Send event with message to server
}

function draw() {
  background(0);
  drawSprites();
}

/**
 * Called when the client connects to the server.
 * Creates a 50x50 sprite at a random location on connect.
 */
socket.on('connect', function () {
  createSprite(random(0, width), random(0, height), 50, 50);
});