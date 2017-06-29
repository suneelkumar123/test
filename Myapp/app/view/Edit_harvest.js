Ext.define('Myapp.view.Edit_harvest', {
    extend: 'Ext.Container',
    xtype: 'edit_harvestview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        scrollable: true,
         renderTo: Ext.getBody(),
            defaults: {
                listeners: {
                    activate: function(tab, eOpts) {
                        Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldPlantHarvestDataDetail_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].ContainerIDNO+'</td><td>'+jsonarr[i].EmployeeName+'</td><td><button onclick="edittharv('+jsonarr[i].FarmFieldPlantHarvestDataDetailID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletharv('+jsonarr[i].FarmFieldPlantHarvestDataDetailID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable11').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                        });
                    }
                }
            },
                
                items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        id: 'titlbar',
                        title: 'Edit Harvest-[Farm Field Name]',
                         items: [
                            {ui: 'back', text: 'Back'},
                        
                        ],
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'date',
                        label: 'Harvest Date',
                        id: 'date',
                        dateFormat: "d-m-Y H:i:s"
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Harvested pounds',
                        name: 'name',
                        id: 'harvest',
                        label: 'Weight Ticket Number'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Add a comment here',
                        name: 'comment',
                        id: 'harvest1',
                        label: 'Comments'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Harvested pounds',
                        name: 'name',
                        id: 'harvest2',
                        label: 'Total Pounds In'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Harvested pounds',
                        name: 'name',
                        id: 'harvest3',
                        label: 'Total Container'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Total weight',
                        name: 'name',
                        id: 'harvest4',
                        label: 'Average Weight / Container'
                    },
                    {
                        xtype: 'textfield',
                        id: 'harvest5',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'harvest6',
                        hidden: true
                    },


                    {
                         xtype: 'button', 
                         id: 'harvest7', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {
                                
                                  var HarvestDate=Ext.getCmp('date').getValue();
                                  var WeightTicketNumber=Ext.getCmp('harvest').getValue();
                                  var Comments=Ext.getCmp('harvest1').getValue();
                                  var TotalPoundsIn=Ext.getCmp('harvest2').getValue();
                                  var TotalContainers=Ext.getCmp('harvest3').getValue();
                                  var AverageWeightPerContainer=Ext.getCmp('harvest4').getValue();
                                  var FarmFieldPlantHarvestDataID=Ext.getCmp('harvest5').getValue();
                                  var FarmFieldPlantID=Ext.getCmp('harvest6').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldPlantHarvestDatas_Update('+FarmFieldPlantHarvestDataID+','+FarmFieldPlantID+''+HarvestDate+','+WeightTicketNumber+','+TotalPoundsIn+','+TotalContainers+','+AverageWeightPerContainer+','+Comments+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('saved');
                            }
                    },
                    {
                         xtype: 'button', 
                         id: 'harvest8', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'edit-harvest',
                        handler: function () {
                                alert('Canceled');
                        }
                    },
                    {
                        xtype: 'searchfield',
                        name : 'name',
                        align: 'right',
                        width:200,
                        placeHolder: 'Input container ID'                        
                    },

            {
                
    
                html: [
                        "<table border=1 id='growtable11'>",
                            "<tr>",
                            "<th>Container ID#</th>",
                            "<th>Employee Name</th>",
                            "<th></th>",
                            "<th></th>",
                            "</tr>",
                        "</table>"

                ].join("")
            },
                

        ]
                
    }

});

// function edittharv()
// {
//    Ext.Viewport.setActiveItem({xtype: ''});
// }

// function deletharv()
// {
//    Ext.Viewport.setActiveItem({xtype: ''});
// }