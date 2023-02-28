import { types } from "../auth/types/types";

describe('types tests', () => {
    test('must return the types', () => {
        expect( types ).toEqual(
            {
                login: '[Auth] Login',
                logout: '[Auth] Logout'
            }
        )
    });
});