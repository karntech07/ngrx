import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { adultUsers, allUsersStore } from '../store/selectors/users.selector';
import { UserInterface } from '../constant';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  usersList: UserInterface[] = [];
  constructor(private _store: Store){}

  ngOnInit(): void {
    this._store.select(allUsersStore).subscribe((data: unknown) => {
      this.usersList = <UserInterface[]>data;
    })
  }

  getAdultAge() {
    this._store.select(adultUsers).subscribe((data) => {
      this.usersList = data;
    })
  }


}
