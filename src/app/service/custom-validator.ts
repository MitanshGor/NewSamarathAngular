import { FormControl } from '@angular/forms';
export class CustomValidator {

}


export function requiredFileType( type: [String,String,String] ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.includes(extension.toLowerCase())) {
         if (file.size > 200000) {
          console.error('File is too large. Over 200KB');
          return {
            requiredFileType: true
        }
      }
      return null;
      }

      return null;
    }
  return null;

  }
}

