import "./Button.css";
import "./SignUp.css";
import Image from "./Image";
import Pic1 from "./images/pic1.png";
import Pic2 from "./images/pic2.png";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  // const navigate = useNavigate();

  // function handleClick(event) {

  //   navigate('/Test');
  // }
  return (
    <div>
      <div className="column1">
        <div className="head1">DIVE</div>
        <Image name={Pic1}></Image>
        Candidate Search
        {/* <Button className="button1" name="Login for Hiring Managers"></Button> */}
        <Link className="button1" to="/Test">Login for Hiring Managers</Link>
      </div>
      <div className="column2">
        <div className="head2">DASH</div>
        <Image name={Pic2}></Image>
        Diversity Metrics and Forecasts
        {/* <Button className="button2" name="Login for BUs and HRAs "></Button> */}
        <Link className="button2" to="/Test">Login for BUs and HRAs </Link>
      </div>
    </div>
  );
};

export default SignUp;
