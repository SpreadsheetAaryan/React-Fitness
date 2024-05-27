import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Community from './Community';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import WorkoutPage from './WorkoutPage';
import EditPost from './EditPost';
import EditWorkout from './EditWorkout';
import { useStoreActions } from 'easy-peasy';
import api from './api/posts';
import apiW from './api/workouts';
import { useEffect } from 'react';

function App() {

    const setPosts = useStoreActions((actions) => actions.setPosts);
    const setWorkouts = useStoreActions((actions) => actions.setWorkouts);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch(err) {
                if (err.response) {
                    //Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
    
        fetchPosts();
      }, [])

      useEffect(() => {
        const fetchWorkouts= async () => {
            try {
                const response = await apiW.get('/workouts');
                setWorkouts(response.data);
            } catch(err) {
                if (err.response) {
                    //Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
    
        fetchWorkouts();
      }, [])
    
    return (
        <Routes>

            <Route path="/" element={<Layout/>}>
                
                <Route index element={<Home/>}/>

                <Route path=":name" element={<WorkoutPage/>}/>

                <Route path="leaderboard" element={<LeaderBoard/>}/>

                <Route path="edit">
                    <Route path=":id" element={<EditPost/>}/>
                </Route>

                <Route path="change">
                    <Route path=":id" element={<EditWorkout/>}/>
                </Route>

                <Route path="community">

                    <Route index element={<Community/>}/>
                    <Route path=":id" element={<PostPage/>}/>

                </Route>

                <Route path="about" element={<About />} />
                <Route path="*" element={<Missing />} />

            </Route>

        </Routes>
    );
}

export default App;