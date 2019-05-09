import React from 'react';

const Videos = () => {
  return (
    <div className="row">
      <div className="text-center col-md-12">
        <h2 className="main-page-heading">Videos</h2>
      </div>
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-warmup-plugin" src="https://www.youtube.com/embed/1j7USsviHpg" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-guru-show" src="https://www.youtube.com/embed/m9bzh4pNMGI" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="postman-api-testing" src="https://www.youtube.com/embed/zytuGPzWtdU" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" title="create-support-ticket" src="https://www.youtube.com/embed/XHHCRN-F8pk" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="tdd-serverless-mocha" src="https://www.youtube.com/embed/briMjHzq_9U" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-intro-part-one" src="https://www.youtube.com/embed/bMRVO4t4xGI" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      <div className="col-md-4 col-lg-4">
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-intro-part-two-dynamic-variables"src="https://www.youtube.com/embed/i-UTHLo6wjQ" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-part-three-external-files"  src="https://www.youtube.com/embed/BYMetFQ69OE" frameborder="0" allowFullScreen="true"></iframe>
        <iframe className="vids embed-responsive" width="200" height="200" title="serverless-part-four-serverless-commands" src="https://www.youtube.com/embed/py-N1nd1MG8" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </div>
  );
}

export default Videos;
