import { types } from "../../../src/auth"

describe('pruebas en "types.js"', () => {

    test('deberia de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})