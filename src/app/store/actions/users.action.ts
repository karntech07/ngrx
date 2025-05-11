import { createAction, props } from "@ngrx/store";
import { UserInterface } from "../../constant";

export const addUserAction = createAction(
    '[Add user] action',
    props<{payload: UserInterface}>()
);

export const deleteUserAction = createAction(
    '[Delete user] action',
    props<{payload: {name: string}}>()
);