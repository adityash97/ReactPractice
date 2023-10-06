
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function SearchCard (props){
  return (<>
    <Row>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Here"
          onChange={props.handleChange}
          value={props.value}
        />
      </InputGroup>
    </Row>
  </>)
}
