import { AbstractControl } from "@angular/forms";

 export function confirmpasswordValidator(controls:AbstractControl)
{
    const password=controls.get('password');
    const confPassword=controls.get('confPassword');
    // condition the error msg show if the value was changed prastin
    if(password.pristine || confPassword.pristine) {return null;}
    else
    {
        return password && confPassword && password.value !==confPassword.value
        ?{'misMath':true}:null;
    }
    
}