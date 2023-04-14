import { authReducer, types } from "../../../src/auth"



describe('pruebas en authReducer', () => {

    const user = {
        name: 'raimy',
        id: '123'
    }

    test('debe de regresar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })

    })

    test('debe de llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer({ logged: false }, action)

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('debe de llamar el logout borrar el nombre del usuario y logged en false', () => {

        const state = {
            logged: true,
            user
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)

        expect(newState).toEqual({ logged: false })
    })
})