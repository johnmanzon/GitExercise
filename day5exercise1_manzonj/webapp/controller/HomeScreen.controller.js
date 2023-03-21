sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1manzonj.controller.HomeScreen", {
            onSend: function(oEvent) {
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("SurnameInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput").getSelectedKey();
                

                MessageToast.show("Your name is " + sName + ", your surname is " + sSurname + ", your age is " + sAge + "your favorite tech is " + oTech );
    


            }
    
            
        });
    });
