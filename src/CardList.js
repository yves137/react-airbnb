import { Card } from "./Card"
import { data } from "./Data"
export function CardList(){

    

    return (
        <div className="px-7">
            <div className="mb-20">
                <h1 className="text-4xl font-bold mb-3">Online Experiences</h1>
                <p className="text-xl font-light">Join unique interactive activities led by  one-of-a-kind hosts—all without leaving home.</p>
            </div>

            <div className="flex gap-4 pb-7">
            {data.map(v=> <Card {...v}/>)}
            </div>
        </div>
    )
}