import authReducer from "../../reducers/auth"

test("Should set user id after login", () => {
    const uid = {
        uid: "12345678"
    }
    const state = authReducer({}, {type: "LOGIN", uid})
    expect(state).toEqual({
        uid
    })

})

test("Should clear user id after logout", () => {
    const state = authReducer({uid: "1234"}, {type: "LOGOUT"})
    expect(state).toEqual({})
})