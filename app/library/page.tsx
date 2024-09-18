import React from "react";
import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import PlayListCard from "@/components/PlayListCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

const page = () => {
  return (
    <div className="mt-9">
      <Category />
      <div className="mt-12"></div>
      {/* TODO Carousel */}
      <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playList={getRandomElementFromArray(dummyPlaylistArray)}
        />
      </section>
      <div className="mt-12"></div>
    </div>
  );
};

export default page;
