import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup ,ValidationErrors,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required,this.validateUsername])

  });
   

  constructor() {

  }


  ngOnInit(): void {
    
  }

  validateUsername(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().startsWith('a')) {
      return { invalid: true };
    } else {
      return null;
    }
  }

  // validateUsernameAsync(control: AbstractControl): Promise<ValidationErrors | null> {
  //   return new Promise((resolve) => {
  //     if (control.value.toString().startsWith('k')) {
  //       resolve({ invalid: true });
  //     } else {
  //       resolve(null);
  //     }
  //   });
  // }
}
