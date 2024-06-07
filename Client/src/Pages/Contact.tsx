import { Link } from "react-router-dom"
import { Link as Mail} from "@react-email/link"  

const Contact = () => {
  return (
    <div className="mx-[10vw] my-[5vh]">
      <h2 className="text-stone-600 text-5xl font-semibold">About us</h2>
      <p className="text-stone-500 text-lg mt-5 mb-10">
        This website is was generated with the aim of helping fellow skincare enthusiasts, powered by an AI model helping you figure out what is right for your skin.
        <br/>
        As someone who has struggled tremendously with acne, sensitive skin and dark circles, <i>"I hear you!"</i>
        <br/>
        This project was something I had wanted to work on for a while. I hope you like it! :)
      </p>

      <h2 className="text-stone-600 text-5xl font-semibold">Our mission</h2>
      <p className="text-stone-500 text-lg mt-5 mb-10">
        At Glass Skin, our mission is to empower individuals to achieve their best skin health by providing personalized skincare routines and product recommendations tailored to their unique skin types and concerns.
        <br/>
        We understand that every person's skin is different, and navigating the vast world of skincare products can be overwhelming. 
        <br/><br/>
        That's why we leverage advanced technology and expert knowledge to analyze your skin and identify its specific needs. Our goal is to simplify your skincare journey, helping you find effective solutions that work for you.
      </p>
      
      <h2 className="text-stone-600 text-5xl font-semibold mb-5">Contact us</h2>
      <span className="text-stone-500 text-lg ml-5"><Link to='https://www.linkedin.com/in/ritu-r-singh' target="_blank">LinkedIn</Link></span>
      <br/>
      <span className="text-stone-500 text-lg ml-5"><Link to='https://github.com/ritu713' target="_blank">Github</Link></span>
      <br/>
      <span className="text-stone-500 text-lg ml-5"><Mail href="mailto:ritusingh03.work@gmail.com"> Mail us</Mail></span>
    </div>
  )
}

export default Contact
