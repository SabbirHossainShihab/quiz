export const QuizDetails = (props) => {

  return (
    <div id='QuizDetails' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>QUIZ DETAILS</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-4'>
                {' '}

                <h3><b>{d.title}</b></h3>
                <p>{d.text}</p>
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
  // return (
  //   <div id="about">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-xs-12 col-md-6">
  //           {" "}
  //           <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
  //         </div>
  //         <div className="col-xs-12 col-md-6">
  //           <div className="about-text">
  //             <h2>About Us</h2>
  //             <p>{props.data ? props.data.paragraph : "loading..."}</p>
  //             <h3>Why Choose Us?</h3>
  //             <div className="list-style">
  //               <div className="col-lg-6 col-sm-6 col-xs-12">
  //                 <ul>
  //                   {props.data
  //                     ? props.data.Why.map((d, i) => (
  //                       <li key={`${d}-${i}`}>{d}</li>
  //                     ))
  //                     : "loading"}
  //                 </ul>
  //               </div>
  //               <div className="col-lg-6 col-sm-6 col-xs-12">
  //                 <ul>
  //                   {props.data
  //                     ? props.data.Why2.map((d, i) => (
  //                       <li key={`${d}-${i}`}> {d}</li>
  //                     ))
  //                     : "loading"}
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
