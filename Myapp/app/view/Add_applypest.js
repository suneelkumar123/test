Ext.define('Myapp.view.Add_applypest', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'add_applypestview',
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
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_all()?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].PestName+'</td><td><button onclick="deleteit('+jsonarr[i].PestID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td>';
                               // <td>Delete<a href="#"><img src="resources/images/add_black.png"></a></td></tr>';
                        
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
                        title: 'Add Applied Pesticide',
                        items: [
                            {ui: 'back', text: 'Back'}
                            
                        ],
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Pesticide Name',
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
                        placeHolder: 'Total Acers',
                        id: 'number',
                        label: 'Total Acers',
                    },
                    {
                        xtype: 'datepickerfield',
                        placeHolder: 'Date & Time Sprayed',
                        id: 'name',
                        label: 'Date & Time Sprayed',
                        dateFormat: 'Y-m-d H:i:s'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Wind Speed',
                        id: 'number1',
                        label: 'Wind Speed',
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select1',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Wind Direction',
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
                        placeHolder: 'Field Scheduled Time',
                        id: 'number2',
                        label: 'Field Scheduled Re-Enter Time',
                    }, 
                    {
                        xtype: 'textfield',
                        placeHolder: 'GPA To Be Used',
                        id: 'harvested',
                        label: 'GPA To Be Used'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your comment here',
                        id: 'packed',
                        label: 'Comments'
                    },
                    {
                        xtype: 'textfield',
                        id: 'packed2',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'packed3',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'packed4',
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
                                
                                  var FarmFieldPlantID=Ext.getCmp('packed2').getValue();
                                  var PesticideID=Ext.getCmp('packed3').getValue();
                                  var TotalAcres=Ext.getCmp('number').getValue();
                                  var DateTimeSprayed=Ext.getCmp('name').getValue();
                                  var WindSpeed=Ext.getCmp('number1').getValue();
                                  var WindDirection=Ext.getCmp('select1').getValue();
                                  var FieldScheduledReEnterTime=Ext.getCmp('number2').getValue();
                                  var GPAToBEUsed=Ext.getCmp('harvested').getValue();
                                  var ActualGPASprayed=Ext.getCmp('packed4').getValue();
                                  var Comments=Ext.getCmp('packed').getValue();                                  
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFieldApplications_Insert('+FarmFieldPlantID+','+PesticideID+','+TotalAcres+','+DateTimeSprayed+','+WindSpeed+','+WindDirection+','+FieldScheduledReEnterTime+','+GPAToBEUsed+','+ActualGPASprayed+','+Comments+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
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
                         id: 'cancel', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'edit-apppest',

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
                    "<table border=1 id='growtable1'>",
                        "<tr>",
                        "<th>Pests</th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
                
           
        ]
                
    }

});

function deleteit(PestID)
{
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Delete('+PestID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

}