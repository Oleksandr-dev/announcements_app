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
                searchResult: state.announces.filter(announce => {
                    announce.title.includes(action.payload)



                    /*let splitedTitle = announce.title.split(' '),
                        splitedSearch = action.payload.split(' ')
                    if(true === action.payload.id){
                    announce.title = action.payload.title
                    announce.text = action.payload.text
                    announce.date = action.payload.date
                }
                    return announce*/
                })
            }

        default:
            return state;
    }
}