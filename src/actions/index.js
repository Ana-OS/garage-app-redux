// TODO: add and export your own actions

export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';
export const SHOW_CAR = 'SHOW_CAR';

export async function fetchCars(garage){
    // console.log(garage)

    const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;

    const promise = fetch(url)
    .then(data => data.json())

    // console.log(promise)
    return {
        type: FETCH_CARS,
        payload: promise
    }
}

export function createCar(body, garage, callback){
    // console.log(body, garage)
    const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;

    const promise = fetch(url, {
        method: 'POST', 
        headers:  { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(body)
        }
    ).then(data => data.json())
    .then(callback)

    return {
        type: CREATE_CAR,
        payload: promise
    };

}


export function showCar(id){
    const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`
    const promise = fetch(url).then(data => data.json())

    // console.log(promise)

    return {
        type: SHOW_CAR,
        payload: promise
    };

}