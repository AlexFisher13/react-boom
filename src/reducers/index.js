const initialState = ['Fisher', 'John', 'July', 'Danila'];

export default function users(store = initialState, action) {
    switch (action.type) {
        case('ADD_USER'):
            return [...store, action.payload];
        case('DEL_USER'):
            return store.filter((el => el !== action.payload));
        default: return store;
    }
}