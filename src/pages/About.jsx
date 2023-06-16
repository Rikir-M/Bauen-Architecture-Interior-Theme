import React from 'react'
import canada from "../assets/images/canadaOffice.jpg"

const About = () => {
  return (
    <section className='about mt-5 '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 text-headColor gap-10'>
          <div>
            <h1 className='font-Oswald mb-10  text-headColor text-4xl uppercase'>A b o u t <span className='text-secondary '> b a u e n</span></h1>
            <p className='text-justify mb-5 text-textColor leading-8 '>
              Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique.
            </p>
            <p className='text-justify mb-5 text-textColor leading-8 '>
              Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.
            </p>
            <p className='text-justify mb-5 text-textColor leading-8 '>
              Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.
            </p>
            </div>
          <div className='relative'>
            <img src={canada} className='hover:scale-95 transition-all duration-500' alt="" />
            <button className='absolute bottom-1  text-sm right-10 uppercase px-12 py-5 font-Oswald font-light tracking-widest bg-boxColor'>
              c a n a d a  o f f i c e
            </button>
            </div>
        </div>
      </div>
   </section>
  )
}

export default About
