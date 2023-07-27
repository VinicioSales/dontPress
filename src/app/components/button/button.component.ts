import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  textoBotao: string = 'Press'
  botao = ['botao']
  change(): void {
    this.textoBotao = 'Press to restore order'
    this.botao = ['botao-change']
  } 
}
