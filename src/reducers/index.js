//начальное состояние нашего store
const initialState = ['Fisher', 'John', 'July'];

//первый редьюсер который пока не обрабатывает экшены
export default function users(state = initialState, action) {
    return state;
}