Ext.define('Myapp.view.Add_grow', {
    extend: 'Ext.Container',
    xtype: 'add_growview',
    id: 'Add_grow',
    requires: [
        'Ext.TitleBar'
    ],
    config: {  

                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Add Grow and harvest',
                         items: [
                            {   
                                ui: 'back',
                                // id: 'back1',
                                text: 'Back'
                            }
                        ]
                    },
                    {

                        xtype: 'textfield',
                        placeHolder: 'farm field name',
                        //name: 'Farmfield',
                        id: 'fieldname',
                        label: 'Farm Field Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'ProduceId number',
                        //name: 'Produce',
                        id: 'ProduceId',
                        label: 'ProduceId No.',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'lot nunber',
                       // name: 'name',
                        id: 'LotnoId',
                        label: 'Lot No.',
                    },
                    {
                        xtype: 'textfield',
                        id: 'LotnoId1',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'LotnoId2',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'LotnoId3',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Category of crop',
                        id: 'CropPlantId',
                       // name: 'Select',
                        label: 'Crop/Plant Category',
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'datePlanted',
                        label: 'Date Planted',
                        id: 'date',
                        dateFormat: "Y-m-d H:i:s"
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'dateHarvest',
                        label: 'Schedule Harvest Date',
                        id: 'date1',
                        dateFormat: "Y-m-d H:i:s",
                        // value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                        xtype: 'button', 
                         id: 'done', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '40',
                            handler: function () {
                              
                                  var FarmFieldID=Ext.getCmp('LotnoId1').getValue();
                                  var CategoryID=Ext.getCmp('LotnoId3').getValue();
                                  var ProduceIDNumber=Ext.getCmp('ProduceId').getValue();                                
                                  var DatePlanted=Ext.getCmp('date').getValue();
                                  var LotNo=Ext.getCmp('LotnoId').getValue();
                                  var ScheduledHarvestDate=Ext.getCmp('date1').getValue();
                                  var TotalPoundsHarvested=Ext.getCmp('LotnoId2').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_farmfieldplants_Insert('+FarmFieldID+','+CategoryID+','+ProduceIDNumber+','+DatePlanted+','+LotNo+','+ScheduledHarvestDate+','+TotalPoundsHarvested+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('added'); 
                            }
                    },
                    {
                         xtype: 'button', 
                         //iconCls: 'add',
                         id: 'cancel', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '40',
                         action: 'edit-grow',
                        handler: function () {
                                alert('Canceled');
                        }
                    },
                
                ]
        
    }
});
