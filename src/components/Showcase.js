import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function Showcase() {
  let navigate = useNavigate();
  let {id} = useParams();
  return (
    <main class="container mt-5">
    <section class="section-title text-center">
        <h1>This is showcase {id}</h1>
        <button 
          onClick={() => 
            {navigate("/contact")
          }} 
        type="button"  class="btn btn-outline-info">Info</button>
      </section>
      </main> 
  );
}

export default Showcase;