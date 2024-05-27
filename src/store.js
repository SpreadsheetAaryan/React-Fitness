import { createStore, action, thunk, computed } from "easy-peasy";
import api from './api/posts';
import apiW from './api/workouts';

export default createStore({

    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    postTitle: '',
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),



    workouts: [],
    setWorkouts: action((state, payload) => {
        state.workouts = payload;
    }),
    workoutTitle: '',
    setWorkoutTitle: action((state, payload) => {
        state.workoutTitle = payload;
    }),
    name: '',
    setName: action((state, payload) => {
        state.name = payload;
    }),
    cals: '',
    setCals: action((state, payload) => {
        state.cals = payload;
    }),
    minutes: '',
    setMinutes: action((state, payload) => {
        state.minutes = payload;
    }),
    editWorkoutTitle: '',
    setEditWorkoutTitle: action((state, payload) => {
        state.editWorkoutTitle = payload;
    }),
    editName: '',
    setEditName: action((state, payload) => {
        state.editName = payload;
    }),
    editCals: 0,
    setEditCals: action((state, payload) => {
        state.editCals = payload;
    }),
    editMins: 0,
    setEditMins: action((state, payload) => {
        state.editMins = payload;
    }),
    workoutSearchResults: [],
    setWorkoutSearchResults: action((state, payload) => {
        state.workoutSearchResults = payload;
    }),



    leadCals: [],
    setLeadCals: action((state, payload) => {
        state.leadCals = payload;
    }),
    leadMins: [],
    setLeadMins: action((state, payload) => {
        state.leadMins = payload;
    }),



    postCount: computed((state) => state.posts.length),
    workoutCount: computed((state) => state.workouts.length),
    getPostById: computed((state) => {
        return (id) => state.posts.find(post => (post.id).toString() === id);
    }),
    getWorkoutById: computed((state) => {
        return (id) => state.workouts.find(workout => (workout.id).toString() === id);
    }),
    getWorkoutByName: computed((state) => {
        return (name) => state.workouts.filter(workout => (workout.name).toString() === name);
    }),



    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            const response = await api.post('/posts', newPost);
            actions.setPosts([...posts, response.data]);
            actions.setPostTitle('');
            actions.setPostBody('');
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();
        try {
            await api.delete(`/posts/${id}`);
            actions.setPosts(posts.filter(post => post.id !== id));
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    editPost: thunk(async (actions, updatedPost, helpers) => {
        const { posts } = helpers.getState();
        const { id } = updatedPost;
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            actions.setPosts(posts.map(post => post.id === id ? {...response.data} : post))
            actions.setEditBody('');
            actions.setEditTitle('');
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }),



    saveWorkout: thunk(async (actions, newWorkout, helpers) => {
        const { workouts } = helpers.getState();
        try {
            const response = await apiW.post('/workouts', newWorkout);
            actions.setWorkouts([...workouts, response.data]);
            actions.setWorkoutTitle('');
            actions.setName('');
            actions.setCals(0);
            actions.setMinutes(0);
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deleteWorkout: thunk(async (actions, id, helpers) => {
        const { workouts } = helpers.getState();
        try {
            await apiW.delete(`/workouts/${id}`);
            actions.setWorkouts(workouts.filter(workout => workout.id !== id));
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    editWorkout: thunk(async (actions, updatedWorkout, helpers) => {
        const { workouts } = helpers.getState();
        const { id } = updatedWorkout;
        try {
            const response = await apiW.put(`/workouts/${id}`, updatedWorkout);
            actions.setWorkouts(workouts.map(workout => workout.id === id ? {...response.data} : workout))
            actions.setEditWorkoutBody('');
            actions.setEditWorkoutTitle('');
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    })
});