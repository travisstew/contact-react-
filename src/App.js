import './App.css'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';



function App() {

  const contacts = [
    {id:'1',
      name: 'travis',
      email: "stew@gmail.com"
  },
    {id:'2',
      name: 'avis',
      email: "stew@gmail.com"
  },
    {id:'3',
      name: 'tris',
      email: "stew@gmail.com"
  },
    {id:'4',
      name: 'is',
      email: "stew@gmail.com"
  },


  ]



  return (
    <div className='ui container'>
       <Header />
       <AddContact />
       <ContactList contacts={contacts} />

        
    </div>
  );
}

export default App;
