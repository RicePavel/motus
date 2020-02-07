/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('motus.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    onLoginClick: function() {
        
        localStorage.setItem('MotusLogged', true);
        
        this.getView().destroy();
        
        Ext.create({
            xtype: 'task_list',
            renderTo: Ext.getBody()
        }); 
    }
});


