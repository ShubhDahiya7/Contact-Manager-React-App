import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
// import ContactCard from "./components/ContactCard";

function App() {

    // array of js
    const contacts = [
        {
            id: "1",
            name: "shubh",
            email: "shubh12@gmail.com",
        },
        {
            id: "2",
            name: "sinny",
            email: "sinny122@gmail.com",

        }
    ]
  return (
      <>
        <div className="ui container">
          <Header/>
          <AddContact/>
          <ContactList contacts={contacts}/>
          {/*<ContactCard/>*/}
        </div>
      </>
  );
}

export default App;
