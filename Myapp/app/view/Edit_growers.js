Ext.define('Myapp.view.Edit_growers', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'edit_growersview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        scrollable: true,
         
    			//tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Edit Growers and Suppliers'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Company name here',
                        name: 'number',
                        id: 'grow',
                        label: 'Company Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Name',
                        name: 'number',
                        id: 'grow1',
                        label: 'Contact Name',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'grow2',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Contact Title',
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
                        placeHolder: 'Your Address',
                        name: 'number',
                        id: 'grow3',
                        label: 'Address',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your city',
                        name: 'number',
                        id: 'grow4',
                        label: 'City',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Add your region',
                        name: 'number',
                        id: 'grow5',
                        label: 'Region',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Enter your code',
                        name: 'number',
                        id: 'grow6',
                        label: 'Postal Code:',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Add your phone number',
                        name: 'number',
                        id: 'grow7',
                        label: 'Phone',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Add you fax number',
                        name: 'number',
                        id: 'grow8',
                        label: 'Fax',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Home page',
                        name: 'number',
                        id: 'grow9',
                        label: 'Home Page',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'ab@example.com',
                        name: 'number',
                        id: 'grow0',
                        label: 'Email',
                    },
                    {
                        xtype: 'textfield',
                        id: 'grow10',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'grow11',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'grow12',
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
                                                                                    
                                  var SupplierID=Ext.getCmp('grow10').getValue();
                                  var CompanyName=Ext.getCmp('grow').getValue();
                                  var ContactName=Ext.getCmp('grow1').getValue();
                                  var ContactTitle=Ext.getCmp('grow2').getValue();
                                  var Address=Ext.getCmp('grow3').getValue();
                                  var City=Ext.getCmp('grow4').getValue();
                                  var Region=Ext.getCmp('grow5').getValue();
                                  var PostalCode=Ext.getCmp('grow6').getValue();
                                  var Country=Ext.getCmp('grow11').getValue();
                                  var Phone=Ext.getCmp('grow7').getValue();
                                  var Fax=Ext.getCmp('grow8').getValue();
                                  var HomePage=Ext.getCmp('grow9').getValue();
                                  var Email=Ext.getCmp('grow0').getValue();
                                  var CompanyUCCprefix=Ext.getCmp('grow12').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Suppliers_Update('+SupplierID+','+CompanyName+','+ContactName+','+ContactTitle+','+Address+','+City+','+Region+','+PostalCode+','+Country+','+Phone+','+Fax+','+HomePage+','+Email+','+CompanyUCCprefix+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
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
                         id: 'cancel', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'edit-growers',
                        handler: function () {
                                alert('Canceled');
                        }
                    }
                
           
        ]
                
    }

});