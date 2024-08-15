import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={"80%"} />
          <h2>{course.title}</h2>
          <h5 id = "course-description">{course.description}</h5>
          <h6>by - {course.createdBy}</h6>
          <h5 id = "h5-durations">Duration - {course.duration} weeks</h5>
          <Link to={`/lectures/${course._id}`} id = "link-lectures">
            <h2 id = "h2-lectures">Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
