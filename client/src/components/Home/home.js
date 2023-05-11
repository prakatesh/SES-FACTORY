import React, { useEffect, useState } from "react";
import Con1 from "./con1";
import Con2 from "../Home/homecard";
// import style from "../../assets/Styles/Home/con3.module.css";
import Con3 from "../Home/Con3";
import Con4 from "../Home/Con4";
import Footer from "../Footer/footer";
import Navb from "../Navbar/navbar";
import SyncLoader from "react-spinners/SyncLoader";
export default function Home() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30);
  }, []);
  return (
    <div>
      {Loading ? (
        <SyncLoader
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            paddingTop: "40vh",
          }}
          color={"rgb(118, 15, 215)"}
          loading={Loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="row">
          <div className="col-md-12 main-content">
            <Navb />
            <Con1 />
            <div style={{padding:"3rem"}} >
              <Con2 md={12} /> 
            </div>
            
            <h1 style={{ fontWeight: "bolder" }} className="text-center">
              Glimpse of Our Company
            </h1>
            <Con3 />
            <h1 className="text-center">
              <br />
              <b>Latest Products</b>
            </h1>
            <Con4 />

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
