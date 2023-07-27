import { Component } from '@angular/core';
import { ButtonService } from '../../button.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  textoBotao: string = 'Press'
  botao = ['botao']

  constructor(private buttonService: ButtonService) {}

  change(): void {
    this.textoBotao = 'Press to restore order'
    this.botao = ['botao-change']
    this.buttonService.buttonClicked.next();
  } 
}
