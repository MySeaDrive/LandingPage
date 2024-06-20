// page.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:min-h-screen md:w-1/2 overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 md:p-20">
        <h1 className="text-4xl font-bold mb-4">🪸 MySeaDrive</h1>

        <div className="my-12">
            <h2 className="text-xl font-semibold mb-2"> What is MySeaDrive? </h2>
            <div>
              <p>
                MySeaDrive is an online home for your personal diving media. </p> 
                <br/>
                <p>
                  A place to store, organize, edit and share diving media for your <em>entire diving lifetime</em>!
              </p>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-xl font-semibold mb-2"> Why might I need this? </h2>
            <div> 
              <p>
                If you've been diving for a while, you'll probably relate with the problems below.
              </p>
              <br/>
              <ul className="list-disc ml-6">
                <li className='mb-6'>
                  You have hundreds of <b>videos and photos scattered</b> across memory cards, hard-drives and laptops making them hard to find.
                </li>
                
                <li className='mb-6'>
                  Diving media usually gets <b>mixed up and grouped into vacation albums</b> unless you put in extra work to categorize them. 
                  <br/> Also, dive info (site, weights, depth) remains disconnected from your media!
                </li>

                <li className='mb-6'>
                  Which video was it where you saw the Manta? Was it at the 1:45s mark or 3:30s?
                  <br/> <b>Finding highlights becomes a challenge</b> involving checking multiple files multiple times.
                </li>

                <li className='mb-6'>
                  <b>Raw footage is generally not impressive</b> and looks bleached unless you edit and color correct it. And you'll need to use different tools to get all these done.
                </li>
              </ul>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-xl font-semibold mb-2"> So what does MySeaDrive exactly do? </h2>
            <div> 
              Think of MySeaDrive as Google Photos but made just for diving media.
              <ul className="list-disc ml-6 mt-6">
                <li className='mb-6'>
                  <b>Backup every single photo and video</b> you've taken without worrying about storage. Search and find them later in an instant.
                </li>
                <li className='mb-6'>
                  Effortlessly <b>organize your media</b> into dives. Go further: tag dive site names, tank levels, depth, fish IDs and notes too.
                </li>
                <li className='mb-6'>
                  Easily <b>favorite your most interesting media</b>. Add remarks down to the exact second. Build a highlights reel without breaking a sweat.
                </li>
                <li className='mb-6'>
                  All your media <b>automatically gets corrected for color and contrast</b> while you retain full control over originals. Made perfect for sharing with the world.
                </li>


              </ul>

            </div>
        </div>

        <div className="my-12">
            <h2 className="text-xl font-semibold mb-2"> Who is building this and why? </h2>
            <div> 
              <p>
                I'm Harsha, an outdoor enthusiast who fell love in love with the ocean on my first dive back in 2017. Got certified as AOWD 6 months later and have dived in 9 countries so far.
              </p>
              <br/>
                <p>I also happen to be a software engineer and a product manager in my day job. So I'm fully capable of seeing this vision through.</p>
              <br/>
              <p>
                MySeaDrive is a tool I <i>personally</i> need. And I think it will help a lot of people like me.
              </p>
              <br/>
              <p>
                Most importantly building MySeaDrive is a way of expressing my love for the ocean!
              </p>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-xl font-semibold mb-2"> Where can I try it and what'll it cost? </h2>
            <div>
              <p>
                I'm chalking up the roadmap to ship the first version by August. The whole tool will be <b>open-sourced</b>. That's the best approach in my opinion where there are no secrets. And you can host one all by yourself if you don't want to pay.
              </p>
              <br/>
              <p>
                While I'm not sure of the exact cost for the hosted version, I'll ensure it stays very affordable by making frugal choices about storage and server infrastructure.
              </p>
            </div>
        </div>

        <div className="my-12">
          <p className='text-center'>
            ❤️ for the 🌊
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
