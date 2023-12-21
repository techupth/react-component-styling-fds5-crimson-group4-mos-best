// Start coding here
import frown from "./icon/frown.png";
import warning from "./icon/alert-triangle.png";
import info from "./icon/alert-circle.png";
import success from "./icon/check-circle.png";

function Alert({ type }) {
  if (type == "error") {
    return (
      <div className={`alert ${type}`}>
        <img src={frown} />
        <p>This is error alert box</p>
      </div>
    );
  } else if (type == "warning") {
    return (
      <div className={`alert ${type}`}>
        <img src={warning} />
        <p>This is warning alert box</p>
      </div>
    );
  } else if (type == "info") {
    return (
      <div className={`alert ${type}`}>
        <img src={info} />
        <p>This is info alert box</p>
      </div>
    );
  } else if (type == "success") {
    return (
      <div className={`alert ${type}`}>
        <img src={success} />
        <p>This is success alert box</p>
      </div>
    );
  } else {
    return;
  }
}
export default Alert;
