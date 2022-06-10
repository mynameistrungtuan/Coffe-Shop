import News from './pages/News/news';
import Home from './pages/home/home';
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";


function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/news" exact element={<News />} />
        
        
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
