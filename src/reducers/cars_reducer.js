import { FETCH_CARS, SHOW_CAR } from '../actions';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CARS:
            return action.payload;
        case SHOW_CAR:
            return [ action.payload ];
        default:
            return state
    }
}
