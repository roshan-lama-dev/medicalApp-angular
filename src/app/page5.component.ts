//Page 4
import { Component } from '@angular/core';

@Component({
  template: `
    <div class="emergencyDisplay mt-5">
      <div class="text text-center">
        <h5>Display the Emergency Patient</h5>
        <p>Please click the display button to view the emergency patient</p>
      </div>

      <div class="col text-center">
        <button class="btn btn-info" onclick="displayEmergency()">
          Display Emergency Patient
        </button>
      </div>

      <table class="md table">
        <thead>
          <tr>
            <th scope="col">Patient Id</th>
            <th scope="col">Patient First Name</th>
            <th scope="col">Patient Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Insurance</th>
            <th scope="col">Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Next of Kin</th>
            <th scope="col">Emergency</th>
          </tr>
        </thead>
        <tbody id="emergencyField"></tbody>
      </table>
    </div>
    <button routerLink="/">Page 1</button>
  `,
})
export class Page5Component {}
