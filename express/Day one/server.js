import express, { json } from 'express'
// import dotenv from 'dotenv'
// import user from './user_router.js'
// import admin from './admin_router.js'

// dotenv.config()

const app = express()
app.use(json())

app.get('/',(req,res)=>{
  res.send('i am here')
})

app.get('/admin',(req,res)=>{
  res.send('i am admin')
})

app.post('/login',(req,res)=>{
  const {username, password} = req.body
  console.log(username, password);
  
  res.send('reached');
})

// app.use(json())

// app.use('/user',user)
// app.use('/admin',admin)

// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>User Homepage</title>
//       </head>
//       <body style="
//         margin:0;
//         height:100vh;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-family:Arial, sans-serif;
//         background:red;
//         color:#fff;
//       ">
//         <h1>Homepage</h1>
//       </body>
//     </html>
//   `);
// });

// app.get('/about',(req,res)=>{
//     res.send(`
//        <div>
//         <div>About</div>
//         <div>
//             <p>An "About section" (or "About Us/Me page") is a website/profile segment that tells visitors who you are, what your brand/story is, your mission/values, and why they should care, building trust and connection by humanizing the entity behind the business or personal brand, often including history, team, achievements, and goals, using text, images, and sometimes video. It's crucial for conversions as people visit it to verify credibility and align values with the business. 
// Key Elements
// Who You Are: Your business/personal identity, story, mission, and values.
// Why You Do It: Your passion, purpose, and the problem you solve.
// Who You Help: Your ideal customer or audience.
// What You Offer: A glimpse into your products/services and their benefits.
// People: Introduction to team members (optional but helpful).
// Credibility: Achievements, social proof, or unique elements (videos, data). 
// Purpose & Importance
// Builds Trust: Shows transparency and authenticity.
// Humanizes the Brand: Connects emotionally with visitors.
// Drives Decisions: Helps customers decide if they share values and want to buy.
// Second Most Visited Page: Often follows the homepage in traffic. 
// Tips for Writing/Designing
// Keep it Concise: Focus on the core message, use short paragraphs.
// Be Creative: Use unique formats (video, infographics) to engage.
// Be Authentic: Let personality shine through.
// Use Visuals: Incorporate images, colors, and layouts that match your brand.
// Structure for Clarity: Break information into digestible chunks. 
// What to include in my About section | Websites + Marketing - GoDaddy
// Your About section helps your business come to life in the minds of your visitors. Humanize your business and attract potential cu...

// GoDaddy

// 16 Great About Us Page Examples That Drive Results (2026) - Shopify
// What is an About Us page? An About Us page is a section on a website that provides information about a company, organization, or i...

// Shopify

// 9 Best About Us Page Design Examples + RECREATE WITH AI ...
// The "About Us" page is the second most viewed page on a website, following the homepage. It is crucial for impacting website visit...

// YouTube

// Show all
// </p>
//         </div>
//        </div>
//         `)
// })

const port = 8000
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})