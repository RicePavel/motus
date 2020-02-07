/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('motus.Application', {
    extend: 'Ext.app.Application',

    name: 'motus',
    
    requires: [
        'motus.view.login.Login',
        'motus.view.login.LoginController',
        'motus.view.task.List'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        
        var logged = localStorage.getItem('MotusLogged');
        if (logged) {
           Ext.create({
               xtype: 'task_list',
               renderTo: Ext.getBody()
           }); 
        } else {
           Ext.create({
               xtype: 'login'
           }); 
        }
    
        /*
        Ext.create({
            xtype: 'task_list',
            renderTo: Ext.getBody()
        });
        */
        
        /*
        Ext.create({
            xtype: 'login'
        });
        */
        
        /*
        var logged = localStorage.getItem('MotusLogged');
        Ext.create({
            xtype: logged ? 'app-main' : 'login'
        });
        */
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
