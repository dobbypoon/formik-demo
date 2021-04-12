const initialState = {
    members: [],
    voteCounter: {one: 0, two: 0, three: 0}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'register/updateResult':
            const p = action.payload;
            const voteCounter = {...state.voteCounter};
            if (p.checked) {
                for (let c of p.checked) {
                    voteCounter[c]++;
                }
            }

            return {
                members: [...state.members, action.payload],
                voteCounter: voteCounter
            };
        default:
            return state;
    }
}