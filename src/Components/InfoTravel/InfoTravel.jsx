import React from "react";

function InfoTravel(){
    
    return(
        <>
        <hr class="border-t-2 border-gray-300 mx-[10vw] mt-[12vh] " />
     <div class="flex items-center justify-start mx-[22vw] mx-[10vw] text-5xl mt-[6vh] font-bold text-sky-900 playfair-display">
       Travel Information
     </div>
     
     <div class="flex mt-[6vh] mx-[12rem] gap-12 items-start">
       {/* Image on the left */}
       <div class="w-[30%]">
         <img src="https://images.pexels.com/photos/6487368/pexels-photo-6487368.jpeg"
              class="w-full h-auto max-h-[20rem] object-cover border rounded-2xl shadow-md shadow-gray-400" />
       </div>
     
       {/* Text on the right  */}
       <div class="w-[60%]">
         <h2 class="text-4xl font-bold text-sky-900 playfair-display mb-4">Best Time to Visit Kashmir</h2>
         <p class="text-gray-700 text-lg font-[Poppins] leading-relaxed">
           The best time to visit India for holidays depends on the type of experience you seek.
           The tourism season in India varies across regions due to its diverse climate. The peak
           tourism season in India starts from September to June. For wildlife enthusiasts, winter
           is ideal as national parks are open, and wildlife sightings are abundant. Hill stations
           are most enjoyable during summer to escape the scorching heat of the plains. For trekking
           and hiking adventures, winter, monsoon, autumn, and spring offer pleasant weather. Plan
           your trip according to your preferences, and you'll discover India's incredible beauty and
           cultural richness, making it an unforgettable holiday destination. September to April can
           be considered an ideal time to explore India for tourism holidays.
         </p>
       </div>
     </div>
     
     <hr class="border-t-1 border-gray-300 mx-[10vw] mt-[12vh] " />
     
     
     
     
     <div class="flex mt-[6vh] mx-[12rem] gap-12 items-start">
       {/* Image on the left */}
       <div class="w-[30%]">
         <img src="https://images.pexels.com/photos/15670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="w-full h-auto max-h-[20rem] object-cover border rounded-2xl shadow-md shadow-gray-400" />
       </div>
     
       {/* Text on the right  */}
       <div class="w-[60%]">
         <h2 class="text-4xl font-bold text-sky-900 playfair-display mb-4">How to get Around</h2>
         <p class="text-gray-700 text-lg font-[Poppins] leading-relaxed">
           Traveling to Kashmir is a seamless experience, thanks to its well-developed transportation network. The rail network, with an extensive network of trains, offers a scenic and comfortable journey to various destinations.
     
     Kashmir is well-connected by domestic and international airports, offering direct flights from major countries like the UK, USA, Australia, Canada, Dubai, Singapore, and others.Buses and cab services are readily available, offering options for intercity and intra-city travel.
     
     For shorter distances, traveller buses and taxi's are a popular mode of transport. Additionally,transportation options cater to various budgets, making it accessible to all kinds of travelers. Whether you wish to explore the historical sites of Kashmir  or the scenic landscapes of Ladakh getting around  is easy and efficient.
         </p>
       </div>
     </div>



     
     
    </>
    );


}


export default InfoTravel;