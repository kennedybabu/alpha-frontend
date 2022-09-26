import Header from "./components/Header";
import PostsListPage from "./pages/PostsListPage";
import { BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={PostsListPage}/>
      </div>
    </Router>
  );
}

export default App;
