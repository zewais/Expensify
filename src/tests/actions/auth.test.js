import {login, logout} from "../../actions/auth"

test("Should setup a login object", () => {
    const uid = "1234"
    const action = login(uid)
    expect(action).toEqual({
        type: "LOGIN",
        uid
    })
})

test("Should setup a logout object", () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})