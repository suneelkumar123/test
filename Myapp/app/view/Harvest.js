Ext.define('Myapp.view.Harvest', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'harvestview',
    requires: [
        'Ext.TitleBar'
       
    ],
    id: 'Harvest',
    config: {
        tabBarPosition: 'bottom',
        scrollable: true,
         renderTo: Ext.getBody(),
            defaults: {
                listeners: {
                    activate: function(tab, eOpts) {
                        Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldPlantHarvestDatas_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].HarvestDate+'</td><td>'+jsonarr[i].WeightTicketNumber+'</td><td>'+jsonarr[i].TotalPoundsIn+'</td><td>'+jsonarr[i].TotalContainers+'</td><td>'+jsonarr[i].AverageWeightPerContainer+'</td><td><button onclick="editharv('+jsonarr[i].FarmFieldPlantHarvestDataID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deleteharv('+jsonarr[i].FarmFieldPlantHarvestDataID+');">Delete<img src="resources/images/add_black.png"height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable1').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                        });
                    }
                }
            },
    			//tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Harvest-[Farm field name]',
                         items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Add Harvester',
                              action: 'tab-harvest'
                            }
                        ],
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'select',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Farm Field Name',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Id number',
                        name: 'number',
                        id: 'number',
                        label: 'ProduceId No.',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your lot number',
                        name: 'name',
                        id: 'name',
                        label: 'Lot No.',
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select1',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Crop/Plant Category',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'date',
                        label: 'Date Planted',
                        id: 'date',
                        dateFormat: "d-m-Y H:i:s"
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'Schedule Harvest Date',
                        id: 'date1',
                        dateFormat: "d-m-Y H:i:s",
                        // value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                      {
                        xtype: 'textfield',
                        placeHolder: 'harvested pounds',
                        name: 'name',
                        id: 'harvested',
                        label: 'Total Pounds Harvested'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'toal pounds',
                        name: 'name',
                        id: 'packed',
                        label: 'Total Pounds Packed'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: ' Not Packed/Sold',
                        name: 'name',
                        id: 'sold',
                        label: 'Total Not Packed/Sold',
                    },
                    {
                        xtype: 'textfield',
                        id: 'sold1',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'sold2',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'sold3',
                        hidden: true
                    },



                    {
                         xtype: 'button', 
                         id: 'done', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {
                                                                                    
                                  var FarmFieldPlantID=Ext.getCmp('sold1').getValue();
                                  var ProduceIDNumber=Ext.getCmp('number').getValue();
                                  var LotNo=Ext.getCmp('name').getValue();
                                  var FarmFieldID=Ext.getCmp('sold2').getValue();
                                  var DatePlanted=Ext.getCmp('date').getValue();
                                  var ScheduledHarvestDate=Ext.getCmp('date1').getValue();
                                  var TotalPoundsHarvested=Ext.getCmp('harvested').getValue();
                                  var CategoryID=Ext.getCmp('sold3').getValue();
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
                                  alert('saved');
                            }
                    },
                    {
                         xtype: 'button', 
                         id: 'cancel', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'edit-grow',
                        handler: function () {
                                alert('Canceled');
                        }
                    },

            {
                
                html: [
                    "<table border=1 id='growtable1'>",
                        "<tr>",
                        "<th>Harvest Date</th>",
                        "<th>Weight Ticket Number</th>",
                        "<th>Total Pounds In</th>",
                        "<th>Total Containers</th>",
                        "<th>Average Weight per Container</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
                
           
        ]
                
    }

});

function editharv(FarmFieldPlantHarvestDataID)
{       
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldPlantHarvestDatas_Get('+FarmFieldPlantHarvestDataID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#date input').val(jsonarr[0].HarvestDate);
            $('#harvest input').val(jsonarr[0].WeightTicketNumber);
            $('#harvest1 input').val(jsonarr[0].Comments);
            $('#harvest2 input').val(jsonarr[0].TotalPoundsIn);
            $('#harvest3 input').val(jsonarr[0].TotalContainers);
            $('#harvest4 input').val(jsonarr[0].AverageWeightPerContainer);
            $('#harvest5 input').val(jsonarr[0].FarmFieldPlantHarvestDataID);
            $('#harvest6 input').val(jsonarr[0].FarmFieldPlantID);
            
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
                                        
   Ext.Viewport.setActiveItem({xtype: 'edit_harvestview'});//call another view
}

function deleteharv(FarmFieldPlantHarvestDataID)
{   
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldPlantHarvestDatas_Delete('+FarmFieldPlantHarvestDataID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

   //Ext.Viewport.setActiveItem({xtype: 'edit_pestsview'});
}