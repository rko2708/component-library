import "./styles.css";

type TButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = (props: TButtonProps) => {
  const { text = "Submit", onClick = () => {} } = props;
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
