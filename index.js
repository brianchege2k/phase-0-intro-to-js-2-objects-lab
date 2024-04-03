// Write your solution in this file!
const employee = {
    employeeName: 'Brian Chege',
    streetAddress: '90210 Valley Lane'

};

function updateEmployeeWithKeyAndValue(obj, name, value){

    const newObj = {...obj};

    newObj[name] = value;



    return newObj;
    

}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'emoloyeeName', 'Sam' )

console.log(newEmployee)


function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj [key] = value;
    return obj;
}

let anotherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,'employeeName','Sam')


console.log(anotherEmployee)


function deleteFromEmployeeByKey (obj,key){

    const newObj = delete {...obj[key]}

    return newObj;

}


const anotherNewEmployee = deleteFromEmployeeByKey (employee,'streetAddress')

console.log(anotherEmployee)



function destructivelyDeleteFromEmployeeByKey(obj,key){

    const newObj = delete obj[key]

    return newObj;


}


const lastEmployee = destructivelyDeleteFromEmployeeByKey (employee,'employeeName')

console.log(employee)