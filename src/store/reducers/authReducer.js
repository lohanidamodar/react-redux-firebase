const initState = {
    error: null
}

const authReducer = (state = initState,action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {...state, error: null};
            break;
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {...state, error: 'Login failed'};
            break;
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default authReducer;