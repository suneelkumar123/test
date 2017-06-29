Ext.define('Myapp.view.Users', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'usersview',
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
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Users_all(null)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].LoginName+'</td><td>'+jsonarr[i].Password+'</td><td>'+jsonarr[i].LastName+'</td><td>'+jsonarr[i].FirstName+'</td><td>'+jsonarr[i].ReportsTo+'</td><td>'+jsonarr[i].SecurityLevelName+'</td><td>'+jsonarr[i].UserTypeName+'</td><td>'+jsonarr[i].HomePhone+'</td><td>'+jsonarr[i].Email+'</td><td>'+jsonarr[i].Active+'</td><td><button onclick="useredit('+jsonarr[i].UserID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="userdelete('+jsonarr[i].UserID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable8').append(html);
                       
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
                        title: 'Users',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Add New Users',
                              action: 'call-contact-list',
                            }
                        ],
                    },
                    { 
                        xtype: 'selectfield',
                        hidden: true
                    },

            {
                
                html: [
                    "<table border=1 id='growtable8'>",
                        "<tr>",
                        "<th>Login Name</th>",
                        "<th>Password</th>",
                        "<th>Last Name</th>",
                        "<th>First Name</th>",
                        "<th>Reports To</th>",
                        "<th>Security Level</th>",
                        "<th>User Type</th>",
                        "<th>Phone</th>",
                        "<th>Email</th>",
                        "<th>Active</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
                
           
        ]
                
    }

});

function useredit(UserID)
{       var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_Users_Get('+UserID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#users input').val(jsonarr[0].UserTypeName);
            $('#users1 input').val(jsonarr[0].ReferenceName);
            $('#users2 input').val(jsonarr[0].SecurityLevelName);
            $('#users3 input').val(jsonarr[0].LoginName);
            $('#users4 input').val(jsonarr[0].Password);
            $('#users6 input').val(jsonarr[0].LastName);
            $('#users7 input').val(jsonarr[0].FirstName);
            $('#users8 input').val(jsonarr[0].Title);
            $('#users9 input').val(jsonarr[0].TitleOfCourtesy);
            $('#users10 input').val(jsonarr[0].BirthDate);
            $('#users11 input').val(jsonarr[0].HireDate);
            $('#users12 input').val(jsonarr[0].Address);
            $('#users13 input').val(jsonarr[0].City);
            $('#users14 input').val(jsonarr[0].Region);
            $('#users15 input').val(jsonarr[0].PostalCode);
            $('#users16 input').val(jsonarr[0].Country);
            $('#users17 input').val(jsonarr[0].HomePhone);
            $('#users18 input').val(jsonarr[0].Extension);
            $('#users19 input').val(jsonarr[0].Notes);
            $('#users20 input').val(jsonarr[0].ReportsTo);
            $('#users21 input').val(jsonarr[0].Email);
            $('#users22 input').val(jsonarr[0].Active);
            $('#users23 input').val(jsonarr[0].UserID);
            $('#users24 input').val(jsonarr[0].UserTypeID);
            $('#users25 input').val(jsonarr[0].ReferenceID);
            $('#users26 input').val(jsonarr[0].SecurityLevelID);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
                        
                    
                
   Ext.Viewport.setActiveItem({xtype: 'edit_usersview'});//call another view
}

function userdelete(UserID)
{
  var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Users_Delete('+UserID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
   //Ext.Viewport.setActiveItem({xtype: 'add_usersview'});
}
