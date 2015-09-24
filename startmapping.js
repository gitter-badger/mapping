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
var  resolution = require("./resolution.js");
var  mppm = require("./mppminstall.js");
var  context = require("./context.js");
var  complexity = require("./complexity.js");
var  compute = require("./compute.js");
var  statistics = require("./statistics.js");

// activate the Mapping Protocol
startResolution = new resolution();
startMPPM = new mppm();
startContext = new context();
startComplexity = new complexity();
startCompute = new compute();
startStatistics = new statistics();


