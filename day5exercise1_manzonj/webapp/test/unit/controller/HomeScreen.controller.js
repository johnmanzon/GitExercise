/*global QUnit*/

sap.ui.define([
	"zbtp/day5exercise1_manzonj/controller/HomeScreen.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HomeScreen Controller");

	QUnit.test("I should test the HomeScreen controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
