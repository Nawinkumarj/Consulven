import React, { useState } from 'react'
import Header from "../Components/Header";
import jobData from "../data/jobData";
import JobCard from "../components/JobCard";
import { assets } from "../assets/assets";

const Careers = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setSortOption] = useState("");

  const handleSort = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);

    let sortedJobs = [...filteredJobs];

    switch(option) {
      case "Experience":
        sortedJobs.sort((a, b) => a.experience.localeCompare(b.experience));
        break;
      case "Latest":
        sortedJobs.sort((a, b) => a.latest.localeCompare(b.latest));
        break;
      case "A to Z":
        sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    setFilteredJobs(sortedJobs);
  };

  const handleSearch = () => {
    const filtered = jobData.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>

      <Header title="LOREM IPSUM" para="Excellence at the Intersection of Strategy and Compliance" image={"https://images.pexels.com/photos/15205160/pexels-photo-15205160/free-photo-of-photograph-of-a-black-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />

      <div className='careerContainer'>
        
        {/* LeftSide */}
        <div className='leftSide'>
          <h1>JOIN OUR TEAM</h1>
          <p>our success is built on the collective expertise of our people. We nurture an environments where creativity thrives, leadship is cultivated, and collaboration is key. Whether you're seasoned professional or just starting you carer, you'll find opportinities to challenge yourself, grow your skills, and make a difference.</p>
          <a href='#jobSearch'> 
            <button>Opening position <img src={assets.arrow_icon} alt="" /> </button>
          </a>
        </div>
        
        {/* Middle */}
        <div className='middle'>
          <a href="https://youtu.be/EngW7tLk6R8?si=DC-M41uuegY0F8F0" target="_blank">
            <div className='sample1'>
              <div className='sample2'>
                <img src="https://images.pexels.com/photos/29153940/pexels-photo-29153940/free-photo-of-smiling-young-woman-in-a-professional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <div className='playBtn'>
                  <img src={assets.play_icon} />
                </div>
              </div>
            </div>
            <div className='dot dot1'></div>
            <div className='dot dot2'></div>
            <div className='dot dot3'></div>
            <div className='dot dot4'></div>
            <div className='dot dot5'></div>
            <div className='dot dot6'></div>
            <div className='dot dot7'></div>
            <div className='dot dot8'></div>
            <div className='dot dot9'></div>
            <div className='dot dot10'></div>
          </a>
        </div>
        
        {/* RightSide */}
        <div className='rightSide'>
          <div className='dot dot1'></div>
          <div className='dot dot2'></div>
          <div className='dot dot3'></div>
          <div className='dot dot4'></div>
          <div className='dot dot5'></div>
          <div className='dot dot6'></div>
          <div className='dot dot7'></div>
          <div className='dot dot8'></div>
          <div className='dot dot9'></div>
        </div>

      </div>

      <div className='carrerContentContainer'>
        <h1>CURRENT OPENING</h1>
        <p>Explore the roles we're currently hiring for and find the one that matches your skills and ambitions. Each role offers the opportunity to work on impactful projects, engage with a talented team, and grow your career in consulting and compliance</p>
      </div>

      <div className='searchContainer'>

        <div className='leftSide'>
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search by: Job title, Position, Keyword..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>

        <div className='rightSide'>
          <img src={assets.filter_icon} alt="" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />

          <div className='dropdown'>
            {isDropdownOpen && (
            <div className="dropdown-options">
              <div onClick={() => handleSort("A to Z")}>A to Z</div>
              <div onClick={() => handleSort("Experience")}>Experience</div>
              <div onClick={() => handleSort("Latest")}>Latest</div>
            </div>
            )}  
          </div>
          <button className='jobFilterBtn' onClick={handleSearch}>FIND JOB</button>
        </div>

      </div>

      <div className="jobCotainerList" id='jobSearch'>
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No Jobs Found.</p>
        )}
      </div>

    </div>
  )
}

export default Careers

