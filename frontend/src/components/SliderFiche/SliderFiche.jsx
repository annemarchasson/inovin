// import { useState } from "react";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import UserContext from "../../contexts/UserContext";
import "./SliderFiche.scss";

// import FormVin1 from "./FormVin1";
// import FormVin2 from "./FormVin2";
import FormVin3 from "./FormVin3";
import FormVin4 from "./FormVin4";

function SliderFiche() {
  // useContext
  // const [user] = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database
  // console.log(`slider fiche account_id: ${user} `);

  // navigate
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate("/AtelierCreation");
  };

  // const handleFormData1 = (formData1) => {
  //   console.log(formData1);
  // };

  return (
    <div className="carouselWrapper">
      {/* <FormVin1 />
      <FormVin2 /> */}
      <FormVin3 />
      <FormVin4 />

      <button type="button">Envoyer tous les formulaires</button>
      <button type="button" onClick={handleClickNext}>
        next page
      </button>
    </div>
  );
}

export default SliderFiche;
