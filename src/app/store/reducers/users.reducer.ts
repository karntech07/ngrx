import { createReducer, on } from "@ngrx/store";
import { UserInterface } from "../../constant";
import { addUserAction, deleteUserAction } from "../actions/users.action";

const initialState: UserInterface[] = [
    {name: 'Karan', age: 23}
];

export const userReducer = createReducer(
    initialState,
    on(addUserAction, (state, action) => {
        return [...state, action.payload];
    }),
    on(deleteUserAction, (state, action) => {
        console.log(state, action);
        const index = state.findIndex(user => user.name === action.payload.name);
        const tempState = [...state];
        tempState.splice(index, 1);
        return [...tempState];
    })
)
