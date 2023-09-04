import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route } from 'react-router-dom';
import { Routes } from "react-router";
import { DataProvider } from './context/DataContext';

function App() {
 
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <DataProvider>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post" element={<NewPost/>} />
        <Route path="/edit/:id" element={<EditPost/>} />
        <Route exact path="/post/:id" element={<PostPage/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
