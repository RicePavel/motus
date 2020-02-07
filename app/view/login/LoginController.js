/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('motus.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    onLoginClick: function() {
        
        /*
        Ext.Ajax.request({
            url: '../motus_back/web/user/login',
            method: 'POST',
            params: {
                login: 'user',
                password: 'qwerty'
            },
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.log(obj);
            },
            failure: function(response, opts) {
              var obj = Ext.decode(response.responseText);
              console.error(obj);
            }
        });
        */
        
    }
});


