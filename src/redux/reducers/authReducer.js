const authReducer = (state = {username: null}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, username:action.payload};
        case 'LOGOUT':
            return {...state, username:null};
        default:
            return state;
    }
};
export default authReducer;