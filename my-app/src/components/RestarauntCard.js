import { CDN_URL } from "../utills/constants";

const RestarauntCard =(props)=>{
    const {resData}=props;
// const {
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRating

// }=resData?.info

    return (
        <div className="res-card">
             <img className="res-img" src={CDN_URL}
            cloudinaryImageId></img>
          <h4>{resData.data.name}</h4>
          <h5>{resData.data.cuisines.join(",")}</h5>
          <h5>{resData.data.avgRating}</h5>
          <h5>{resData.data.costForTwo} </h5>
          <h5>{resData.data.costForTwo} minutes</h5>
        </div>
    )
}

export default RestarauntCard;