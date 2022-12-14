import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavsAction } from "../redux/actions";

// import { FaTrash } from "react-icons/fa";

export default function Favs() {
  const jobs = useSelector((state) => state.favjob.content);
  const dispatch = useDispatch();
  const areLoading = useSelector((state) => state.jobs.isLoading);

  return (
    <Container fluid>
      <Row>
        <h1> Favorites</h1>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {areLoading && (
              <Spinner
                animation="border"
                variant="info"
                className="ml-2, mt-5"
              />
            )}
            {jobs.map((job, i) => (
              <Row key={i} className="my-4 align-items-center">
                <Col xs={1}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(removeFromFavsAction(i));
                    }}
                  >
                    Remove
                  </Button>
                </Col>
                <Col>
                  <h3>{job.title}</h3>
                  <Row>
                    <Col>Category: {job.category}</Col>
                    <Col>
                      <Link to={`/${job.company_name}`}>
                        Company Name: {job.company_name}
                      </Link>
                    </Col>
                    <Col>
                      <a href={job.url}>Link</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
