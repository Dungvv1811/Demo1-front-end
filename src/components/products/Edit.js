import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [validationError, setValidationError] = useState({});

  const fetchProducts = async () => {
    await axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then(({ data }) => {
        console.log(data);
        // chỗ này sao em ko set luôn data vào
        const { name, price, image } = data.product;
        setName(name);
        setPrice(price);
        setImage(image);
        // console.log(setImage(image));
        //em check xem form upload img nó nhận vào dạng dữ liệu gì
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      });
  };

  useEffect(() => {
    fetchProducts();
    console.log("image2", image);
    image && URL.revokeObjectURL(image);
  }, []);

  const changeHandler = (e) => {
    const image = e.target.files[0];
    if (image) {
      image.preview = URL.createObjectURL(image);
      setImage(e.target.files[0]);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name", name);
    formData.append("price", price);
    if (image !== null) {
      formData.append("image", image);
    }
    // console.log("ccccc", formData.append("image", image));

    await axios
      .post(`http://localhost:8000/api/products/${id}`, formData)
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
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Edit Product</h4>
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
                <Form onSubmit={updateProduct}>
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
                        {image && <img src={image.preview} width="80%" />}
                        {image && (
                          <img
                            src={`http://localhost:8000/storage/product/image/${image}`}
                            alt=""
                            width="80%"
                          />
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
                    type="submit"
                  >
                    Update
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
