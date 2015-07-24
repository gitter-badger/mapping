var assert = require("assert"),
    brain = require("./lib/brain");

// Unpause the stdin stream:
process.stdin.resume();

// Listen for incoming data:
process.stdin.on('data', function (data) {
    console.log('Received data: ' + data + 'starting Mapping Neutral Network');
});

var net = new brain.NeuralNetwork();

var xor = [
  { input: [0,200], output: [1]},
  { input: [1,500], output: [2]},
  { input: [10,4000], output: [3]},
  { input: [30,20000], output: [4]}];

var trainStream = net.createTrainStream({
	/**
	* Write training data to the stream. Called on each training iteration.
	*/
	floodCallback: function() {
		flood(trainStream, xor);
  },

  /**
   * Called when the network is done training.
   */
  doneTrainingCallback: function(obj) {
    console.log("trained in " + obj.iterations + " iterations with error: "
                + obj.error);

    var result = net.run([20,10000]);

    console.log("0 XOR 1: ", result);  // 0.987
  }
});

// kick it off
flood(trainStream, xor);


function flood(stream, data) {
  for (var i = 0; i < data.length; i++) {
    stream.write(data[i]);
  }
  // let it know we've reached the end of the data
  stream.write(null);
}
