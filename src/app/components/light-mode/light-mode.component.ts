import { Component } from '@angular/core';
import { ButtonService } from '../../button.service'

@Component({
  selector: 'app-light-mode',
  templateUrl: './light-mode.component.html',
  styleUrls: ['./light-mode.component.css']
})
export class LightModeComponent {
  texto = ['texto']

  constructor(private buttonService: ButtonService) {}

  change(): void {
    this.buttonService.buttonClicked.next()
  }
}
