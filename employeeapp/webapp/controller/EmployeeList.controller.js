sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/MessageBox",
    	"sap/ui/table/RowAction",
	"sap/ui/table/RowActionItem",
	"sap/ui/table/RowSettings"    
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, Filter, FilterOperator, MessageBox, RowAction, RowActionItem, RowSettings) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {
			var fnPress = this.handleActionPress.bind(this);                


            },

            onAdd: function () {

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("EmployeeCreate");

            },

            onDelete: function () {
                MessageBox.confirm("Are you sure?");
            },

            onDisplay: function () {          
               /* 
                var oPath = oEvent.getSource().getBindingContextPath();
                var selectedItem = oEvent.getSource().getBindingContext("oEmployee").getProperty(oPath);                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EmployeeDisplay", {
                    EmployeeID: selectedItem.EmployeeID,
                });
                */


                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("EmployeeDisplay")          
            },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },            

            onSelectEmployee: function(oEvent){

                //Get the Control(List)
                var oList = oEvent.getSource();

                //Get the selected item
                var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Bind the selected item to control(simpleform in Panel4)
                this.getView().byId("idProductDetails").bindElement( {

                    path: sSelItemPath,
                    model: "oEmployee"
                } )

            },

            filterDisplay: function (oEvent) {
                // build filter array

                var sQuery = oEvent.getSource().getValue();

                var oFilter = new Filter({
 
                    filters: [

                        new Filter("EmployeeID", FilterOperator.Contains, sQuery),
                        new Filter("FirstName", FilterOperator.Contains, sQuery),
                        new Filter("LastName", FilterOperator.Contains, sQuery),
                    //    new Filter("Age", FilterOperator.Contains, sQuery),
                    //    new Filter("HireDate", FilterOperator.Contains, sQuery),
                        new Filter("CarrerLevel", FilterOperator.Contains, sQuery),
                        new Filter("CurrentProject", FilterOperator.Contains, sQuery)                        
                    ],
                    and: false
                });

                // filter binding
                var oList = this.getView().byId("idEmployee");
                var oBinding = oList.getBinding("rows");
                oBinding.filter(oFilter);

            },

            handleActionPress: function(oEvent) {
                var oRow = oEvent.getParameter("row");
                var oItem = oEvent.getParameter("item");
            },


        });
    });