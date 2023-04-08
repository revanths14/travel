import React ,{useEffect} from 'react'
import './main.css'
import Aos from 'aos'
import 'aos/dist/aos.css' 
//  import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck } from 'react-icons/hi'

// let me import the images so we don't have this error an the browser.
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import img10 from '../../Assets/img(10).jpg'












// let as past the array named data
 const data =[
  {
    id:1,
    imgSrc:img,
    destTitle:'Maldives',
    location:'southwest of Sri Lanka',
    grade:'CULTURAL RELAX',
    fees:'RS:40,000',
    description:"The Maldives, a tropical haven of immaculate beaches, are an archipelago of 1,192 coral islands grouped into natural atolls, out of which only a few are inhabited. Time stands still in the Maldives as you lie on the white sand beaches, hearing the crystal clear waves crash against the seashore, swim with the manta rays and reef sharks and feast on a wide array of fishes with the locals.",
  },
 {
    id:2,
    imgSrc:img2,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'RS:70,000',
    description:"Stretching for 2300 kilometres off the east coast of Australia, the Great Barrier Reef is one of nature's greatest marvels. It is officially the biggest structure made by living organisms and can be seen from even outer space!!",
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Bora Bora',
    location:'French Polynesia',
    grade:'CULTURAL RELAX',
    fees:'RS:98,000',
    description:'Welcome to the fantasy of a dreamy island with utmost perfectional beauty"- This is how the pictures of Bora Bora entice you for a vacation. A part of French Polynesia, this magical island has some of the most beautiful sights to behold- a tropical island surrounded by the amazing blue lagoon and coral reefs, accompanied by small islets (Motus) scattered around Bora Bora',
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'New Zealand',
    location:'Oceania',
    grade:'CULTURAL RELAX',
    fees:'RS:98,000',
    description:'New Zealand lies in the Pacific Ocean, to the southwest. New Zealand promises beautiful landscapes and serene, equally beautiful coastlines that you can drive along, listening to the sound of the surf. The country is also known for its adventure sports activities as well as its museums, art galleries and other heritage attractions.',
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'The Grand Canyon',
    location:'Arizona',
    grade:'CULTURAL RELAX',
    fees:"RS:99,000",
    description:'Yellowstones Grand Canyon is one of the most iconic sites in the region, providing several stunning vistas as you go along. This almost 40 km long canyon is a large and the most famous canyon in Yellowstone. It is hugely popular among visitors due to its scenic views of the Lower and Upper falls, as well as the fascinating pink and yellow coloured rocks. There are several viewpoints and points of interest along the length of the canyon.',
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:' Machu Picchu',
    location:'peru',
    grade:'CULTURAL RELAX',
    fees:'RS:80,000',
    description:'One of the most recently discovered ruins, the Incan ruins of Machu Picchu continue to astound historians, archaeologists and historical enthusiasts alike. A mystery of its real purpose surrounds the place and historians till date continue to debate on the matter. A hotspot within the ruins itself, The Temple of the Sun is known for having windows perfectly positioned to let the rays of the sun inside in intricate patterns.',
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Colosseum',
    location:'Rome',
    grade:'CULTURAL RELAX',
    fees:'RS:78,000',
    description:'This was originally called the Flavian Amphitheatre and was mostly used as public entertainment arena. The Colosseum is one of the most famous attractions in Rome and is where most gladiatorial fights took place. Today, actors in gladiator clothes stand outside the Colosseum, where you can take pictures with them (for a price!) The Colosseum is a testament to the ingenuity of the builders, having stood the test of time. While parts have been damaged, the Colosseum still remains standing in most of its original glory today. ',
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Iceland',
    location:'Europe',
    grade:'CULTURAL RELAX',
    fees:'RS:98,000',
    description:'Amongst the most coveted travel destinations, Iceland is one of the most surreal and magnificent countries in the world. Located close to the Arctic Circle, it offers amazingly dramatic and breath-taking landscapes and exotic natural phenomena. Summer is the best time to visit, owing to the mild temperatures and a plethora of available activities from hiking fjords to playing golf at midnight. However, no time is a bad time to visit this spectacular snow-covered country.',
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'Pamukkale',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'RS:70,000',
    description:"Pamukalle is a city located in the western side of Turkey. This city is called the city of minerals as there are a lot of minerals left on the shores of this city by flowing water. Called as the natural spa this place has tourism as one of its major industries. People come to this place all the time and prefer bathing in its fresh as well as natural water. Pamukalle is a Turkish word which means 'a castle of cotton'.",
  },
  {
    id:10,
    imgSrc:img10,
    destTitle:'Costa Rica',
    location:'North America',
    grade:'CULTURAL RELAX',
    fees:'RS:90,000',
    description: 'Costa Rica, a Catholic country in Central America, shares its borders with Nicaragua and Panama. It has the Pacific Ocean to the west and Carribean Coast to the East. Dominated by Roman Catholics, it is a secular country and respects all religions. Costa Ricans or the people living in the country are called Ticos.',
  } 
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
 },[])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Most Visited destinations
        </h3>
      </div>

      <div className='secContent grid'>

        {
          data.map(({id,imgSrc,destTitle,grade,
            location,fees,description})=>{
              return(
                <div  key={id} data-aos='fade-up'
                 className='singleDestination'>
                      {/* {here it will return single id from the map array} */}
                    <div className='imageDiv'>
                      <img src={imgSrc} alt={destTitle}/>
                    </div>
                    <div className='cardInfo'>
                        <h4 className='destTitle'>
                          {destTitle} 
                        </h4>
                        <span className='continet flex'>
                            <HiOutlineLocationMarker className='icon'/>
                            <span className='name'>{location}</span>
                        </span>
                        <div className='fees flex'>
                          <div className='grade'>
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className='price'>
                              <h5>{fees}</h5>
                          </div>
                        </div>

                        <div className='desc'>
                          <p>{description}</p>
                        </div>

                        <button className='btn flex'>
                          DETAILS <HiOutlineClipboardCheck  className='icon'/>
                        </button>
                    </div>
                </div>
              );
          })
        }
      </div>
    </section>
  )
}

export default Main