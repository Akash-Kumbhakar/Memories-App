// in reducer state cannot be null it has to be an initial value
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}