// import React from 'react';
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function List(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    // Where we're fetching data from
    return (
      fetch("http://localhost:8000/products")
        // We get the API response and receive data in JSON format
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <Link
            className="btn btn-primary mb-2 float-end"
            to={"/product/create"}
          >
            Create Product
          </Link> */}
        </div>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!!products.length &&
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.name}</td>
                        <td>
                          <img
                            width="50px"
                            src={`https://th.bing.com/th/id/OIP.06zW4_JU42jhM3JOsZ7AGQHaJA?w=173&h=211&c=7&r=0&o=5&pid=1.7`}
                          />
                        </td>
                        <td>{row.price}</td>
                        <td>
                          <Link
                            to={`/product/edit/${row.id}`}
                            className="btn btn-success me-2"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="danger"
                            // onClick={() => deleteProduct(row.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
