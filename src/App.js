
import './App.css';
import NavBar from './components/NavBar';
import PreNavBar from './components/PreNavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider';
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StartProduct from './components/StartProduct';
import HotAccessories from './components/HotAccessories';
import HotAccessoriesPage from './components/HotAccessoriesPage';
import VideoCard from './components/VideoCard';
import Video from './components/Video';
import PreFooter from './components/PreFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PreNavBar/>
      <NavBar/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="Star Products" />
      <StartProduct starProduct={data.starProduct} />
      <Heading text = "Hot Accessories" />
      <HotAccessories/>
      <Routes>
      <Route exact path='/audio' element={<HotAccessoriesPage musicCover={data.hotAccessoriesCover.music} music = {data.hotAccessories.music} />} />
      
      <Route exact path='/gear-and-devices' element={<HotAccessoriesPage smartCover={data.hotAccessoriesCover.smartDevice} smart = {data.hotAccessories.smartDevice} />} />

       
      <Route exact path='/lifestyle' element={<HotAccessoriesPage lifestyleCover={data.hotAccessoriesCover.lifeStyle} smart = {data.hotAccessories.lifeStyle} />} />

      <Route exact path='/powerbank' element={<HotAccessoriesPage pbCover={data.hotAccessoriesCover.mobileAccessories} pb = {data.hotAccessories.mobileAccessories} />} />
      </Routes>

      <Video videos={data.videos} />
      <PreFooter footer={data.footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
