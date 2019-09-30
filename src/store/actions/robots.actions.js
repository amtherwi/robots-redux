import * as Type from '../constats'

export const setSearchField = (text) => ({
    type: Type.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispach) =>{
    dispach({
        type: Type.REQUEST_ROBOTS_PENDING
    });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robots => dispach({
        type: Type.REQUEST_ROBOTS_SUCCESS,
        payload: robots
    }))
    .catch(error => dispach({
        type: Type.REQUEST_ROBOTS_FAILED,
        payload: error
    }))
}

