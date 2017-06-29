Ext.define('Myapp.view.Edit_grow', {
    extend: 'Ext.Container',
    xtype: 'edit_growview',
    requires: [
        'Ext.TitleBar'
    ],
    config: {  

                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Edit Grow and harvest',
                         items: [
                            {   xtype: 'button',
                                name: 'myNavXtypeName',
                                id: 'backButton',
                                ui: 'back',
                                text: 'Back'
                            }
                        ]
                    },
                    {

                        xtype: 'textfield',
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
                       // name: 'name',
                        id: 'LotnoId',
                        label: 'Lot No.',
                    },
                    {
                        xtype: 'textfield',
                        id: 'LotnoId1',
                        hidden: true
                    },{
                        xtype: 'textfield',
                        id: 'LotnoId2',
                        hidden: true
                    },{
                        xtype: 'textfield',
                        id: 'LotnoId3',
                        hidden: true
                    },{
                        xtype: 'textfield',
                        id: 'LotnoId4',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
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
                         id: 'saveButton', 
                         text: 'Save',
                        // iconCls: 'add',
                         align: 'left', 
                        ui: 'confirm',
                        cls: 'btnAction',
                         margin: '40',
                            handler: function () {                                                    

                                  var FarmFieldPlantID=Ext.getCmp('LotnoId4').getValue();
                                  var ProduceIDNumber=Ext.getCmp('ProduceId').getValue();
                                  var LotNo=Ext.getCmp('LotnoId').getValue();
                                  var CategoryId=Ext.getCmp('LotnoId3').getValue();
                                  var DatePlanted=Ext.getCmp('date').getValue();
                                  var ScheduledHarvestDate=Ext.getCmp('date1').getValue();
                                  var FarmFieldID=Ext.getCmp('LotnoId1').getValue();
                                  var TotalPoundsHarvested=Ext.getCmp('LotnoId2').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_farmfieldplants_Update('+FarmFieldPlantID+','+FarmFieldID+','+CategoryID+','+ProduceIDNumber+','+DatePlanted+','+LotNo+','+ScheduledHarvestDate+','+TotalPoundsHarvested+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('edited'); 
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
