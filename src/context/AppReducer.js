export default (state, action) => {
    switch(action.type) {
        case 'DELETE_ANNOUNCE':
            return {
                ...state,
                announces: state.announces.filter(announce => announce.id !== action.payload)
            }
        case 'ADD_ANNOUNCE':
            return {
                ...state,
                announces: [action.payload, ...state.announces]
            }
        case 'EDIT_ANNOUNCE':
            return {
                ...state,
                announces: state.announces.map(announce => {if(announce.id === action.payload.id){
                    announce.title = action.payload.title
                    announce.text = action.payload.text
                    announce.date = action.payload.date
                }
                return announce
                })
            }
        case 'SEARCH':
            return {
                ...state,
                searchString: action.payload,
                searchResult: state.announces.filter(announce => {
                    return announce.title.toLowerCase().includes(action.payload.toLowerCase())
                })
            }
        case 'CLEAR_SEARCH':
            return {
                ...state,
                searchString: '',
                searchResult: []
            }

        default:
            return state;
    }
}
