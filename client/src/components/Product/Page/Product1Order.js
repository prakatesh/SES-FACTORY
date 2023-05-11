import React, { useState } from "react";
import Navb from "../../Navbar/navbar";
import style from "../../../assets/Styles/Product/Productorder.module.css";
import img from "../../../assets/Images/Products/Starch.jpg";
import Footer from "../../Footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InputLabel, MenuItem, Select, TextField} from "@mui/material";;
function Product1Order() {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [Quantity, setquantity] = useState("");
    const [Purpose, setpurpose] = useState("");
    const [comment, setcomment] = useState("");

    async function submit(e) {
        e.preventDefault();
        console.log(name, email, number, Quantity, Purpose, comment);

        const data = {
            name: name,
            email: email,
            number: number,
            Quantity: Quantity,
            Purpose: Purpose,
            comment: comment,
        };

        await fetch("https://ses-uvx3.onrender.com/user/product/starch", {
            body: JSON.stringify(data),
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data === "done") {
                    alert(
                        "The request is send to Admin successfully.Admin will contact as soon as possible"
                    );
                    navigate("/");
                }
            })

            .catch((e) => console.log(e));
    }

    return (
        <div>
            <Navb />
            <div className={style.orderbody}>
                <Container className={style.card}>
                    <Row>
                        <Col md={6}>
                            <img src={img} alt="k" />
                        </Col>
                        <Col style={{ paddingLeft: "7%", paddingTop: "1%" }} md={6}>
                            <h3>Starch</h3>
                            <p style={{ fontSize: "3vh" }}>
                                Price:
                                <span style={{ fontWeight: "bolder" }}>
                                    30.00-40.00/Kilogram
                                </span>
                            </p>
                            <b>Only order request in TON</b>
                            <div className={style.form}>
                                <h6 style={{ marginLeft: "17vh", marginTop: "2%" }}>
                                    Type: <span>Starch</span>
                                </h6>
                                <hr />
                                <h6 style={{ marginLeft: "15vh" }}>
                                    Application: <span>Food, Gruel</span>
                                </h6>
                                <hr />
                                <form >
                                    <TextField
                                    style={{marginBottom:'1vh',width:"70%"}}
                                        id="outlined-basic"
                                        onChange={(e) => setname(e.target.value)}
                                        value={name}
                                        label="Name"
                                        variant="outlined"
                                    /><br/>
                                    <TextField
                                    style={{marginBottom:'1vh',width:"70%"}}
                                        id="outlined-basic"
                                        onChange={(e) => setemail(e.target.value)}
                                        value={email}
                                        label="Email"
                                        variant="outlined"
                                    /><br/>
                                    <TextField
                                    style={{marginBottom:'1vh',width:"70%"}}
                                        id="outlined-basic"
                                        onChange={(e) => setnumber(e.target.value)}
                                        value={number}
                                        label="PhoneNo"
                                        variant="outlined"
                                    /><br/>
                                    <TextField 
                                    style={{marginBottom:'1vh',width:"70%"}}
                                        id="outlined-basic"
                                        onChange={(e) => setquantity(e.target.value)}
                                        value={Quantity}
                                        label="Quantity"
                                        variant="outlined"
                                    /><br/>
                                    <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
                                        <Select style={{marginBottom:'1vh',width:"70%"}}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Purpose}
                                            label="Purpose"
                                            onChange={(e) => setpurpose(e.target.value)}
                                        >
                                            <MenuItem value={"Reselling"}>Reselling</MenuItem>
                                            <MenuItem value={"RawMaterial"}>RawMaterial</MenuItem>
                                        </Select>

                                    
                                    <br />
                                    
                                    <label>Requirement Detail</label>
                                    <br />
                                    <textarea
                                        onChange={(e) => setcomment(e.target.value)}
                                        type="textarea"
                                    />
                                    <br />
                                    <button onClick={submit}>Send Enquiry</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Product1Order;
