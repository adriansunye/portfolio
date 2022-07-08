import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function Contact() {
  return (
      <div class="mt-5">
        <section class="section-title text-center">
        <div class="section-body">
          <h1 class="mt-3 title">Thanks for taking the time to reach out. How can I help you today?</h1> 
          <div class="input-group mb-3 mt-5">
            <input type="text" class="form-control" placeholder="Contact Email" aria-label="Contact Email" aria-describedby="basic-addon2"/>
          </div>
          <div class="input-group">
            <textarea class="p-5 form-control" aria-label="With textarea"></textarea>
          </div>
          <button type="button" class="mt-3 btn btn-secondary">Send</button>
        </div> 
      </section>
      </div>   
  );
}

export default Contact;