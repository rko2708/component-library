import "./styles.css";

type TButtonProps = {
  text: string;
  onClick?: () => void;
  styles?: Object;
};

const Button = (props: TButtonProps) => {
  const { text = "Submit", onClick = () => {}, styles = {} } = props;
  return (
    <button className="button" onClick={onClick} style={styles}>
      {text}
    </button>
  );
};

export default Button;
