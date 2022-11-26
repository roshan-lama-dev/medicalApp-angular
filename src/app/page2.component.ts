//Page 2
import { Component } from '@angular/core';

@Component({
  template: `
    <!-- Display Field -->

    <div class="displayPatient my-5">
      <h5 class="text-center mt-2">
        Display the Patient List from the database
      </h5>
      <p class="text-center">
        Please click the display button to display the list of the patient
      </p>
      <div class="col text-center">
        <button class="btn btn-info my-5" onclick="displayData()">
          Display Patient
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
        <tbody id="tabletoshow"></tbody>
      </table>
    </div>

    <button routerLink="/">Page 1</button>
  `,
})
export class Page2Component {
  
}
