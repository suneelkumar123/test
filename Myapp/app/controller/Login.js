// Ext.define("mysencha.controller.Login", {
// extend: "Ext.app.Controller",
// views: ['Login', 'Main'],
// models: ['UserModel'],
// config: {
//     refs: {
//         loginForm: "#loginFormPanel"
//     },
//     control: {
//         'button[action=login]': {
//             tap: "authenticateUser"
//         }
//     }
// },

// authenticateUser: function (button) {
//             loginForm.submit({
//             method: 'POST',
//             success: function (form, result) {
//             //THIS IS NOT WORKING
//                 Ext.Viewport.add(Ext.create('mysencha.view.Main'));

//             },
//             failure: function (form, result) {                   
//                 console.log('Error');
//                 Ext.Msg.alert('Check the logic for login and redirect');
//             }
//         });
//        }           
// });
