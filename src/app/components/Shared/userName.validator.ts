import { AbstractControl } from "@angular/forms";

// export function forbiddenNameValidator(control:AbstractControl)
// {
//     //test to control to his value
//     const forbidden= /admin/.test(control.value.toLowerCase());
//     //if condition return true return error msg  if return no return null  no error
//     //use ternal operator  will return key and value  and will use key
//     return forbidden? {'forbiddenName':{value:control.value}} :null;
// }

//first use the function in arr validator
//second show msg in html

//second and best way that send RE to validtor directory

export function forbiddenNameValidator(forbiddenNameArg:RegExp)
{
    
    return (control:AbstractControl)=>
    {
        const forbidden= forbiddenNameArg.test(control.value.toLowerCase());
        return forbidden? {'forbiddenName':{value:control.value}} :null;

    }
   
    
}