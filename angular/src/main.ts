import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { RoomComponent } from './app/components/room/room.component';
import { appStyles } from './app/app.styles';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: appStyles
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'room/:id', component: RoomComponent }
    ])
  ]
});