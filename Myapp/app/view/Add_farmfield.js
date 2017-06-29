Ext.define('Myapp.view.Add_farmfield', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'add_farmview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        //scrollable: true,
                  //tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Add Farm Field'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Farm id ',
                        name: 'number',
                        id: 'farm',
                        label: 'Farm Field ID#',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Farm name',
                        name: 'number',
                        id: 'farm1',
                        label: 'Farm Field Name',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'farm2',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Supplier Name',
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
                        placeHolder: 'Legal description',
                        name: 'number',
                        id: 'farm3',
                        label: 'Legal Description',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Acers',
                        name: 'name',
                        id: 'farm4',
                        label: 'Total Acers',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Irrigation source',
                        name: 'number',
                        id: 'farm5',
                        label: 'Irrigation Source 1',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Irrigation source',
                        name: 'number',
                        id: 'farm6',
                        label: 'Irrigation Source 2',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Irrigation source',
                        name: 'number',
                        id: 'farm7',
                        label: 'Irrigation Source 3',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your comment here',
                        name: 'number',
                        id: 'farm8',
                        label: 'Comment',
                    },
                    {
                        xtype: 'textfield',
                        id: 'farm11',
                        hidden: true
                    },

                    {
                         xtype: 'button', 
                         id: 'farm9', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {
                                                                                
                                  var FieldIDNumber=Ext.getCmp('farm').getValue();
                                  var FieldName=Ext.getCmp('farm1').getValue();
                                  var SupplierName=Ext.getCmp('farm2').getValue();
                                  var LegalDescription=Ext.getCmp('farm3').getValue();
                                  var TotalAcres=Ext.getCmp('farm4').getValue();
                                  var IrrigationSource1=Ext.getCmp('farm5').getValue();
                                  var IrrigationSource2=Ext.getCmp('farm6').getValue();
                                  var IrrigationSource3=Ext.getCmp('farm7').getValue();
                                  var Comments=Ext.getCmp('farm8').getValue();
                                  var SupplierID=Ext.getCmp('farm11').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFields_Insert('+FieldIDNumber+','+FieldName+','+SupplierID+','+LegalDescription+','+TotalAcres+','+IrrigationSource1+','+IrrigationSource2+','+IrrigationSource3+','+Comments+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
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
                         id: 'farm0', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'edit-farmfield',

                        handler: function () {
                                alert('Canceled');
                        }
                    },                
           
        ]
                
    }

});