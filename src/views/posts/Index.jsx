import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../api";

const PostIndex = () => {
  const [posts, setPosts] = useState([]);

  const fetchDataPost = async () => {
    await Api.get("/api/posts").then((res) => {
      setPosts(res.data.data.data);
    });
  };

  useEffect(() => {
    fetchDataPost();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card rounded shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center">
                HALAMAN POST INDEX
                <Link
                  to="/posts/create"
                  className="btn btn-sm btn-success shadow-sm"
                >
                  Create New Post
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-hover table-striped">
                  <thead className="bg-success border-1">
                    <tr>
                      <th scope="col" className="text-white">
                        Image
                      </th>
                      <th scope="col" className="text-white">
                        Title
                      </th>
                      <th scope="col" className="text-white">
                        Content
                      </th>
                      <th scope="col" className="text-white">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length > 0 ? (
                      posts.map((post, index) => (
                        <tr key={post.id}>
                          <td>{post.image}</td>
                          <td>{post.title}</td>
                          <td>{post.content}</td>
                          <td>
                            <Link to={`/posts/edit/${post.id}`}></Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">
                          <div className="alert alert-danger" role="alert">
                            Tidak ada data
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostIndex;
