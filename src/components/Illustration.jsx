import classes from "../styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img
        src={
          "https://res.cloudinary.com/abidazad/image/upload/v1641320896/pexels-min-an-1131458_h4xeil.jpg"
        }
        alt="Signup"
      />
    </div>
  );
}
