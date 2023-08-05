import RestarauntCard from "./RestarauntCard";
import restList from "../utills/mockData";
import resObj from "../utills/mockData";

   

const Body=()=>{
    return (
        <div className="body">
         <div className="filter">
         <button className="filter-btn" onClick={()=>{
            //filter fun
            resObj=resObj.filter((res)=>res.data.avgRating>4)
            console.log(resObj)
         }}>Top Rated Restaurant</button>
         </div>
         <div className="res-conatiners">
            {resObj.map((restaraunt)=>(
                <RestarauntCard resData={restaraunt}/>
           ))}
        
         </div>
         </div>   
    )
    }
    export default Body;    