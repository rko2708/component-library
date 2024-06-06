import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import "./styles.css";
import { usersList } from "./constants";

const Splitwise = () => {
  const [addExpenseModalOpen, setAddExpenseModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<any>([]);

  const handleAddExpenseModal = () => {
    setAddExpenseModalOpen(!addExpenseModalOpen);
  };

  const onUserSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const email = e.target.value;
    if (selectedUsers.find((user: any) => user.value === email)) {
      const filteredUsers = selectedUsers.filter(
        (user: any) => user.value !== email,
      );
      setSelectedUsers(filteredUsers);
    } else {
      const userData = usersList.find((user: any) => user.value === email);
      setSelectedUsers([...selectedUsers, userData]);
    }
  };

  useEffect(() => {
    console.log(selectedUsers);
  }, [selectedUsers.length]);

  return (
    <div className="splitwise-container">
      <div className="splitwise-header">Splitwise</div>
      <Button text="Add an expense" onClick={handleAddExpenseModal} />
      {addExpenseModalOpen ? (
        <Modal title="Add an Expense" closeModal={handleAddExpenseModal}>
          <div>With you and: </div>
          <select multiple onChange={onUserSelectHandler}>
            {usersList.map((user) => (
              <option
                key={user.value}
                value={user.value}
                // onSelect={selectedUsers.find(
                //   (selectedUser: any) => user.value === selectedUser.value,
                // )}
              >
                {user.label}
              </option>
            ))}
          </select>
        </Modal>
      ) : null}
    </div>
  );
};

export default Splitwise;
