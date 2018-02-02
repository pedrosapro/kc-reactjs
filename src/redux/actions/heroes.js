import * as types from '../types/heroes'
import * as webservices from '../../webservices/webservices'

// Función que devuelve el action que actualiza el reducer
function updateHeroesList(value) { 
    return {
        type: types.HEROES_UPDATE_LIST,
        value: value
    }
}

function updateHeroe(value) {
    return {
        type: types.HEROE_UPDATE,
        value: value
    }
}


// Descargamos del webservice el listado
export function fetchHeroesList() {

    return (dispatch, getState) => {

        webservices.fetchCharacters(webservices.constants.FETCH_CHARACTERS_URL)
        .then(response => {
            if (response.data) {
                characters = response.data.results
                //console.log(characters)
                dispatch(updateHeroesList(characters))
            }
            else {

            }
        }).catch(error => {
            console.log("Error: " + error)

        });

    }

}

export function updateHeroeOnSelect (heroe) {

    return (dispatch, getState) => {
        dispatch(updateHeroe(heroe))
    }

}
