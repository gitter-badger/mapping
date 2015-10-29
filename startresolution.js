/**
*  Dsensor - Mapping Protocol
*
* Start Mapping Protocol

*
* @package    Dsensor.org open source project
* @copyright  Copyright (c) 2012 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var  Resolution = require("./resolution/src/resolution.js");
var  Sampler = require("./sampler/src/sampler.js");
var  Compute = require("./compute/src/compute.js");
var  Score = require("./score/src/score.js");
var  Accounting = require("./accounting/src/accounting.js");


// activate the Mapping Protocol
startResolution = new Resolution();
startSampler = new Sampler();
startCompute = new Compute();
startScore = new Score();
startAccounting = Accounting();

