import React, { useEffect, useState } from "react";
import "./ApiStyles.css";

export default function ApiTest() {
  const [state, setState] = useState([
    {
      name: "",
      status: "",
      gender: "",
      species: "",
      id: 0,
      image: "",
    },
  ]);
  const [name, setName] = useState();

  let StateAux = {};

  const fechApi = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const responseJson = await response.json();
    setState(responseJson.results);
    // console.log("this is:", state);
  };

  useEffect(() => {
    fechApi();
  }, []);

  return (
    <>
      {/* <div>{state[0]?.name}</div>
      <div>{state[0]?.status}</div>
      <div>{state[0]?.gender}</div>
      <div>{state[0]?.species}</div> */}
      <br></br>
      <div>
        {state.map((key, index) => (
          <>
            {/* <h3 key={state[index].id}>
              {state[index].id}: {state[index].name}{" "}
            </h3>
            <img src={state[index].image} alt={state[index].name} /> */}
            <div className="d-flex justify-content-center">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="d-flex justify-content-end">
                    {state[index].gender}
                  </div>
                  <div className="card-body text-center">
                    <img
                      src={state[index].image}
                      alt={state[index].name}
                      className="rounded-circle img-fluid"
                      style={{ width: "150px;" }}
                    />
                    <h5 className="my-3"> {state[index].name}</h5>
                    <p className="text-muted mb-1">{state[index].species}</p>
                    <p className="text-muted mb-4">{state[index].status}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
