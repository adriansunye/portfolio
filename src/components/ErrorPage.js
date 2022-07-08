import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function ErrorPage() {
  return (
    <div class="alert alert-danger p-5" role="alert">
        ERROR! PAGE NOT FOUND
    </div> 
  );
}

export default ErrorPage;