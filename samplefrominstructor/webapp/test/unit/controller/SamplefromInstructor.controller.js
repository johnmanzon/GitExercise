/*global QUnit*/

sap.ui.define([
	"samplefrominstructor/samplefrominstructor/controller/SamplefromInstructor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SamplefromInstructor Controller");

	QUnit.test("I should test the SamplefromInstructor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
