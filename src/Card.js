
export function Card(props){
    let badgeText=""
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
       
    <div className="card justify-between">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img src={`${props.coverImg}`} alt=""  className="card--image" />

            <div className="card--stats">
                <img src="star.png" alt="" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
           
                <p className="card--title my-2 max-w-[10rem]">{props.title}</p>
                <p className="card--price self">
                    <span className="bold">From ${props.price}</span> / person
                </p>
        </div>

    
    )
}