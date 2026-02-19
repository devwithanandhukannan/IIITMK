import { useState } from 'react'
import './App.css'
import Parent from './assets/usememo_example/Parent'
import Child from './assets/usememo_example/Child'
// import Parentone from './assets/components/Parentone'
import Card from './assets/components/assignments/Card'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
function App() {
  // const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

const cardData = [
  { title: "Sunset Serenity", desc: "Experience the calm of a golden sunset by the beach, perfect for winding down after a long day." },
  { title: "Tech Trends 2026", desc: "Discover the latest breakthroughs in AI, VR, and blockchain shaping the future of technology." },
  { title: "Culinary Delights", desc: "Explore mouth-watering recipes and cooking tips from top chefs around the world." },
  { title: "Mountain Adventure", desc: "Embark on an epic journey through rugged peaks and scenic trails for thrill-seekers." },
  { title: "Book Nook", desc: "Your cozy corner for book reviews, author interviews, and reading inspiration." },
  { title: "Fitness Boost", desc: "Get motivated with quick workouts, health tips, and wellness challenges for all levels." },
  { title: "Art & Creativity", desc: "Dive into tutorials, exhibitions, and stories that celebrate creative expression." },
  { title: "Travel Escapes", desc: "Plan your next getaway with destination guides, travel hacks, and hidden gems." },
  { title: "Sunset Serenity", desc: "Experience the calm of a golden sunset by the beach, perfect for winding down after a long day." },
  { title: "Tech Trends 2026", desc: "Discover the latest breakthroughs in AI, VR, and blockchain shaping the future of technology." },
  { title: "Culinary Delights", desc: "Explore mouth-watering recipes and cooking tips from top chefs around the world." },
  { title: "Mountain Adventure", desc: "Embark on an epic journey through rugged peaks and scenic trails for thrill-seekers." },
  { title: "Book Nook", desc: "Your cozy corner for book reviews, author interviews, and reading inspiration." },
  { title: "Fitness Boost", desc: "Get motivated with quick workouts, health tips, and wellness challenges for all levels." },
  { title: "Art & Creativity", desc: "Dive into tutorials, exhibitions, and stories that celebrate creative expression." },
  { title: "Travel Escapes", desc: "Plan your next getaway with destination guides, travel hacks, and hidden gems." },
  { title: "Mindful Moments", desc: "Simple meditation exercises and mindfulness practices to refresh your mind daily." },
  { title: "Gadget Review Hub", desc: "Honest reviews, comparisons, and news on the latest gadgets and tech accessories." }
];

  return (
    <>
    
    <button onClick={()=>setDark(!dark)} className='bg-gray-200 m-10 p-3 rounded-full'>{dark ? <MdDarkMode/>:<CiLight/>}</button>
    <div className='flex flex-wrap justify-center w-full'>
      
      {cardData.map((items, index, arr)=>{
        return <Card key={index} isDark={dark} title={items.title} desc={items.desc}/>
      })}
    </div>
    {/* <Parent/> */}

    </>
  )
}

export default App
