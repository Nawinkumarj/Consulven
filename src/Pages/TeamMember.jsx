import { FaLinkedinIn } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import teamMembers from '../data/teamData'; 
import Header from '../Components/Header'

const TeamMember = () => {
  const { id } = useParams(); 
  const member = teamMembers.find((member) => member.id === parseInt(id));

  if (!member) {
    return <p>Team member not found!</p>;
  }
    return (
       <div className="teamMember-container">
         <Header title='OUR PEOPLE' para='Meet our Leadership Team' image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
        <div className='teamMember-main'>
            <div className='teamMember-head'>
                <div className='teamMember-img'>
                    <img src={member.image} alt=""/>
                </div>
                <div className='teamMember-name'>
                    <h1>{member.name}</h1>
                    <p>{member.role}</p>
                    <div className='teamMember-media'>
                    <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='teams-content-media-icons' color='white' />
                    </a>
                    </div>
                </div>
            </div>
            <div className='teamMember-content'>
                <p>{member.para1}</p>
                <p>{member.para2}</p>
                {member.para3 && <p>{member.para3}</p>}
                {member.para4 && <p>{member.para4}</p>}

            </div>
        </div>
        </div>
    )
}

export default TeamMember