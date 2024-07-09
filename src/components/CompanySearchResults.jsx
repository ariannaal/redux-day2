import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    if (params.company) {
      getJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company]);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">{`Jobs at ${params.company}`}</h1>
          {jobs.length > 0 ? (
            jobs.map(jobData => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <Alert variant="info">No jobs in the favourites list. Make sure to add some to see them.</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
