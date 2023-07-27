import { Component } from '@angular/core';
import { ButtonService } from './button.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dontPress';
  body = ['body']
  showLightMode: boolean = false;
  subscription!: Subscription

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.subscription = this.buttonService.buttonClicked.subscribe(() => {
      this.showLightMode = !this.showLightMode;
      this.body = this.showLightMode ? ['body-light-mode'] : ['body'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
