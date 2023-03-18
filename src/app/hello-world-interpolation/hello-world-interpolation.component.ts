import { Component } from '@angular/core';

let message : string = "William"

@Component({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  styleUrls: ['./hello-world-interpolation.component.css']
})
export class VarMessageComponent {
  message = message;
}
