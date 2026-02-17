import { Container, Row, Col, Card } from "react-bootstrap";
import AnimatedText from "./AnimatedText";

export default function HotelOverView() {
  return (
    <section className="hotel-overview-section">
      <Container fluid className="px-2 px-sm-3 px-md-4 px-lg-5">
        <Card className="hotel-overview-card shadow-lg border-0">
          <Card.Body className="hotel-overview-body">
            <Row className="hotel-overview-row g-4">
              {/* LEFT */}
              <Col xs={12} md={6}>
                <h1 className="fw-bold display-6 display-md-5">
                  <AnimatedText text="Welcome to Golden Fork" delay={200} />
                </h1>

                <p className="lead mt-3">
                  <AnimatedText
                    text="Premium catering and authentic cuisine crafted for unforgettable experiences."
                    delay={500}
                  />
                </p>
              </Col>

              {/* DIVIDER */}
              <Col
                xs={12}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="divider d-md-none" />
                <div className="divider-vertical d-none d-md-block" />
              </Col>

              {/* RIGHT */}
              <Col xs={12} md={5}>
                <h2 className="fw-bold">
                  <AnimatedText text="About Us" delay={300} />
                </h2>

                <p className="mt-3">
                  <AnimatedText
                    text="Kerala Royal Caterers is the best catering company in Dublin, Ireland, delivering authentic Indian cuisine for weddings, corporates, and home events."
                    delay={700}
                  />
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
