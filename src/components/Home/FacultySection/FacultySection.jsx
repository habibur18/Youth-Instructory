import React from "react";

export default function FacultySection() {
  const faculties = [
    { id: 1, name: "Diego Giaccone", cover: "https://i.ibb.co/nBYmnmn/1.webp", profile: "https://i.ibb.co/RB20yPj/11.webp", faculty: "Teacher", lives: ["Buenos Aires", "Argentina"], followers: 14205 },
    { id: 2, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 3, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 4, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 5, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 6, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 7, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 8, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 9, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 10, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 11, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
    { id: 12, name: "RubenAnimator", cover: "https://i.ibb.co/wJKg9wv/cover.webp", profile: "https://i.ibb.co/8KGS2xv/profile.webp", faculty: "Teacher", lives: ["Madrid", "Spain"], followers: 1355 },
  ];
  return (
    <div>
      <div className="max-w-[1500px] mx-auto my-36">
        <div className="space-y-2 mb-10">
          <h3 className="text-3xl font-bold">The community for creative people</h3>
          <p className="text-[#848484] text-lg">The largest online community of creatives. A network of millions of professionals with whom you can share knowledge.</p>
        </div>

        {/* main faculty section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          {faculties.map(({ id, name, cover, profile, faculty, lives, followers }) => (
            <div key={id} className="max-w-[250px] shadow-xl">
              <div>
                <img className="w-full hover:filter hover:brightness-90 duration-300 cursor-pointer rounded-lg" src={cover} alt="" />
              </div>
              <div className="px-5 py-3">
                <div className="-mt-14 group relative overflow-hidden">
                  <img className="rounded-full cursor-pointer max-w-[100px] overflow-hidden duration-100 border-[#f02c00] hover:border-2" src={profile} alt={name} border="0" />
                  <p className="absolute top-[34%] left-1 bg-[#00b2bd] text-[#fff] px-px w-16 text-center font-medium rounded-sm">{faculty}</p>
                  <div className="mt-3">
                    <h3 className="text-xl font-semibold cursor-pointer group-hover:text-red-500">{name}</h3>
                    <p className="text-[#848484] mb-7">{lives.join(", ")}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm text-[#848484]">{followers} followers</p>
                  <button className="text-[#fff] bg-[#717171] px-3 py-1">
                    <i className="cursor pointer fa-solid fa-plus"></i> Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* main faculty section end */}
      </div>
    </div>
  );
}
