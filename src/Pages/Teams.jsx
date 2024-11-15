import {useState} from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useNavigate   } from 'react-router-dom';
import teamMembers from '../data/teamData';
import SectionTitle from "../Components/SectionTitle";
import Header from '../Components/Header'
import CustomCursor from "../Components/cursorMain.jsx"
import { assets } from "../assets/assets";

const Teams = () => {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = (id) => {
        navigate(`/team/${id}`);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className='teams-container'>
              <Header title='LOREM IPSUM' para='Excellence at the Intersection of Strategy and Compliance' image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
            <div className='teams-main'>
                <div className='teams-head'>
                <SectionTitle sectionTitle={"OUR PEOPLE"}  />
                </div>
                <div className='teams-content'>
                    <div className='teams-content-para'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maxime quas similique
                            a totam incidunt. Possimus sint, ipsum dolorem corrupti voluptas architecto id, unde
                            earum nobis in perferendis fuga voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maxime quas similique
                            a totam incidunt. Possimus sint, ipsum dolorem corrupti voluptas architecto id, unde
                            earum nobis in perferendis fuga voluptatem.</p>
                    </div>
                    <div className='teams-content-cards'>
                        {teamMembers.map(member => (
                            
                            <div
                                className="teams-content-card" 
                                key={member.id}
                                onClick={() => handleClick(member.id)} // Pass the id to handleClick
                            >
                                <div className={`teams-content-card1  ${member.size === 'small' ? 'small-card' : 'large-card'}`}>
                                {isHovering &&
                                 <CustomCursor 
                                    cursorImage={assets.logoWhite}
                                    cursorSize={{ width: 180, height: 180 }}
                                 />}
                                    <img src={member.image} alt={member.name}   onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave} />
                                    
                                    <div className='teams-content-name'>
                                        <div className='teams-content-design'>
                                            <h1>{member.name}</h1>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className='teams-content-media'>
                                            <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                                                <FaFacebookF className='teams-content-media-icons' color='white' />
                                            </a>
                                            <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn className='teams-content-media-icons' color='white' />
                                            </a>
                                            <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className='teams-content-media-icons' color='white' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams



