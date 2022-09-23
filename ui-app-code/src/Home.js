import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className='mt-5 rounded p-5 shadow-lg bg-white '>
      <Row>
        <Col>
        <p>
        Due to change in eye power, extra pair of unused eye wear, eye wear out of fashion, our spectacles are discarded or are kept in some corner of our home. This same eyewear which is unusable for us could be an immediate need for others. There are so many people across the world who suffer from poor vision as they cannot afford buying Spectacles.
        </p>

        <p>
        There are Charitable Trusts/NGOs who distribute donated eyewear to the needy for free. To begin with we can have such donations done in Microsoft Offices via collection boxes and eventually across several corporate organizations. These collected spectacles are then handed over to the Charitable Trusts/NGOs. Charitable Trusts/NGOs then passes on these spectacles after a free eye examination to the needy.
        </p>
        <p>
        At times even if entire spectacles cannot be re-used due to mismatch in eye power, the needy can use just the frame. It will certainly help them significantly to reduce the cost.
        </p>
        <p>
        By donating the unused eyewear, we can make enormous difference in someone’s life. Give them Clarity they need by providing Better Vision.
        </p>
        <p>
        This should also help the environment as not all the spectacles get properly recycled.
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
