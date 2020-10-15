import React from 'react';
import * as SQLite from 'expo-sqlite';

const db=SQLite.openDatabase('orders.db');

//method returns a Promise - in the calling side .then(...).then(...)....catch(...) can be used
export const init=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists orders(id integer not null primary key, pizza text not null, price real not null, restaurant text not null, first_name text not null, last_name text not null, email text not null, phonenumber text not null, address text not null);',
            //second parameters of execution:empty brackets - this parameter is not needed when creating table            
            [],
            //If the transaction succeeds, this is called
            ()=>{
                resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const addOrder=(pizza, price, restaurant, first_name, last_name, email, phonenumber, address)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('insert into orders(pizza, price, restaurant, first_name, last_name, email, phonenumber, address) values(?,?,?,?,?,?,?,?);',
            //And the values come here
            [pizza, price, restaurant, first_name, last_name, email, phonenumber, address],
            //If the transaction succeeds, this is called
            (_, result)=>{
                resolve(result);
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const fetchAllOrders=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from orders;',
            [],
            (tx, result)=>{
                resolve(result);
            },
            (tx,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};