export const pageIndex = (state=0,action) => {
    switch(action.type){
        case 'PAGEUP':
            return state-1

        case 'PAGEDOWN':
            return state+1
        default: 
            return state
    }
}