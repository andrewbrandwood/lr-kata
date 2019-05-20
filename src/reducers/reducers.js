const initialState = {
  hotels: []
};
export function addHotels(state = initialState, action){
  switch(action.type){
    case 'ADD_HOTELS':
      return {...state,
        hotels: [...state.hotels, action.hotels]
      };
    default:
      return state;
  }
}
