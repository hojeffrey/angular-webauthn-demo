import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.register();
    this.login();
  }

  register() {
    const challenge = new Uint8Array(32);
    crypto.getRandomValues(challenge);

    const options: PublicKeyCredentialCreationOptions = {
      challenge,
      rp: {
        name: 'Demo'
      },
      user: {
        id: new Uint8Array(32),
        name: 'user',
        displayName: 'User Display Name'
      },
      pubKeyCredParams: [{
        type: 'public-key',
        alg: -7
      }],
      timeout: 60000,
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
      },
      attestation: 'none'
    };

    navigator.credentials.create({ publicKey: options })
      .then((credential) => {
        console.log('Credential created!', credential);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  login() {
    const challenge = new Uint8Array(32);
    crypto.getRandomValues(challenge);

    const options: PublicKeyCredentialRequestOptions = {
      challenge,
      timeout: 60000,
      allowCredentials: [{
        type: 'public-key',
        id: new Uint8Array(32)
      }]
    };

    navigator.credentials.get({ publicKey: options })
      .then((assertion) => {
        console.log('Assertion!', assertion);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

}
