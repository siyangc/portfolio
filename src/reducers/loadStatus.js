export const loadStatus = (state=true,action) => {
    switch(action.type){
        case 'TRANSITIONING':
            return false

        case 'FINISHED':
            return true
        default: 
            return state
    }
}