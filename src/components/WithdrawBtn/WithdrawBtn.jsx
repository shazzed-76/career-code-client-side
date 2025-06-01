import React, { useState } from "react";
import { alertMessage } from "../../Utills/alertMessage";

const WithdrawBtn = ({ id }) => {
  const handleWithdraw = () => {
    fetch(`http://localhost:3000/application/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alertMessage("Your application withdraw successfully.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button onClick={handleWithdraw} className="btn btn-xs capitalize">
      withdraw
    </button>
  );
};

export default WithdrawBtn;
