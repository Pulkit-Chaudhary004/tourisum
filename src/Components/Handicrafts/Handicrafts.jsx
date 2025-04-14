import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
 
 function Handicrafts() {
  return (
    // <Carousel className="rounded-xl">
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //       alt="image 1"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //       alt="image 2"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    //       <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //       alt="image 3"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
    //       <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that quality
    //           of air that emanation from old trees, that so wonderfully changes
    //           and renews a weary spirit.
    //         </Typography>
    //         <div className="flex gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>

<>

<div className="mt-[10vh] p-6 text-5xl text-gray-800 font-light font-serif flex justify-center items-center ">Discover About our culture and Heritage</div>

    <div class="relative my-[4vh]">
      <div class="sticky top-0 flex h-screen w-[90vw] mx-[5vw] flex items-center justify-center">
        <img src="https://images.pexels.com/photos/19907306/pexels-photo-19907306/free-photo-of-traditional-scarfs-at-bazaar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-full w-full object-cover" />
        <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-md">
          <h2 class="text-2xl font-bold text-white">Pashmina Shawls</h2>
          <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
      <div class="sticky top-0 flex h-screen w-[90vw] mx-[5vw]  items-center justify-center">
        <img src="https://images.pexels.com/photos/10899353/pexels-photo-10899353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-full w-full object-cover" />
    
        <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-md">
          <h2 class="text-2xl font-bold ">Wooden Carvings</h2>
          <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
    
      <div class="sticky top-0 flex h-screen w-[90vw] mx-[5vw]  items-center justify-center">
        <img src="https://images.pexels.com/photos/18624121/pexels-photo-18624121/free-photo-of-carpets-by-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-full w-full object-cover" />
    
        <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 class="text-2xl font-bold text-white">Kashmiri Carpets</h2>
          <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
    
      <div class="sticky top-0 flex h-screen w-[90vw] mx-[5vw] items-center justify-center">
        <img src="https://www.kashmirbox.com/cdn/shop/articles/paper_mache.jpeg?v=1560579782" class="h-full w-full object-cover" />
    
        <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 class="text-2xl font-bold text-white">Papier Machie</h2>
          <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>

      <div class="sticky top-0 flex h-screen w-[90vw] mx-[5vw] items-center justify-center">
        <img src="https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-full w-full object-cover" />
    
        <div class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h2 class="text-2xl font-bold text-white">House Boats</h2>
          <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
    </div>


    



    </>
  );

  
}
export default Handicrafts;