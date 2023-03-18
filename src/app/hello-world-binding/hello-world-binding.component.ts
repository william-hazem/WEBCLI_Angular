import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-binding',
  templateUrl: './hello-world-binding.component.html',
  styleUrls: ['./hello-world-binding.component.css']
})
export class HelloWorldBindingComponent {
  textId = 'textoVerde';
  fontColor = 'green';

  canClick = true;
  message = 'Messagem do alerta';
  
  sayMessage() {
    alert(this.message);
  }
}
