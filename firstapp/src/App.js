
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Component from './Component';
import Buttons from './Buttons';
import Content from './Content';

function App() {
  const cardDetails=[
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"9min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"5min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time:"10min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider This content is a little bit longer.",
      time:"5min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time:"10min"
    },
    {
      img: "grey.jpg",
      description: "This content is a little bit longer.",
      time:"15min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"15min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"10min"
    },
    {
      img: "grey.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time:"10min"
    }

  ];
 
  return (
    <div className="App">
    <main role="main">
   <Component title="Album Example"/>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
      {
        cardDetails.map((data) => {
          return (<Content description={data.description} img={data.img} time={data.time}/>);
        })
      }
        </div>
      </div>
    </div>
  </main>

  <footer className="text-muted">
    <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>  </div>
  </footer>
    </div>
  );
}

export default App;
