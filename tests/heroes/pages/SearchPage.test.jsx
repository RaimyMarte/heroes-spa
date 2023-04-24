import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('pruebas en SearchPage', () => {
    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('debe de mostrarse a Batman y el ionput con el con valor del queryString', () => {
        const searchText = 'batman'
        render(
            <MemoryRouter initialEntries={[`/search?q=${searchText}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe(searchText)

        const img = screen.getByRole('img')
        expect(img.src).toContain('/heroes/dc-batman.jpg')

        const primaryAlert = screen.getByLabelText('primaryAlert')
        expect(primaryAlert.style.display).toBe('none')

        const dangerAlert = screen.getByLabelText('dangerAlert')
        expect(dangerAlert.style.display).toBe('none')
    })

    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        const searchText = 'batman123'
        render(
            <MemoryRouter initialEntries={[`/search?q=${searchText}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const dangerAlert = screen.getByLabelText('dangerAlert')

         expect(dangerAlert.style.display).toBe('')

    })

    test('debe de llamar el navigate a la pantalla nueva', () => {
        const searchText = 'superman'
        render(
            <MemoryRouter initialEntries={[`/search?q=${searchText}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.click(input)

    })
})