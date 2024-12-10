import React from 'react';
import cvFile from "./assets/NantawatCV4.pdf";


function App() {
  return (
    <div className="flex flex-col items-center font-sans bg-[#f6f3ef] min-h-screen p-6"> 

<nav className="w-full bg-[#46685b] py-4">
  <div className="max-w-screen-lg mx-auto px-4 flex justify-center items-center">
    
    <ul className="flex space-x-6 text-white font-medium">
      <li><a href="#about" className="hover:text-[#a87f32] transition duration-300">About Me</a></li>
      <li><a href="#experience" className="hover:text-[#a87f32] transition duration-300">My Experience</a></li>
      <li><a href="#skills" className="hover:text-[#a87f32] transition duration-300">My Skills</a></li>
      <li><a href="#projects" className="hover:text-[#a87f32] transition duration-300">My Projects</a></li>
      {/* <li><a href="#portfolio" className="hover:text-[#a87f32] transition duration-300">My Portfolio</a></li> */}
    </ul>
  </div>
</nav>

  <header className="relative flex flex-col items-center">
    <div className="relative w-64 h-64 mb-4">
      <img 
        src="https://media.licdn.com/dms/image/v2/C4D03AQEmzHAC0RYorA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654506006113?e=2147483647&v=beta&t=x96ThjRC9C16HO9qOEp3BaQyNvGxky1JlvVqCstP_jo"
        alt="Main"
        className="w-full h-full  object-cover"
      />
      <img 
        src="https://st4.depositphotos.com/13193658/40322/i/450/depositphotos_403224302-stock-photo-top-view-smartphone-blank-screen.jpg/150x150"
        alt="Overlay"
        className="absolute bottom-0 left-0 w-12 h-12 rounded-md shadow-lg"
      />
    </div>
    <h1 className="text-2xl font-bold  text-black text-center">Nantawat Tanasarnsreniwanich</h1>
    <h2 className="text-center mb-8">
      2017/79 Prachasongkork Rd Deandaeng <br />
      Bangkok 10400 <br />
      099-4196624 <br />
      LinkIn : https://www.linkedin.com/in/nantawat-tanasarnsreniwanich-2a19b31a9/
    </h2>
  </header>

  <section id="about" className="w-full h-[300px] bg-[#FAF9F9]  ">
      <div className="container mx-auto px-4">
        <h2 className="text-left text-2xl pt-4 pb-4 font-medium text-[#a87f32]">About Me</h2>
        <p>I graduated with a degree in mechanical engineering and started my career in a factory, progressing from engineer to engineering manager. After that, I pursued a master's degree in business administration. Upon graduating, I worked as an operations manager, lecturer, consultant, and currently, I am a project manager. I possess both theoretical knowledge and practical experience, along with management skills that are essential for handling high-responsibility positions. I can effectively manage and collaborate in a team to achieve company KPIs. When I have a great opportunity, I strive to do my best.</p>
        <p className="mt-4">I am seeking an exciting opportunity as an IT Product Manager. With my passion for technology and extensive experience in managing product lifecycles, I am eager to contribute to innovative and impactful projects. I am skilled in aligning cross-functional teams, managing stakeholder expectations, and driving the development and optimization of IT products. My goal is to create solutions that meet both business needs and user expectations while driving continuous improvement.If you are looking for a dedicated and results-driven professional to lead and shape your IT products, I would love the opportunity to contribute to your organization.</p>
        <a href={cvFile}
           target="_blank" 
           rel="noopener noreferrer" 
           className="inline-block mt-2 px-6 py-2 bg-[#a87f32] text-white font-medium rounded hover:bg-[#7f8d81] transition duration-200"> My CV</a>
      </div>
    </section>

    <section id="experience" className="bg-[#f0f3f1] py-12">
  <div className="max-w-screen-lg mx-auto px-4">
    
    <h2 className="text-3xl font-bold text-center text-[#46685b] mb-8">My Experience</h2>
    
    
    <div className="w-full space-y-8">
      
      <div className="bg-[#94a99c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h3 className="text-2xl font-semibold text-white"> Project Manager</h3>
        <p className="text-[#f0f3f1] mb-2">SUMIPOL GROUP COMPANY LIMITED  | Mar 2020 - Dec 2022</p>
        <p className="text-white">Managed large-scale projects for government sectors. <br />Allocated budgets and set project timelines. <br />Managed and coached team members to achieve project objectives. <br /> Implemented Agile methodologies to streamline processes and improve project outcomes..</p>
      </div>

      <div className="bg-[#94a99c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h3 className="text-2xl font-semibold text-white">Operation Manager</h3>
        <p className="text-[#f0f3f1] mb-2">EK-CHAI DISTRIBUTION SYSTEM CO., LTD | Jan 2000 - Feb 2002</p>
        <p className="text-white">Developed and implemented annual inventory control plans.  <br />Managed invoice and claims operations. <br />Collaborated with other departments on P&L, budgeting, and below-the-line activities. <br />Balanced logistics systems by leveraging order fulfillment, warehousing, and transportation.</p>
      </div>

      <div className="bg-[#94a99c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h3 className="text-2xl font-semibold text-white">Engineering manager</h3>
        <p className="text-[#f0f3f1] mb-2">K.R.PRECISION PUBLIC CO.,LTD | May 1994 - Aug 1998</p>
        <p className="text-white">Developed processes and optimized manufacturing yields. <br />Applied engineering standards to support design and calculations. <br />Planned production flow and monitored tool and equipment performance. <br />Led initiatives to improve process efficiency, leveraging Lean & Six Sigma methodologies.</p>
      </div>
    </div>
  </div>
</section>

<section id="skills"className="bg-gray-300 py-8">
  <div className=" mx-auto px-8">
  
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">My Skills</h2>
    <h2 className="mb-4 font-bold">Technical Skill</h2>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      
      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Icon" className="w-12 h-12 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-700">JavaScript</h3>
      </div>

      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"alt="React Icon"className="w-12 h-12 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-700">React</h3>
      </div>

      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCM3shpJqOYYoA1ruNJYg6GigsG2xopMT5Q&s"alt="Node.js Icon"className="w-24 h-16 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-700">Node.js</h3>
      </div>

      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"alt="MongoDB Icon"className="w-24 h-16 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-700">MongoDB</h3>
      </div>

      <div className="flex flex-col items-center p-4  bg-white shadow-md rounded-lg">
        <img src="https://www.cdnlogo.com/logos/t/34/tailwind-css.svg"alt="MongoDB Icon"className="w-24 h-16 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-700">Tailwind CSS</h3>
      </div>
    </div>
    <h2 className="mt-4 font-bold">Soft Skill</h2>
        <div>
          <li>Communication</li>
          <li>Growth mindset</li>
          <li>Problem solving</li>
          <li>Decision making</li>
        </div>
  </div>
</section>

<section id="projects" className="bg-gray-50 py-12">
  <div className="max-w-screen-3xl mx-auto px-4">
   
    <h2 className=" text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
    
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <img src="/MealKit1.png" alt="Project 1" className="w-full h-auto object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Project Meal-Kit E-commerce</h3>
        <p className="text-gray-600">An e-commerce website focused on meeting the needs of consumers who want to cook at home without the hassle of shopping for ingredients themselves. This service saves time and enables anyone to prepare their own meals, even without prior cooking experience.</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <img src="/Javaproject.png" alt="Project 2" className="w-full h-auto object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Project Shopping Cart</h3>
        <p className="text-gray-600">A project developed using JavaScript to create a shopping cart that allows users to add products along with images, edit or delete items, and calculate the total amount to be paid before finalizing the cart.</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <img src="Reactproject.png" alt="Project 3" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Project React</h3>
        <p className="text-gray-600">Create a React project with routing to navigate between pages, such as a Home page and a User page. On the User page, users can input data into a table and have the ability to delete individual entries or clear all data. Navigation buttons allow users to return to the previous page easily.</p>
      </div>
    </div>
  </div>
</section>


{/* <section id="portfolio" className="bg-[#FAF9F9] py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">My Portfolio</h2>
    <p className="text-lg text-gray-600 mb-12">Check out some of my amazing projects that showcase my skills and creativity.</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Project Title 1</h3>
          <p className="text-gray-600 mb-4">A brief description of the project goes here. This is where I can showcase the highlights of the project.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800">View Project</a>
        </div>
      </div>
      
     
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Project Title 2</h3>
          <p className="text-gray-600 mb-4">A brief description of the project goes here. This is where I can showcase the highlights of the project.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800">View Project</a>
        </div>
      </div>
      
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Project Title 3</h3>
          <p className="text-gray-600 mb-4">A brief description of the project goes here. This is where I can showcase the highlights of the project.</p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800">View Project</a>
        </div>
      </div>
    </div>
  </div>
</section> */}



      </div>
      

  );
}

export default App;