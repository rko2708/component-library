import "./styles.css";

type TModalProps = {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = (props: TModalProps) => {
  const { title, children, closeModal } = props;
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>{title}</div>
          <div onClick={closeModal}>X</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
