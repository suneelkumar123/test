Ext.define('Myapp.view.Main', {
    extend: 'Ext.Container',       
    requires: [
        'Ext.TitleBar'      
    ],
    config: {
             items: [
                 {
                     docked: 'top',
                     xtype: 'titlebar',
                     title: 'Login'
                 },
                 {
                 xtype: 'emailfield',
                 name : 'email',
                 label: 'Email'
                 },
                 {
                     xtype: 'passwordfield',
                     name : 'password',
                     label: 'Password'
                 },
                 {
                 xtype: 'button',
                 text: 'Login',
                id: 'loginButton',
                margin: '40',
            
                }
            ]
    },
 
});


