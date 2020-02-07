/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('motus.view.task.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'task_list',
    title: 'Список задач',
    requires: ['motus.view.task.ListController'],
    controller: 'task_list',
    header: {
        items: [{
                xtype: 'button',
                text: 'Выйти',
                handler: 'logout',
                style: {
                    backgroundColor: 'red'
                }
        }]
    }
});

