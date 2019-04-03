import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private urlSoap: any = 'http://myWebServices/funciones.asmx?WSDL';
  private client: Client;
  constructor(private router: Router,
    private soap: NgxSoapService) {
    // Creo el soap cliente, para esto tengo que darle la ubicación del archivo WSDL
    this.soap.createClient(this.urlSoap).then(client => this.client = client);
  }

  ngOnInit() {
  }

  signIn(): void {
    const params = {
      'user': '',
      'pass': ''
    };
    // SignIn es la función o método a consultar
    (<any>this.client).SignIn(params)
    .subscribe(
      (res: ISoapMethodResponse) => {
        // Toda función soap retorna la respuesta, concatenando la function + result(SignInResult)
        if (res.result.SignInResult != null) {
          // En caso la petición sea exitosa
        } else {
          // En caso te devuelve nulo o vacio
        }
      },
      (err: any) => {
        // En caso devuelva error
    });
  }

}
