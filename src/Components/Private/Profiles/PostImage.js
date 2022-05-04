import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { CreateImagePost } from "../../../Store/Reducers/ProfileReducer";
import { BackGround, Icon } from "../../../Utilities/Icons";
import FormControl from "../../Common/Forms/FormControl";
import Profile from "./Profile";

function PostImage({}) {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const imageRef = useRef();
  const fileRef = useRef();
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);
  const [source, setSource] = useState();
  const [image, setImage] = useState(null);
  const [glass, setGlass] = useState(false);
  const [inp, setinp] = useState(1);
  const OpenGlassDiv = (e) => {
    glass === false ? setGlass(true) : setGlass(false);
  };
  const [crop, setCrop] = useState({
    aspect: 16 / 9,
  });
  const onFileChange = (e, setFieldValue) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      setSource(URL.createObjectURL(e.target.files[0]));
      setResult(URL.createObjectURL(e.target.files[0]));
      setFieldValue("image", e.target.files[0]);
    }
  };
  const getCroppedImg = async (setFieldValue) => {
    try {
      const canvas = document.createElement("canvas");
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        imageRef.current,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
      const base64Image = canvas.toDataURL("image/jpeg", 1);
      setResult(base64Image);
      setFieldValue("image", base64Image);
    } catch (e) {
      console.log(e);
    }
  };

  function submit(values) {
    try {
      if (!values?.image?.type) {
        const url = values.image;
        fetch(url)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], `${userProfile?.id}_post_image`, {
              type: values?.image?.type || "image/png",
            });
            values.image = file;
            dispatch(CreateImagePost(values));
          });
      } else {
        dispatch(CreateImagePost(values));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return () => {};
  }, [source]);
  return (
    <div
      className="modal fade post-modal"
      id="create-new-post"
      data-backdrop="static"
      data-keyboard="false"
      data-toggle="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Formik
            initialValues={{
              caption: "",
              image: "",
              address: "abcd",
              latitude: "0.72556",
              longitude: "72.5666",
              tagged_users: [],
            }}
            onSubmit={(values) => submit(values)}
          >
            {({
              values,
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="post-title">
                  {source ? (
                    <a
                      className="previous-step"
                      href="#"
                      role="menuitem"
                      onClick={(e) => {
                        e.preventDefault();
                        step == 1 && setSource(null);
                        setStep(1);
                      }}
                    >
                      <img src={Icon.ArrowLeftBlack} />
                    </a>
                  ) : (
                    <></>
                  )}
                  <h6>CREATE NEW POST</h6>
                  {step === 1 && source && (
                    <a
                      href="#next"
                      className="next-step"
                      role="menuitem"
                      onClick={(e) => {
                        e.preventDefault();
                        result && setStep(2);
                      }}
                    >
                      Next
                    </a>
                  )}{" "}
                  {step == 2 && source && (
                    <a className="next-step">
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn transparent"
                        role="menuitem"
                        onClick={handleSubmit}
                      >
                        Post
                      </button>
                    </a>
                  )}
                </div>
                <div
                  id="create-new-post-step"
                  role="application"
                  className="clearfix"
                >
                  <div className="content clearfix">
                    {step === 1 ? (
                      <>
                        {!source ? (
                          <>
                            <h3
                              id="create-new-post-step-h-0"
                              tabIndex="-1"
                              className="title current"
                            >
                              Drag Photos here
                            </h3>
                            <section
                              aria-labelledby="create-new-post-step-h-0"
                              className="body current"
                              aria-hidden="false"
                            >
                              <a
                                href="javascript:void(0)"
                                data-bs-dismiss="modal"
                                className="cancle-post-modal"
                              >
                                +
                              </a>
                              <div className="drag-photo-here">
                                <div
                                  className="drag-file-content"
                                  onClick={(e) =>
                                    fileRef.current && fileRef.current.click()
                                  }
                                >
                                  <input
                                    ref={fileRef}
                                    type="file"
                                    draggable
                                    hidden
                                    accept="image/*"
                                    onChange={(event) =>
                                      onFileChange(event, setFieldValue)
                                    }
                                  />
                                  <img src={BackGround.BlankImage} />
                                  <h5>Drag Photos here1</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vitae facilisis sit nunc
                                    lorem. Morbi orci, risus, pellentesque purus
                                    varius velit viverra.{" "}
                                  </p>
                                  <span className="bct-btn">
                                    Select From Computer
                                  </span>
                                  <p className="filename">
                                    Filename: <strong>Select File</strong>
                                  </p>
                                </div>
                              </div>
                            </section>
                          </>
                        ) : (
                          <></>
                        )}
                        {source ? (
                          <>
                            <h3
                              id="create-new-post-step-h-1"
                              tabIndex="-1"
                              className="title"
                            >
                              Round Aspect Ratio
                            </h3>
                            <section className="body">
                              <div className="post-img">
                                <ReactCrop
                                  className="react-crop"
                                  crop={crop}
                                  aspect={crop.aspect}
                                  onImageLoaded={(img) => {
                                    setImage(img);
                                  }}
                                  onChange={(image) => {
                                    setCrop({ ...image, aspect: crop.aspect });
                                    getCroppedImg(setFieldValue);
                                  }}
                                  onComplete={(image) => {
                                    setCrop({ ...image, aspect: crop.aspect });
                                    getCroppedImg(setFieldValue);
                                  }}
                                >
                                  <img ref={imageRef} src={source} />
                                </ReactCrop>

                                <div className="img-action">
                                  <ul>
                                    <li className="aspect-ratio">
                                      <div class="dropdown">
                                        <a
                                          class="btn btn-secondary dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <span
                                            class="iconify"
                                            data-icon="ic:round-aspect-ratio"
                                          ></span>
                                        </a>
                                        <ul
                                          class="dropdown-menu aspect-ratio-box"
                                          aria-labelledby="dropdownMenuButton1"
                                        >
                                          <li>
                                            <button
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setCrop({
                                                  unit: "%",
                                                  height: 100,
                                                  width: 100,
                                                  aspect: 1 / 1,
                                                });
                                                getCroppedImg(setFieldValue);
                                              }}
                                            >
                                              Original
                                              <span
                                                class="iconify"
                                                data-icon="bi:image"
                                              ></span>
                                            </button>
                                          </li>
                                          <li>
                                            <button
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setCrop({
                                                  unit: "px",
                                                  height: 200,
                                                  width: 200,
                                                  aspect: 1,
                                                });
                                                getCroppedImg(setFieldValue);
                                              }}
                                            >
                                              1:1
                                              <span
                                                class="iconify"
                                                data-icon="bx:rectangle"
                                              ></span>
                                            </button>
                                          </li>
                                          <li>
                                            <button
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setCrop({
                                                  unit: "%",
                                                  height: 40,
                                                  width: 50,
                                                  aspect: 9 / 16,
                                                });
                                                getCroppedImg(setFieldValue);
                                              }}
                                            >
                                              4:5
                                              <span
                                                class="iconify"
                                                data-icon="icon-park:rectangle"
                                              ></span>
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="glass-plus">
                                      <div class="dropdown">
                                        <a
                                          class="btn btn-secondary dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton2"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <span
                                            class="iconify"
                                            data-icon="fa6-solid:magnifying-glass-plus"
                                          ></span>
                                        </a>
                                        <ul
                                          class="dropdown-menu aspect-ratio-box"
                                          aria-labelledby="dropdownMenuButton2"
                                        >
                                          <div
                                            className={`form-group range-slider ${
                                              glass === true ? "active" : ""
                                            }`}
                                          >
                                            <input
                                              type="range"
                                              id="vol"
                                              name="vol"
                                              defaultValue={0}
                                              min="0"
                                              onChange={(e) => {
                                                setinp(e.target.value);
                                              }}
                                              max="250"
                                            />
                                          </div>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </section>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                    {result && step === 2 ? (
                      <>
                        <h3
                          id="create-new-post-step-h-2"
                          tabIndex="-1"
                          className="title"
                        >
                          Tag People
                        </h3>
                        <section
                          aria-labelledby="create-new-post-step-h-2"
                          className="body"
                          aria-hidden="true"
                        >
                          <div className="caption-form-wrapper">
                            <div className="post-img">
                              <img src={result} />
                              <div className="tag-people">
                                <a href="#">Tag People</a>
                              </div>
                            </div>
                            <div className="caption-form">
                              <h6>CAPTION</h6>
                              <div className="form-group">
                                <FormControl
                                  control="textArea"
                                  name="caption"
                                  id="caption"
                                  placeholder="Write a caption..."
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.caption}
                                />
                              </div>
                              <div className="form-group search-group">
                                <input
                                  type="search"
                                  id="searchInput"
                                  placeholder="Add Location"
                                />
                                <div className="content-section">
                                  <ul id="results">
                                    <li>Semarang, Indonesia</li>
                                    <li>Setiabudi, Semarang</li>
                                    <li>Semarang, Jawa Tengah</li>
                                    <li>Secangkir, Ungaran</li>
                                    <li>Setiap Liku, Indonesia</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    ) : (
                      <></>
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
}

export default PostImage;
