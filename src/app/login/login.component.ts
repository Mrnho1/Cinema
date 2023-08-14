import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  nome = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]);
  assunto = new FormControl('');
  menssagem = new FormControl('',[Validators.required,Validators.minLength(6)]);

  getErrorMessage(){
    if(this.nome.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if(this.email.hasError('email')) {
      return 'Este campo é obrigatório';
    }

    if(this.email.hasError('required')) {
      return 'Digite um email válido';
    }

    if(this.menssagem.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if(this.menssagem.hasError('minlength')) {
      return 'Mínimo de 6 caracteres é obrigatório';
    }

    return '';

  }
}
