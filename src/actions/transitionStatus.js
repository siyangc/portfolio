export const transitionEnd = () => {
    return {
        type: 'FINISHED'
    }
}

export const transitionRun = () => {
    return {
        type: 'TRANSITIONING'
    }
}