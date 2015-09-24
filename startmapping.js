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
var  resolution = require("./resolution/src/resolution.js");
var  mppm = require("./mppm/src/mppminstall.js");
var  context = require("./context/src/context.js");
var  complexity = require("./complexity/src/complexity.js");
var  compute = require("./compute/src/compute.js");
var  statistics = require("./statistics/src/statistics.js");
var  accounting = require("./accounting/src/accounting.js");


// activate the Mapping Protocol
startResolution = new resolution();
startMPPM = new mppm();
startContext = new context();
startComplexity = new complexity();
startCompute = new compute();
startStatistics = new statistics();
startAccounting = new accounting();

