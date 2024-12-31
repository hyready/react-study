import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
     
    </Row>
    <Row>
        <DashboardLayout></DashboardLayout>
    </Row>
  );
}

export default Dashboard;