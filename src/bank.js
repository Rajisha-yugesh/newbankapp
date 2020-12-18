// import React from 'react'
import axios from 'axios'
var accountDetails 
// = {
//     1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000,history:[] },
//     1002: { name: "user2", acno: 1002, pin: 4388, password: "usertwo", balance: 4000,history:[] },
//     1003: { name: "user3", acno: 1003, pin: 4287, password: "userthree", balance: 2000,history:[] },
//     1004: { name: "user4", acno: 1004, pin: 1388, password: "userfour", balance: 1000,history:[] },
//     1005: { name: "user5", acno: 1005, pin: 1318, password: "userfive", balance: 1500,history:[] }


// }
let newdata=localStorage.getItem("accountDetails");
if(newdata){
    
    accountDetails=JSON.parse(newdata);//json to object -json.parse
}

class Bank {

   

    static getaccountDetails() {

       
        return accountDetails;
    }

    static saveData(){
        localStorage.setItem("accountDetails",JSON.stringify(accountDetails))//TO CONVER OBJECT TO STRING-JSON.STRINGIFY
    }

    static setCurrentUser(acno){
       
        localStorage.setItem("currentUser",acno)//key and value are string
    }

    // static getUser(){
    //     return localStorage.getItem("currentUser")
    // }

    static addUser(name,acno,password){
        accountDetails[acno]={name,acno,password,history:[],balance:0}
        Bank.saveData();
    }
    static getHistory(){
        return accountDetails[Bank.getUser()].history;
    }
    static getUser(){
        return axios.get("http://localhost:4000/users",{
            withCredentials:true

        })
        
    }
    static deleteUser(acno){
        return axios.get("http://localhost:4000/users",{
            acno
            

        },{withCredentials:true})
       
    }

    static login(acno,password){
        return axios.post("http://localhost:4000/users/login",{
            acno,
            password

        },{withCredentials:true})
    }

    static register(acno,password,name,cpassword){
        return axios.post("http://localhost:4000/users/register",{
            acno,password,name,cpassword

        })
    }

    static deposit(acno,dpamount){
        return axios.post("http://localhost:4000/users/deposit",{
            acno,dpamount

        },{withCredentials:true})
    }

    static withdraw(acno,wtamount){
        return axios.post("http://localhost:4000/users/withdraw",{
            acno,wtamount

        },{withCredentials:true})
    }

    static transaction(){
        return axios.get("http://localhost:4000/users/transaction",{
            withCredentials:true
        })
        
    }
    
  
}

export default Bank;