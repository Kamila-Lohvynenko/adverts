import { useParams } from "react-router-dom";

const CamperDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>CamperDetailsPage</div>;
};

export default CamperDetailsPage;
