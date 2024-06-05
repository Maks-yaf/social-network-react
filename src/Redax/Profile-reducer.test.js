import profileReducer, {addPostActionCreator, deletePost} from "./Profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, How are you", like: 15},
        {id: 2, message: "Hi, it's my first post", like: 10},
        {id: 3, message: "412412", like: 123},
        {id: 4, message: "ohohohooh", like: 1123},
    ],
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("maximilian")

    //2. action
    let newState = profileReducer (state, action)

    //3. expectation
    expect(newState.posts.length).toBe(5);
});
test('message text of NewPost should be "maximilian" ', () => {
    //1. test data
    let action = addPostActionCreator("maximilian")

    //2. action
    let newState = profileReducer (state, action)

    //3. expectation
    expect(newState.posts[4].message).toBe("maximilian");
});
test('after deleting length of message should decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

