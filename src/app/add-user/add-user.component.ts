import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUserAction } from '../store/actions/users.action';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  addUserForm: FormGroup;

  constructor(private _store: Store){}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    const payload = {
      name: this.addUserForm.get('name')?.value,
      age: this.addUserForm.get('age')?.value,
    };

    this._store.dispatch(addUserAction({payload: payload}))
  }
}
