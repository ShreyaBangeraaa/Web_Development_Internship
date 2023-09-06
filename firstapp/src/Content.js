import Buttons from './Buttons';
import './App.css';

function Content(props){ 
// const isNineMin = props.time === "9min";
// const isFifteen = props.time === "15min";
// const imgSrc = isNineMin ? "green.jpg" : (isFifteen ? "lavender.jpg" : props.img);


// const but1=isNineMin ? "viewback" : (isFifteen ? "editback" :"");
// const but2=isFifteen ? "viewback" : (isNineMin ? "editback" : "");

// const back_color=isNineMin ? "nine_min_back":(isFifteen ? "five_min_back":"defualt_color")

// let viewButtonStyle = {};
// let editButtonStyle = {};

// if (isNineMin) {
//   viewButtonStyle = { backgroundColor: 'skyblue' };
//   editButtonStyle = { backgroundColor: 'rosepink' };
// }
//  else if (isFifteen) {
//   viewButtonStyle = { backgroundColor: 'lavender' };
//   editButtonStyle = { backgroundColor: 'yellow'};
// }


// let cardBackgroundStyle = {};

//   if (isNineMin) {
//     cardBackgroundStyle = { backgroundColor: 'lightgreen' };
//   } 
//   else if (isFifteen) {
//     cardBackgroundStyle = { backgroundColor: 'lightblue' };
//   }

//     return(
//       <div className="col-lg-4 col-md-6">
//             <div className={`card mb-4 shadow-sm ${back_color}`}>
//             <div >
//               {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
//               {/* <img src={props.img}></img> */}
//               <div style={{ position: 'relative' }}>
//                     <img src={imgSrc} alt="Image" style={{ width: '100%', height: 'auto' }}/>
//                     <p
//                         style={{
//                         position: 'absolute',
//                         top: '45%',
//                         left: '40%',
//                         color:"white",
//                         }}
//                     >Thumbnail</p>
//                 </div>
//                 </div>
//               {/* <img className="card-img-top" src={imgSrc} alt="Card" /> */}
//               <div className="card-body">
//                 <p className="card-text">{props.description}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="btn-group">
//                   <Buttons title="View"/>
//                   <Buttons title="Edit"  /> 
//                   </div>
//                   <small className="text-muted">{props.time}</small>
//                 </div>
//               </div>
//             </div>
//           </div>
         
//     );

// }
const isNineMin = props.time === "9min";
const isTwentyNine = props.time === "15min";
const radiusClass = isNineMin ? "nine-min-radius" : (isTwentyNine ? "twenty-nine-min-radius" : "default-radius");
const imgSrc = isNineMin ? "lavender.jpg" : (isTwentyNine ? "lavender.jpg" : props.img);
const colorClass = isNineMin ? "nine-min-color" : (isTwentyNine ? "twenty-nine-min-color" : "default-color");

return (
    <div className="col-lg-4 col-md-4 col-sm-6 ">
        <div className={`card mb-4 shadow-sm ${colorClass}`}>
            <div className={`image-container ${radiusClass}`}>
                <img src={imgSrc} alt="Image" style={{ width: '100%', height: 'auto' }} />
                <p className="thumbnail-text">Thumbnail</p>
            </div>
            <div className={`card-body ${colorClass}`}>
                <p className="card-text">{props.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <Buttons title="View" />
                    <Buttons title="Edit" />
                    <small className="text-muted">{props.time}</small>
                </div>
            </div>
        </div>
    </div>
);
}

export default Content;