import Button from "./Button";
import "./SignUp.css";
import Image from "./Image";
import Pic1 from "./images/pic1.png";
import Pic2 from "./images/pic2.png";
const SignUp = () => {
  return (
    <div>
      <div className="column1">
        <div className="head1">DIVE</div>
        <Image name={Pic1}></Image>
        Candidate Search
        <Button className="button1" name="Login for Hiring Managers "></Button>
      </div>
      <div className="column2">
        <div className="head2">DASH</div>
        <Image name={Pic2}></Image>
        Diversity Metrics and Forecasts
        <Button className="button2" name="Login for BUs and HRAs "></Button>
      </div>
    </div>
  );
};

export default SignUp;
