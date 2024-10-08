/* eslint-disable react/prop-types */
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {

  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-md'>
      <img src={image} alt="Course's Images" />
      <div className="mt-2 text-sx text-Teal">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser className="text-Teal" />
          </div>
          <div className="text-sm font-bold">
            {participants}
          </div>
        </div>
        <div className = "flex items-center gap-2">
          <div className = "bg-Solitude p-1 rounded-full">
            < AiOutlineStar className = "text-yellow" />
          </div>
          <div className = " text-sm font-bold">
            {rating}
          </div>
        </div>
        <div className="text-sm font-bold">${price}</div>
      </div>
    </div>
  )
}

export default Course