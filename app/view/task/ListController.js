/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('motus.view.task.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.task_list',
    
    logout: function() {
        localStorage.removeItem('MotusLogged');
        this.getView().destroy();
        Ext.create({
               xtype: 'login'
        }); 
    }
});


