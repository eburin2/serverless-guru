import React from 'react';

function Videos() {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" title="react-firebase" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
          <iframe className="vids embed-responsive" width="200" height="200" title="serverless-guru-show" src="https://www.youtube.com/embed/m9bzh4pNMGI" frameborder="0" allowfullscreen></iframe>
          <iframe className="vids embed-responsive" width="200" height="200" title="postman-api-testing" src="https://www.youtube.com/embed/zytuGPzWtdU" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" src="https://www.youtube.com/embed/T_uyqNUnc3o" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Videos;
