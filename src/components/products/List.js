import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default ListProduct;
function ListProduct(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
      setProducts(data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (isConfirm) {
      return;
    }
    // console.log("AAAAAAA");

    await axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.massage,
        });
        fetchProducts();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          icon: "error",
          text: data.massage,
        });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link
            className="btn btn-primary mb-2 float-end"
            to={"/product/create"}
          >
            Create Product
          </Link>
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
                            src={`http://localhost:8000/storage/product/image/${row.image}`}
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
                            onClick={() => deleteProduct(row.id)}
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
