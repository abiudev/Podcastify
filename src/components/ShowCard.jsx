import { Card, Typography } from "@material-tailwind/react";
import { FaPlay, FaPlus, FaShareAlt } from "react-icons/fa";

export default function ShowCard({ shows, onPlay }) {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4">
      {shows.length > 0 ? (
        shows.map((show) => (
          <Card
            key={show.id}
            className="w-full max-w-[18rem] rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={
                show.image ||
                (show.images && show.images.length > 0
                  ? show.images[0].url
                  : "https://via.placeholder.com/150")
              }
              alt={show.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <Typography variant="h6" className="font-bold text-gray-800">
                {show.name}
              </Typography>
              <Typography className="mt-2 text-sm text-gray-600">
                {show.description.length > 100
                  ? `${show.description.substring(0, 100)}...`
                  : show.description}
              </Typography>
            </div>
            <div className="p-4 flex justify-around">
              <button
                onClick={() => onPlay(show)}
                className="text-green-400 hover:text-blue-700"
              >
                <FaPlay size={20} />
              </button>
              <button
                onClick={() => console.log("Add to playlist")}
                className="text-green-400 hover:text-blue-700"
              >
                <FaPlus size={20} />
              </button>
              <button
                onClick={() => console.log("Share")}
                className="text-blue-600 hover:text-blue-700"
              >
                <FaShareAlt size={20} />
              </button>
            </div>
          </Card>
        ))
      ) : (
        <Typography variant="h6" className="text-center">
          No podcasts available
        </Typography>
      )}
    </div>
  );
}
