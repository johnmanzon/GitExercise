sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",    
	"sap/ui/core/util/MockServer",
	"sap/base/Log"    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter, MockServer, Log) {
        "use strict";

        return Controller.extend("sapips.training.mockserver.controller.mockserver", {

            formatter: formatter,

            onInit: function () {
                //Get the view
                var oView = this.getView();
                
                var oI18n = this.getOwnerComponent().getModel("i18n");

                oView.setModel(oI18n, "i18n");                

                //Instantiate JSONModel
                var oAddressModel = new JSONModel();

                               //Define Data
                               var oAddress = {
                                "EID": "john.k.s.manzon",
                                "enabled" : true,
                                "Address" : {
                                    "Street": "Burgos St",
                                    "City" : "San Leo",
                                    "Zip" : "4234",
                                    "Country" : "Zimbabwe"
            
                                },
                                "SalesAmount": "666",
                                "CurrencyCode": "USD" 

                            };            
            
                            oAddressModel.setData(oAddress);
                            //Bind the Model to view
                            oView.setModel(oAddressModel);


			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			});

			// simulate against the metadata and mock data
			oMockServer.simulate("../localService/metadata.xml", {
				sMockdataBaseUrl: "..localService/data",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();

			Log.info("Running the app with mock data");


            },

        onSelectProduct: function(oEvent){

            //Get the Control(List)
            var oList = oEvent.getSource();

            //Get the selected item
            var oSelItem = oList.getSelectedItem();

            //Get the context binding path
            var sSelItemPath = oSelItem.getBindingContextPath();

            //Bind the selected item to control(simpleform in Panel4)
            this.getView().byId("idProductDetails").bindElement( {

                path: sSelItemPath,
                model: "mock",

            } )

        },
        onCreate: function(oEvent) {


        }

        });
    });
