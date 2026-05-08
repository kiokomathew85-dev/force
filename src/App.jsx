import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from './blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={blogData.title} />
      <About about={blogData.about} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
