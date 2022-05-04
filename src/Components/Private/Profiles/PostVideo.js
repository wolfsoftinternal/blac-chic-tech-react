import React, { useEffect, useRef, useState } from "react";
import { BackGround, Logo } from "../../../Utilities/Icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { CreateVideoPost } from "../../../Store/Reducers/ProfileReducer";
import { useDispatch } from "react-redux";
import { VideoPostEnum } from "../../../Utilities/Enums";
import { VideoPostSchema } from "../../../Utilities/Schema";

const PostVideo = (props) => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const [video, setVideo] = useState();
  const [nextSlide, setNextSlide] = useState(0);

  const goPreviousSlide = () => {
    if (nextSlide === 2) {
      setNextSlide(1);
    } else if (nextSlide === 1 && video) {
      setNextSlide(0);
      setVideo();
    }
  };
  const handleVideoFile = (e, setFieldValue) => {
    debugger;
    e.preventDefault();
    setFieldValue("video_file", e.target.files[0]);
    setVideo(URL.createObjectURL(e.target.files[0]));
    setNextSlide(1);
  };

  useEffect(() => {}, []);

  return (
    <div
      className="modal fade post-modal"
      id="create-new-post-video"
      data-backdrop="static"
      data-keyboard="false"
      data-toggle="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="post-title">
            <h6>CREATE NEW VIDEOS</h6>
          </div>
          <Formik
            initialValues={VideoPostEnum}
            validationSchema={VideoPostSchema}
            onSubmit={(values) => {
              dispatch(CreateVideoPost(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <div id="create-new-post-video-step">
                  <div className="content">
                    <h3 className="title">Upload Videos</h3>
                    {!video && nextSlide === 0 && (
                      <section
                        onClick={() => {
                          fileRef?.current && fileRef.current.click();
                        }}
                      >
                        <div className="drag-photo-here">
                          <div className="drag-file-content">
                            <input
                              ref={fileRef}
                              type="file"
                              accept="video/*"
                              name="video_file"
                              hidden
                              draggable
                              onChange={(e) =>
                                handleVideoFile(e, setFieldValue)
                              }
                              className="drag-file"
                            />
                            <img
                              className="mb-3"
                              src={BackGround.BlankVideo}
                              alt=""
                            />
                            <h5>Upload Videos</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vitae facilisis sit nunc lorem. Morbi orci,
                              risus, pellentesque purus varius velit viverra.{" "}
                            </p>
                            <textarea
                              name="embeded_code"
                              id="embeded_code"
                              placeholder="Paste Embed Code here..."
                            ></textarea>
                          </div>
                          {errors.video_file && touched.video_file ? (
                            <div className="err">{errors.video_file}</div>
                          ) : null}
                        </div>
                      </section>
                    )}
                    {video && nextSlide === 1 && (
                      <section>
                        <a
                          href={undefined}
                          className="previous final"
                          onClick={goPreviousSlide}
                          role="menuitem"
                        >
                          Previous
                        </a>
                        <a
                          href={undefined}
                          className="next goto-next"
                          role="menuitem"
                        >
                          <button
                            onClick={handleSubmit}
                            type="button"
                            data-bs-dismiss="modal"
                          >
                            {" "}
                            POST{" "}
                          </button>
                        </a>
                        <div className="caption-form-wrapper">
                          <div className="post-img post-video">
                            <video width="100%" controls>
                              <source src={video} type="video/mp4" />
                            </video>
                          </div>
                          <div className="caption-form">
                            <h6>CAPTION</h6>
                            <div className="form-group">
                              <textarea
                                name="caption"
                                value={values.caption}
                                onChange={handleChange}
                                placeholder="Write a caption..."
                              ></textarea>
                              {errors.caption && touched.caption ? (
                                <div className="err">{errors.caption}</div>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <select
                                name="topic"
                                value={values.topic}
                                onChange={handleChange}
                              >
                                <option>Select Topic</option>
                                <option>Beginners</option>
                                <option>Business</option>
                                <option>Fashion</option>
                                <option>Gaming</option>
                              </select>
                              {errors.topic && touched.topic ? (
                                <div className="err">{errors.topic}</div>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <select
                                name="language"
                                value={values.language}
                                onChange={handleChange}
                              >
                                <option>Select Language</option>
                                <option>Languages</option>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>Hindi</option>
                              </select>
                              {errors.language && touched.language ? (
                                <div className="err">{errors.language}</div>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <select
                                name="duration"
                                value={values.duration}
                                onChange={handleChange}
                              >
                                <option>Select Duration</option>
                                <option>2 Days</option>
                                <option>5 Days</option>
                                <option>7 Days</option>
                                <option>11 Days</option>
                              </select>
                              {errors.duration && touched.duration ? (
                                <div className="err">{errors.duration}</div>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="event_spoken"
                                value={values.event_spoken}
                                onChange={handleChange}
                                placeholder="Name of event spoken at"
                              />
                              {errors.event_spoken && touched.event_spoken ? (
                                <div className="err">{errors.event_spoken}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostVideo;
