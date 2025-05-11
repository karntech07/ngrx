import { Component } from '@angular/core';
import { UserInterface } from '../constant';
import { allUsersStore } from '../store/selectors/users.selector';
import { Store } from '@ngrx/store';
import { deleteUserAction } from '../store/actions/users.action';

@Component({
  selector: 'app-delete-user',
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
   usersList: UserInterface[] = [];

   constructor(private _store: Store){}

    ngOnInit(): void {
       this._store.select(allUsersStore).subscribe((data: unknown) => {
         this.usersList = <UserInterface[]>data;
       })
     }

     deleteUser(user: UserInterface) {
      const payload = {
        name: user.name
      };
      this._store.dispatch(deleteUserAction({payload: payload}))
     }
}
