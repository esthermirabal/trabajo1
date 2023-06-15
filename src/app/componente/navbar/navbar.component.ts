import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string;
  imagen: string;
  textEvent: string;
  constructor(){
    this.titulo = "INCUYO";
    this.imagen = "https://i.pinimg.com/474x/ac/64/48/ac6448aa1da2c42e4d13f9c73d909ba2.jpg";
    this.textEvent = "User";
  }

  cambiarTexto(){
    this.textEvent = "Login";
  }

}


