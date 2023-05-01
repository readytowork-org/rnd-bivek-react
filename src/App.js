import "./App.css";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import { Profiledata } from "./module/profile";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import { BookData } from "./module/booklist";
import { people } from "./module/person";
import RenderPersonList from "./components/PersonList";
import SubscribeComp from "./components/Subscribe";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import UseContextExOne from "./components/GlobalStateComponent/UseContextExOne";
import UseContextExTwo from "./components/GlobalStateComponent/UseContextExTwo";
import React from "react";

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <userContext.Provider value={{username:"Bivek Karki"}}>
      <UseContextExOne/>
      </userContext.Provider> */}
      <userContext.Provider value={{username:"Bivek Karki"}}>
        <UseContextExTwo />
      </userContext.Provider>

      {/* <Timer/> */}
      {/* <Counter /> */}
      {/* <SubscribeComp/> */}
      {/* <Avatar user={Profiledata.user} />
      <Greet name={Profiledata.user.name} />
      <Welcome /> */}
      {/* <BookList bookData= {BookData} /> */}
      {/* <RenderPersonList data={people} /> */}
    </div>
  );
}

export default App;
