import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";

interface IProps {
  handleLike: () => void;
  handleDisLike: () => void;
  likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDisLike }: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);
  console.log(userProfile);
  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#f51997] hover:bg-gray-300"
            onClick={handleDisLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4 "
            onClick={handleLike}
          >
            <MdFavorite className="text-lg text-red md:text-2xl " />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
