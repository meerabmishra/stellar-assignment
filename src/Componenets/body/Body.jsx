import './Body.css';

import React from 'react'

import dashboard1 from '../../asset/dashboard1.png'
import dashboard2 from '../../asset/dashboard2.png'
import RedeemIcon from '@mui/icons-material/Redeem';
import DialogBox from '../Dialog/DialogBox';

import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const Body = ({toggle, setToggle}) => {
  console.log("toggle ",toggle)
  return (
    <div className='body'>
      <div className='flex left-body'>
        <div className='text-3xl text-blue-600 mt-2 mr-4 payroll' >
        <ion-icon name="cash-outline" />
        </div>
        <div>
            <button className='btn1Body'>Payroll</button>
        </div>
      </div>
     
      <div className='left-body'>
        <button className='btn2Body'>"Keep Your Payroll Proceses Simple & Secure With Our Software!"</button>

      </div>
      <div className='left-body'><p className='para'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorum accusamus, illum optio molestiae,
        voluptatibus sunt modi perspiciatis laborum ullam placeat possimus illo quo maxime necessitatibus sequi fugiat
        distinctio quia? Illum cumque deleniti repellat magnam incidunt exercitationem distinctio consequatur laudantium
        inventore in commodi impedit eum atque repudiandae, blanditiis dolor, dolorem magni, vero aperiam. Cupiditate officiis
        voluptate corrupti nemo modi nisi autem expedita nulla placeat quia provident ab tempora eveniet quisquam a voluptas
        inventore officia nesciunt ipsam hic, quaerat commodi! Repellat quam sint, ipsa ipsum laboriosam suscipit nam harum
        dolores eligendi,
        expedita tempore facilis ratione, earum tenetur nobis facere necessitatibus sapiente.
      </p></div>
      <button className='btn3Body border'>{`GET STARTED ->`}</button>
      <RedeemIcon className='redeem'/>
      <button className='btn4Body'>Try our Payroll free for 10 employees</button>
      <div className='right-body'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img className='img' src={dashboard1} alt="" />
          </div>
          <div className='img-stack bottom'>
            <img className='img' src={dashboard2} alt="" />
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='main-first'>
        < SwipeDownIcon fontSize='large' className='easy'/>


          <div className='firstdiv'>Easy to use</div>
          <p className='seconddiv'>Simple and user friendly design for easy adaption</p>
        </div>
        <div className='second-main'>
        <AppsOutlinedIcon fontSize='large' className='integrate'/>
          <div className='firstdiv'>Additional integrated benefits</div>
          <p className='seconddiv'>integrate with our software's for HR statuory Employee Self Service portals and much more</p>
        </div>
        <div className='third-main'>
        <CachedOutlinedIcon fontSize='large' className='compliance'/>
          <div className='firstdiv'>Automated Complainces </div>
          <p className='seconddiv'>Set compliances like PF, TDS, PT & ESIC on auto pilot</p>
        </div>
      </div>
      {
        toggle && <DialogBox toggle={toggle} setToggle={setToggle}/>
      }
    </div>
  )
}

export default Body