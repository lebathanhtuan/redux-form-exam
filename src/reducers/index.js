import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const myReducer = combineReducers({
    form: formReducer
});

export default myReducer;