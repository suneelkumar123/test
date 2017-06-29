Ext.define('Myapp.view.Apply_pesticides', {
    extend: 'Ext.Container',
    xtype: 'pply_pesticidesview',
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
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldApplications_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].PesticideName+'</td><td>'+jsonarr[i].TotalAcres+'</td><td>'+jsonarr[i].DateTimeSprayed+'</td><td>'+jsonarr[i].WindSpeed+'</td><td>'+jsonarr[i].WindDirection+'</td><td>'+jsonarr[i].FieldScheduledReEnterTime+'</td><td>'+jsonarr[i].GPAToBEUsed+'</td><td>'+jsonarr[i].ActualGPASprayed+'</td><td><button onclick="editapplyy('+jsonarr[i].FarmFieldApplicationID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deleteapplyy('+jsonarr[i].FarmFieldApplicationID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable3').append(html);
                       
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
                        title: 'Apply Pesticide-[Farm Field Name]',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Apply New Pesticide',
                              action: 'apply-pestic'
                            }
                        ],
                    },
                    {
                     
                       xtype: 'toolbar',
                       action: 'search',
                       docked: 'top',           
                       items: [
                           {
                                xtype: 'spacer'
                            },
                           {
                               xtype: 'searchfield',
                               width: '16em', 
                               placeHolder: 'Search...'
                           },
                           { 
                                xtype: 'spacer'
                            }
                        ]
               
                    },
                    {
                        xtype: 'selectfield',
                        id: 'pest',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Farm Field Name',
                        store: {//data bound control needs to pass store object
                        data: [
                            // { placeHolder: 'farm name' },
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'ProduceId number',
                        id: 'pest1',
                        label: 'ProduceId No.',
                    },
                    {
                        xtype: 'textfield',
                        id: 'pest2',
                        placeHolder: 'Lot No.',
                        label: 'Lot No.',
                    },
                    {
                        xtype: 'textfield',
                        id: 'pest3',
                        placeHolder: 'Total Pounds Harvested',
                        label: 'Total Pounds Harvested',
                    },
                    {
                        xtype: 'textfield',
                        id: 'pest4',
                        placeHolder: 'Total Not Packed/Sold',
                        label: 'Total Not Packed/Sold',
                    },
                    {
                        xtype: 'selectfield',
                        id: 'pest5',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Crop/Plant Category',
                        store: {//data bound control needs to pass store object
                        data: [
                            // { placeHolder: 'farm name' },
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}                        
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'datePlanted',
                        placeHolder: 'MM/DD/YYYY',
                        label: 'Date Planted',
                        id: 'pest6',
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'dateHarvest',
                        placeHolder: 'MM/DD/YYYY',
                        label: 'Schedule Harvest Date',
                        id: 'pest7',
                        // value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                        xtype: 'textfield',
                        id: 'pest8',
                        placeHolder: 'Total Pounds Packed',
                        label: 'Total Pounds Packed',
                    },
                    {
                         xtype: 'button', 
                         id: 'pest9', 
                         text: 'Pest', 
                         align: 'right', 
                         ui: 'action',
                         cls: 'btnAction',
                         margin: '10',
                         action: 'Pest-view'
                           
                    },
                    {
                         xtype: 'button', 
                         id: 'pest10', 
                         text: 'Pesticide', 
                         align: 'right', 
                         ui: 'action',
                         margin: '10',
                         action: 'Pesticide-view'

                        // handler: function () {
                        //         alert('Canceled');
                        // }
                    },
                    {
                html: [
                    "<table border=1 id='growtable3'>",
                        "<tr>",
                        "<th>Pesticide Name</th>",
                        "<th>Total Acres</th>",
                        "<th>Date & Time Sprayed</th>",
                        "<th>Wind Speed</th>",
                        "<th>Wind Direction</th>",
                        "<th>Field Scheduled re-Entered Time</th>",
                        "<th>GPA To Be Used</th>",
                        "<th>Actual GPA Sprayed</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
     
                
                ],
                
                
    }

});

function editapplyy(FarmFieldApplicationID)
{
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_FarmFieldApplications_Get('+FarmFieldApplicationID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#select input').val(jsonarr[0].PesticideName);
            $('#number input').val(jsonarr[0].TotalAcres);
            $('#name input').val(jsonarr[0].DateTimeSprayed);
            $('#number1 input').val(jsonarr[0].WindSpeed);
            $('#select1 input').val(jsonarr[0].WindDirection);
            $('#number2 input').val(jsonarr[0].FieldScheduledReEnterTime);
            $('#harvested input').val(jsonarr[0].GPAToBEUsed);
            $('#packed input').val(jsonarr[0].Comments);
            $('#packed1 input').val(jsonarr[0].FarmFieldApplicationID);
            $('#packed2 input').val(jsonarr[0].FarmFieldPlantID);
            $('#packed3 input').val(jsonarr[0].PesticideID);
            $('#packed4 input').val(jsonarr[0].ActualGPASprayed);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
   Ext.Viewport.setActiveItem({xtype: 'edit_applypestview'});
}

function deleteapplyy(FarmFieldApplicationID)
{   
   var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldApplications_Delete('+FarmFieldApplicationID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
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

