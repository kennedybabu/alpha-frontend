import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import PostsListPage from "./pages/PostsListPage";
import { BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={PostsListPage}/>
        <Route path='/post/:id' component={PostPage} />
      </div>
    </Router>
  );
}

export default App;
