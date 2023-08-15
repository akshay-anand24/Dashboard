import React, { useEffect } from 'react'
import './style.css'

const Sidebar = () => {

useEffect(()=>{
  let profile=document.getElementsByClassName('profile')[0]
  let connection=document.getElementsByClassName('profile')[1]
  profile.onclick=()=>{
    document.getElementsByClassName('myconnections')[0].style.display='none'
    document.getElementsByClassName('data')[0].style.display='flex'
  }
  connection.onclick=()=>{
    document.getElementsByClassName('myconnections')[0].style.display='flex'
    document.getElementsByClassName('data')[0].style.display='none'
  }
  
})


  return (
    <div className='dash'>
   <div className="sidebar">
    <div className="dashboard">
      <span>Dashboard</span>
    </div>
    <div className="buttons">
      <div className="profile"> <i class="fa-solid fa-angle-right "></i><span>My Profile</span></div>
      <div className="profile" id='con'> <i class="fa-solid fa-angle-right "></i><span>My Connections</span></div>
    </div>
   </div>
   <div className='nav'>
    <div className='dashbar'>
    <i class="fa-regular fa-bell fa-xl"></i>
      <div className="name"><i class="fa-regular fa-circle-user fa-lg"></i>
      <div className="nameContent">
        <div>Welcome Back</div>
      <h3>Vishnu Swaroop</h3></div>
      <i class="fa-solid fa-angle-down " style={{width:'0px'}}></i>
      </div>
    </div>

<div className="purple">
  <div className="data">

<div className="dataleft">
 <div className="upload">
 <i class="fa-regular fa-face-smile-beam fa-2xl"></i>
 <div>Upload</div>
 </div>

 <div className="xxx">

<div className="container">
  <div>
  <div>Your Name</div>
  <div>Vishnu Swaroop</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
<div className="container">
  <div>
  <div>Your Email</div>
  <div>VishnuSwaroop@gmail.co</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
<div className="container">
  <div>
  <div>Phone no</div>
  <div>6788984500</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>
<div className="xxx">
<div className="container">
  <div>
  <h3>About Vishnu</h3>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione sit consequuntur qui eveniet assumenda voluptatibus culpa tenetur! Ipsam voluptatibus voluptate quos, ullam amet obcaecati dicta atque a repellendus. Officia.</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>
<div className="xxx">
<div className="container">
  <div>
  <h3>Skills</h3>
  <div>React JS</div>
  <div>Next JS</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>

</div>

<div className="dataright">


 <div className="xxx">

<div className="container">
  <div>
  <h3>Proffesional Details </h3>
  <div>These are professional details section</div>
  </div>
  <div>
 <i class="fa-regular fa-star fa-2xl"></i></div>
</div>
</div>
<div className="xxx">
<div className="container">
  <div>
  <h3>Certifications <i class="fa-solid fa-stamp"></i></h3>
  <div>Python Certificate Course</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>
<div className="xxx">
<div className="container">
  <div>
  <h3>Experience</h3>
  <h5>7yrs (2014-2021)</h5>
  <div>Full Time</div>
  <div>-- Full Stack Devleoper</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
<div className="container">
  <div>
  <h3>Experience</h3>
  <h5>6months (2023-present)</h5>
  <div>Part Time</div>
  <div>-- Full Stack Devleoper</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>


<div className="xxx">
<div className="container">
  <div>
  <h3>Education</h3>
  <h5>IIT Hyderabad</h5>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel voluptatem modi quam molestiae impedit illo veniam facere laborum quos minima nobis magnam, dolores quidem omnis velit quisquam ipsa tempora?</div>
  </div>
  <div>
  <div className='btn'>Edit</div></div>
</div>
</div>

</div>

  </div>


  <div className="myconnections">
    <div className="xxx" style={{backgroundColor:'#f8f8f8'}}>
      <div className="container" style={{alignItems:'center'}} >
        <div>
        <h3>Vishnu Swaroop</h3>
        <div>Full Stack Developer</div>
      </div>
      <i class="fa-solid fa-user-tie fa-2xl"></i>
      </div>
    </div>
    <div className="xxx" style={{backgroundColor:'#f8f8f8'}}>
      <div className="container" style={{alignItems:'center'}} >
        <div>
        <h3>Vishnu Swaroop</h3>
        <div>Full Stack Developer</div>
      </div>
      <i class="fa-solid fa-user-tie fa-2xl"></i>
      </div>
    </div>
    <div className="xxx" style={{backgroundColor:'#f8f8f8'}}>
      <div className="container" style={{alignItems:'center'}} >
        <div>
        <h3>Vishnu Swaroop</h3>
        <div>Full Stack Developer</div>
      </div>
      <i class="fa-solid fa-user-tie fa-2xl"></i>
      </div>
    </div>

  </div>

</div>


   </div>
   </div>
  )
}

export default Sidebar