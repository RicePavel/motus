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
        url: '../motus_back/web/user/login',
        method: 'POST',
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
            handler: function() {
                var form = this.up('form'); // get the form panel
                if (form.isValid()) { // make sure the form contains valid data before submitting
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.msg);
                        },
                        failure: function(form, action) {
                            console.error(action.result.msg);
                            Ext.Msg.alert('Failed', action.result.msg);
                        }
                    });
                } else { // display error alert if the data is invalid
                    Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                }
            }
        }]
    }
    
});
