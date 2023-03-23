/*global QUnit*/

sap.ui.define([
	"sapipstraining/mockserver/controller/mockserver.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mockserver Controller");

	QUnit.test("I should test the mockserver controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
