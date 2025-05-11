import { createFeature, createFeatureSelector, createSelector, createSelectorFactory } from "@ngrx/store";
import { UserInterface } from "../../constant";

export const allUsersStore = createFeatureSelector<UserInterface[]>('userStore');

export const adultUsers = createSelector(
    allUsersStore, (state: UserInterface[]) => {
        return state.filter(user => user.age > 19);
    }
)