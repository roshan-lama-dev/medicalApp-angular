//Bad URL Page
import { Component } from '@angular/core';

@Component({
  template: `
    <p>A Bad URL is detected....</p>
    <button class="btn btn-primary" routerLink="/">Home Page</button>
  `,
})
export class BadURLComponent {}
