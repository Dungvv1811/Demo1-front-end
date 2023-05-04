import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [disable, setDisable] = useState(0);
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    // fetchProducts();
    return () => image && URL.revokeObjectURL(image);
  }, []);

  const changeHandler = (e) => {
    const image = e.target.files[0];
    if (image) {
      image.preview = URL.createObjectURL(image);
      setImage(e.target.files[0]);
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();
    setDisable(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    await axios
      .post(`http://localhost:8000/api/products`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            icon: "error",
            text: response.data.message,
          });
        }
      });

    // e.currentTarget.disabled = true;
    setDisable(false);
  };
  const handleClick = (e) => {
    e.currentTarget.disabled = true;
  };
  // const disBtn = (e) => {
  //   // if()
  //   e.currentTarget.disabled = true;
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Product</h4>
              <hr />
              <div className="form-wrapper">
                {Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger">
                        <ul className="mb-0">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <Form onSubmit={createProduct}>
                  <Row>
                    <Col>
                      <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="varchar"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                        {image && (
                          <img src={image.preview} alt="" width="80%" />
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="int"
                          // rows={3}
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    className="mt-2"
                    size="lg"
                    block="block"
                    // onClick={handleClick}
                    disabled={disable}
                    // disabled
                    type="submit"
                  >
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
