
Ext.define('Myapp.view.Edit_users', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'edit_usersview',
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
                        title: 'Edit Users',
                        items: [
                            {ui: 'back', text: 'Back'},
                            
                        ],
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'users',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Users Type',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'users1',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'References',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'users2',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Security Level',
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
                        placeHolder: 'user name',
                        name: 'name',
                        id: 'users3',
                        label: 'Login Name',
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'password',
                        name: 'name',
                        id: 'users4',
                        label: 'Password',
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'confirm your password',
                        name: 'name',
                        id: 'users5',
                        label: 'Confirm Password',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'last name',
                        name: 'name',
                        id: 'users6',
                        label: 'Last Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'first name',
                        name: 'name',
                        id: 'users7',
                        label: 'First Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'title',
                        name: 'name',
                        id: 'users8',
                        label: 'Title',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'courtesy title',
                        name: 'name',
                        id: 'users9',
                        label: 'Title Of Courtesy',
                    },
                    {
                        xtype: 'datepickerfield',                       
                        label: 'Birth Date',
                        id: 'users10',
                        dateFormat: "Y-m-d H:i:s"
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'datePlanted',
                        label: 'Hire Date',
                        id: 'users11',
                        dateFormat: "Y-m-d H:i:s"
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'your address',
                        name: 'name',
                        id: 'users12',
                        label: 'Address',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'your city',
                        name: 'name',
                        id: 'users13',
                        label: 'City',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'your state',
                        name: 'name',
                        id: 'users14',
                        label: 'State',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'postal code',
                        name: 'name',
                        id: 'users15',
                        label: 'Postal Code',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'your country',
                        name: 'name',
                        id: 'users16',
                        label: 'Country',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'phone number',
                        name: 'name',
                        id: 'users17',
                        label: 'Home Phone',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'extension',
                        name: 'name',
                        id: 'users18',
                        label: 'Extension',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'users19',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Notes',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'users20',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Reports To',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'emailfield',
                        placeHolder: 'ab@example.com',
                        name: 'users21',
                        id: 'users21',
                        label: 'E-mail',
                    },
                    {
                        xtype: 'textfield',
                        id: 'users23',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'users24',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'users25',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'users26',
                        hidden: true
                    },
                    {
                        xtype: 'container',
                        layout : {
                            type  : 'hbox',
                            align : 'stretch'
                        },
                        defaults: {
                            xtype: 'radiofield',
                            label: 'Active',
                        },
                        items: [
                        {
                            id: 'users22',
                            label: 'Active',
                            xtype: 'textfield'
                        },
                        {
                            name: 'gender',
                            label: 'Online',
                            value: 1,
                            //checked: true

                        }, {
                            name: 'gender',
                            label: 'Offline',
                            value: 0
                        }]
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
                                
                                  var UserTypeID=Ext.getCmp('users24').getValue();
                                  var ReferenceID=Ext.getCmp('users25').getValue();
                                  var SecurityLevelID=Ext.getCmp('users26').getValue();
                                  var LoginName=Ext.getCmp('users3').getValue();
                                  var Password=Ext.getCmp('users4').getValue();
                                  var LastName=Ext.getCmp('users6').getValue();
                                  var FirstName=Ext.getCmp('users7').getValue();
                                  var Title=Ext.getCmp('users8').getValue();
                                  var TitleOfCourtesy=Ext.getCmp('users9').getValue();
                                  var BirthDate=Ext.getCmp('users10').getValue();
                                  var HireDate=Ext.getCmp('users11').getValue();
                                  var Address=Ext.getCmp('users12').getValue();
                                  var City=Ext.getCmp('users13').getValue();
                                  var Region=Ext.getCmp('users14').getValue();
                                  var PostalCode=Ext.getCmp('users15').getValue();
                                  var Country=Ext.getCmp('users16').getValue();
                                  var HomePhone=Ext.getCmp('users17').getValue();
                                  var Extension=Ext.getCmp('users18').getValue();
                                  var Notes=Ext.getCmp('users19').getValue();
                                  var ReportsTo=Ext.getCmp('users20').getValue();
                                  var Email=Ext.getCmp('users21').getValue();
                                  var Active=Ext.getCmp('users22').getValue();
                                  var UserID=Ext.getCmp('users23').getValue();
                                  alert(BirthDate);
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Users_Update('+UserID+','+LoginName+','+Password+','+UserTypeID+','+ReferenceID+','+SecurityLevelID+','+LastName+','+FirstName+','+Title+','+TitleOfCourtesy+','+BirthDate+','+HireDate+','+Address+','+City+','+Region+','+PostalCode+','+Country+','+HomePhone+','+Extension+','+Notes+','+ReportsTo+','+Email+','+Active+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
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
                         id: 'farm0', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'cancle-users',
                        handler: function () {
                                alert('Canceled');
                        }
                    },
        ]
                
    }

});