import {ValidationErrors, AbstractControl} from '@angular/forms';


export class ValidatorUsername{
    static cannotContainSpace (control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainSpace: true};
        return null;
    }

    static unique (control: AbstractControl): Promise < ValidationErrors | null > {
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                if(control.value === 'polinema')
                resolve({unique: true});
                else resolve(null);
            }, 2000);
        })
    }
}