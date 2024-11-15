import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import jobData from "../data/jobData";
import SimilarJobCard from "../Components/SimilarJobCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_FILE_TYPES = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  if (!job) return <p>Job not found!</p>;

  const similarJobs = jobData.filter((j) => job.similarJobs.includes(j.title));

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState({});
  const [uploadComplete, setUploadComplete] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validateFile = (file) => {
    const fileSizeMB = file.size / (1024 * 1024);
    const fileExtension = file.name.slice(file.name.lastIndexOf("."));
    if (!ALLOWED_FILE_TYPES.includes(fileExtension)) {
      toast.error(`Unsupported file type: ${fileExtension}`);
      return false;
    }
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      toast.error(`File size exceeds ${MAX_FILE_SIZE_MB}MB: ${file.name}`);
      return false;
    }
    return true;
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    files.forEach((file) => {
      if (validateFile(file)) {
        setSelectedFiles((prevFiles) => [...prevFiles, file]);
        startUpload(file);
      }
    });
  };

  const startUpload = (file) => {
    setIsUploading((prev) => ({ ...prev, [file.name]: true }));
    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = (prevProgress[file.name] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(uploadInterval);
          setIsUploading((prev) => ({ ...prev, [file.name]: false }));
          setUploadComplete((prev) => ({ ...prev, [file.name]: true }));
        }
        return { ...prevProgress, [file.name]: newProgress };
      });
    }, 500);
  };

  const handleDeleteFile = (fileName) => {
    setSelectedFiles((files) => files.filter((file) => file.name !== fileName));
    setUploadProgress((progress) => {
      const newProgress = { ...progress };
      delete newProgress[fileName];
      return newProgress;
    });
    setIsUploading((uploading) => {
      const newUploading = { ...uploading };
      delete newUploading[fileName];
      return newUploading;
    });
    setUploadComplete((complete) => {
      const newComplete = { ...complete };
      delete newComplete[fileName];
      return newComplete;
    });
  };

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

  return (
    <div>
      <ToastContainer /> {/* Toastify container to display notifications */}
      <div className="JobDetailsPageContainer">
        {/* LeftSide */}
        <div className="leftSide">
          <h1>JOB INFORMATION</h1>
          <div className="jobAllPosition">
            <div className="AllPositionTitle">
              <h2>All Positions</h2>
            </div>
            <div className="AllPositionList">
              {jobData.map((job) => (
                <Link to={`/career/${job.id}`} key={job.id}>
                  <div className="positionName">
                    {job.title} <span className="positionSpan"></span>{" "}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="allSimilarJobTitle">
            <h2>Similar Jobs</h2>
          </div>
          <div className="similarJobContainer">
            {similarJobs.length > 0 ? (
              similarJobs.map((similarJob) => (
                <SimilarJobCard key={similarJob.id} job={similarJob} />
              ))
            ) : (
              <p>No Similar Jobs Available.</p>
            )}
          </div>
        </div>

        {/* RightSide */}
        <div className="rightSide">
          {/* Title Section */}
          <h1 className='jobTitleSm'>JOB INFORMATION</h1>
          <div className="jobTitle">
            <img src={assets.hiringWhite_icon} alt="" />
            <div>
              <h1>{job.title}</h1>
              <p>EXPERIENCE &nbsp; {job.experience}</p>
            </div>
          </div>
          <h1 className="desc">DESCRIPTION</h1>
          <p
            className="descPara"
            dangerouslySetInnerHTML={{
              __html: job.fullDescription.replace(/\n\n/g, "<br/><br/>"),
            }}
          ></p>
          <h1 className="desc">REQUIREMENTS</h1>

          <p className="descPara">{job.requirementPara}</p>

          <div className="requirementPoints">
            {job.requirementPoints &&
              job.requirementPoints.map((point, index) => (
                <p key={index}>
                  <img src={assets.tick_icon} alt="" className="tickIcon" />
                  {point}
                </p>
              ))}
          </div>
          <h1 className="desc">JOB DETAILS</h1>
          <div className="JobSmallDetails">
            <p>
              LOCATION <span>{job.location}</span>
            </p>
            <p>
              QUALIFICATION <span>{job.qualifications}</span>
            </p>
            <p>
              EXPERIENCE <span>{job.experience}</span>
            </p>
            <p>
              JOB TYPE <span>{job.workType}</span>
            </p>
          </div>
        </div>
      </div>
      <form action="#" method="#" className="jobForm" onSubmit={handleSubmit}>
        <h1>BASIC INFORMATION</h1>
        <div className="jobFormField">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input
            type="tel"
            placeholder="Your Phone Number"
            required
            maxLength="10"
            pattern="[1-9]{1}[0-9]{9}"
          />
          <input type="text" placeholder="Job Title" required />
          <input type="text" placeholder="Years Of Experience" required />
          <input type="text" placeholder="Job Type" required />
        </div>
        <div className="fileUploadContainer">
          <h3 className="uploadTitle">Upload your Resume</h3>
          <div
            className={`upload-section ${isDragging ? "drag-active" : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <label htmlFor="file-upload" className="upload-label">
              <div className="drap-label">
                <img src={assets.cloud_icon} alt="" />
                <p>Choose a file or drag & drop it here</p>
                <p className="smLabelTxt">Choose a file</p>
                <p>JPEG, PNG, PDF, and DOC formats up to 5MB</p>
                <label htmlFor="file-upload">Browse File</label>
              </div>
            </label>

            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileSelect}
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              required
            />
          </div>

          <div className="file-list">
            {selectedFiles.map((file) => (
              <div key={file.name} className="file-item">
                <div className="file-info">
                  <img src={assets.pdf_icon} alt="" className="pdf-icon" />
                  <div>
                    <p>{file.name}</p>
                    <p>{(file.size / 1024).toFixed(2)} KB</p>
                    {!uploadComplete[file.name] && (
                      <div className="progress-container">
                        <progress
                          value={uploadProgress[file.name] || 0}
                          max="100"
                          className="file-progress"
                        ></progress>
                      </div>
                    )}
                  </div>
                </div>

                <div className="upload-controls">
                  {uploadComplete[file.name] ? (
                    <p className="upload-completed">Completed</p>
                  ) : (
                    <>
                      <p className="upload-completed">Uploading...</p>
                      {isUploading[file.name] && (
                        <button
                          onClick={() => handleDeleteFile(file.name)}
                          className="uploadFieldIcon"
                        >
                          <img src={assets.cancel_cion} alt="" />
                        </button>
                      )}
                    </>
                  )}
                  {!isUploading[file.name] && (
                    <button
                      onClick={() => handleDeleteFile(file.name)}
                      className="uploadFieldIcon"
                    >
                      <img src={assets.trash_icon} alt="" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="applyBtn" type="submit">
          <img src={assets.send_icon} alt="" />
          Apply Now
        </button>
      </form>
      {/* Popup */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img src={assets.success_Icon} alt="" />
            <h2>Applied Successfully!</h2>
            <p>Thank you for applying. We will review your application soon.</p>
            <button onClick={closePopup}>X</button>
          </div>
        </div>
      )}
      <div className="smSimilarContainer">
        <h2>Similar Jobs</h2>
        <Slider {...settings}>
          {similarJobs.length > 0 ? (
            similarJobs.map((similarJob) => (
              <SimilarJobCard key={similarJob.id} job={similarJob} />
            ))
          ) : (
            <p>No Similar Jobs Available.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default JobDetails;
