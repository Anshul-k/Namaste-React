import React from "react";
import useUserDataFetch from "../hooks/useUserDataFetch";
import { Link } from "react-router-dom";
import { GIT_URL, GIT_URL_REPOS } from "../utils/constants";

const socials = [
  {
    content: <i className="fa fa-linkedin" aria-hidden="true"></i>,
    link: "https://www.linkedin.com/in/anshul-k29/",
  },
  {
    content: <i className="fa fa-envelope" aria-hidden="true"></i>,
    link: "mailto:anshul.kasana98@gmail.com",
  },
  {
    content: <i className="fa fa-github" aria-hidden="true"></i>,
    link: "https://github.com/Anshul-k",
  },
];

const User = () => {
  const userData = useUserDataFetch(GIT_URL);
  const userRepos = useUserDataFetch(GIT_URL_REPOS);

  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="flex flex-col md:w-1/2 justify-center items-center">
        <img
          className="rounded-full w-52"
          src={userData?.avatar_url}
          alt="AvatarURL"
        />
        <h2 className="font-bold text-orange-400 text-2xl mt-2">
          {userData?.name}
        </h2>
        <h2 className="text-gray-600 text-left">
          <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
          {userData?.location}
        </h2>
        <div className="flex gap-3">
          {socials.map((social, i) => {
            return (
              <Link
                key={i}
                to={social.link}
                target="blank"
                className="text-xl text-gray-600 hover:text-orange-400"
              >
                {social.content}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa fa-users text-gray-600" aria-hidden="true"></i>
          <Link
            to={userData?.followers_url}
            target="blank"
            className="text-gray-600"
          >
            <span className="font-bold mr-1 text-orange-400">
              {userData?.followers}
            </span>
            followers
          </Link>
          <span className="font-bold">.</span>
          <h2 className="text-gray-600">
            <span className="font-bold mr-1 text-orange-400">
              {userData?.following}
            </span>
            following
          </h2>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-2xl text-orange-400">Bio</h2>
          <h2 className="text-gray-600 font-semibold">{userData?.bio}</h2>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-orange-400 mb-2">
            Repositories
          </h2>
          <div className="flex flex-wrap gap-2 md:h-48 overflow-y-auto">
            {userRepos?.map((repo) => (
              <Link
                to={repo?.html_url}
                target="blank"
                key={repo?.id}
                className="px-2 py-2 bg-orange-400 text-white font-semibold text-xs rounded-md shadow hover:bg-orange-600 focus:outline-none focus:ring-2 active:bg-orange-800 transition duration-300 ease-in-out"
              >
                {repo?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
