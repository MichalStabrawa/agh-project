const XLSX =require('xlsx');
const express =require("express");
var fs = require('fs');

const workbook =XLSX.readFile('./kowalski.xls');

const sheet_name_list = workbook.SheetNames;
let test = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

test = test.map(item => ({
    
    task: item['Zadanie'],
    time: item['Czas [h]'],
    date: item['Data']
}));



const testuje = test

console.log(test);


module.exports=testuje;












