import React from "react";

export default function Hero() {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu behavior

    // Create a custom context menu with "Open in new tab" option
    const contextMenu = document.createElement("div");
    contextMenu.innerHTML = `
      <div style="position: absolute; top: ${e.clientY}px; left: ${e.clientX}px; background: white; color: black; padding: 8px; border: 1px solid #ccc; border-radius: 4px; z-index: 1000;">
        <div style="cursor: pointer;" onclick="window.open('https://www.dotnettricks.com/learn/aspnet/disable-right-click-on-web-page-and-images', '_blank')">Open courses in new tab</div>
      </div>
    `;

    // Attach the context menu to the document body
    document.body.appendChild(contextMenu);

    // Remove the context menu after a short delay
    setTimeout(() => {
      document.body.removeChild(contextMenu);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="w-full -z-10 bg-[#202020] overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative">
        <img className="w-full scale-110 ml-10 sm:scale-100 sm:ml-0" src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto:eco,w_2000/v1704732840/home-hero-covers/en/000/011/615/11615-original.jpg" alt="" onContextMenu={handleContextMenu} />
        <button className="absolute top-2/3 ml-3 sm:ml-0 text-white bg-[#f02c00] font-bold py-4 px-6 rounded-md">Join for Free</button>
      </div>
    </div>
  );
}
