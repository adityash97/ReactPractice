// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SearchCard from "./components/SearchCard";
import {useState,useEffect} from 'react'

const {localStorage} = window

function App() {
  // debugger
  const [searchterm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );
  useEffect(()=>{
    localStorage.setItem("search", searchterm);
  },[searchterm])
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleChange = (e) =>{
    setSearchTerm((old) => old = e.target.value);
    handleSearch(searchterm);
  }
  const [finalList, setFinalList] = useState(list);

  useEffect(()=>{
     setFinalList(list.filter((data) =>  data["title"].includes(searchterm)))
  },[])
  const handleSearch = (searchterm) =>
    setFinalList(list.filter((data) =>{
      return data["title"].includes(searchterm);
    }
      
    ))

  return (
    <Container>
      <SearchCard handleChange={handleChange} value={searchterm} />
      <Row>
        {finalList.map(function ListData(data) {
          return (
            <Col key={data.objectID}>
              <Card>
                <Card.Body>
                  <p>{data.title}</p>
                  <p>{data.url}</p>
                  <p>{data.author}</p>
                  <p>{data.num_comments}</p>
                  <p>{data.points}</p>
                  <p>{data.objectID}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
