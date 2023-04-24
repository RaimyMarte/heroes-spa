import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('pruebas en Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Raimy',
            id: '123'
        },
        logout: jest.fn(),
    }
    
    beforeEach(() => jest.clearAllMocks())


    test('debe de mostrar el nombre del usuario', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(contextValue.user.name)).toBeTruthy()
    })

    test('debe de llamar el logout y navigate con el argumento del /login y del replace cuando hace click en el logout', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );


        const logoutButton = screen.getByLabelText('logoutButton')
        fireEvent.click(logoutButton)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {replace: true})
    })
})