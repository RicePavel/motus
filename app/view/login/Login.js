/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('motus.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    
    requires: [
        'motus.view.login.LoginController',
        'Ext.form.Panel'
    ],
    
    controller: 'login',
    title: 'Вход в систему',
    closable: false,
    autoShow: true,
    
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'login',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
    
});
