//Page 2
import { Component, Input } from '@angular/core';
import { patientDetails } from './patientDetails';

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
        <button class="btn btn-info my-5" (click)="displayData()">
          Display Patient
        </button>
      </div>
      <div>
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
    </div>

    <button routerLink="/">Home</button>
  `,
})
export class Page2Component {
  // @Input() data
  // @Input() data: any[];
  patientDetails_Records: Array<patientDetails>;

  constructor() {
    this.patientDetails_Records = new Array<patientDetails>();
  }

  ngOnInit() {
    this.patientDetails_Records = new Array<patientDetails>();
  }

  displayData(): void {
    let displayTable = <HTMLTableElement>document.getElementById('tabletoshow');
    if (this.patientDetails_Records.length < 0) {
      // message?.innerHTML = "Please enter the patient deatils first";
    }
    displayTable.innerHTML = '';

    this.patientDetails_Records.map((item, index) => {
      displayTable.innerHTML += `
      <tr>
      <th scope="row">${item.patientId}</th>
      <td>${item.patientFirstName}</td>
      <td>${item.patientLastName}</td>
      <td>${item.patientDob}</td>
      <td>${item.gender}</td>
      <td>${item.primaryInsurance}</td>
      <td>${item.address}</td>
      <td>${item.patientContact}</td>
      <td>${item.patientNextofkin}</td>
      <td>${item.patientEmergency}</td>
    </tr>
      `;
    });
  }
}
