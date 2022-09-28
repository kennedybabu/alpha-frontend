import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import PostsListPage from "./pages/PostsListPage";
import { BrowserRouter as Router, Route} from "react-router-dom"
import CreatePost from "./pages/CreatePost";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={PostsListPage}/>
        <Route path='/post/:id' component={PostPage} />
        <Route path='/createpost' component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
