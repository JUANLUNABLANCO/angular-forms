import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('soy un control');

  constructor() { }

  ngOnInit(): void {
    // this.getNameValue();
    // obtener los valores del campo de forma reactiva
    this.nameField.valueChanges
    .subscribe(realValue =>{
      console.log('Real time value: ', realValue);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

}
