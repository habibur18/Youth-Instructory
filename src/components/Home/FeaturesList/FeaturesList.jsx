import React from "react";

export default function FeaturesList() {
  const featuresLists = [
    { id: 1, logo: "fa-regular fa-face-smile", name: "Learn at your own pace", description: "Enjoy learning from home without a set schedule and with an easy-to-follow method. You set your own pace." },
    { id: 2, logo: "fa-solid fa-desktop", name: "Get front-row seats", description: "Videos of the highest quality, so you don't miss a single detail. With unlimited access, you can watch them as many times as you need to perfect your technique." },
    { id: 3, logo: "fa-regular fa-thumbs-up", name: "Learn from the best professionals", description: "Learn valuable methods and techniques explained by top experts in the creative sector" },
    { id: 4, logo: "fa-solid fa-users-gear", name: "Share knowledge and ideas", description: "Ask questions, request feedback, or offer solutions. Share your learning experience with other students in the community who are as passionate about creativity as you are." },
    { id: 5, logo: "fa-solid fa-book-bookmark", name: "Meet expert teachers", description: "Each expert teaches what they do best, with clear guidelines, true passion, and professional insight in every lesson." },
    { id: 6, logo: "fa-solid fa-earth-asia", name: "Connect with a global creative community", description: "The community is home to millions of people from around the world who are curious and passionate about exploring and expressing their creativity." },
    { id: 7, logo: "fa-solid fa-certificate", name: "Earn a certificate with every course", plus: "PLUS", description: "If you're a Plus member, get a custom certificate signed by your teacher for every course. Share it on your portfolio, social media, or wherever you like." },
    { id: 8, logo: "fa-solid fa-user-check", name: "Watch professionally produced courses", description: "Domestika curates its teacher roster and produces every course in-house to ensure a high-quality online learning experience" },
  ];
  return (
    <main>
      <div className="max-w-[1500px] mx-auto my-14">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">What to expect from a Domestika course</h3>
        </div>
        {/* main fetures list container start */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 px-5 xl:px-0">
          {featuresLists.map(({ id, logo, name, description, plus }) => (
            <div key={id} className="flex gap-5">
              <div>
                <i className={`text-[#b0b0b0] text-5xl ${logo}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {name} {plus && <span className="px-2 text-white font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-md">{plus}</span>}
                </h3>

                <p className="text-lg text-[#505050]">{description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* main fetures list container end */}
      </div>
    </main>
  );
}
