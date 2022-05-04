import { ErrorMessage, FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../../Store/Reducers/ProfileReducer";
import { Months } from "../../../Utilities/Enums";
import { ArrayRange } from "../../../Utilities/Functions";
import { Icon } from "../../../Utilities/Icons";
import {
  CurrentJobSchema,
  EditProfileSchema,
  EducationSchema,
  PastJobsSchema,
  UrlSchema,
} from "../../../Utilities/Schema";
import {
  GetCityList,
  GetCountryList,
  GetStateList,
} from "../../../Store/Reducers/CommonSlice";
import FormControl from "../../Common/Forms/FormControl";
import {
  VerifyEmail,
  VerifyUsername,
} from "../../../Store/Reducers/SignInSlice";

export function PersonalDetails() {
  const dispatch = useDispatch();
  const { Profile, Loader } = useSelector((state) => state);
  const { userProfile } = Profile;
  const { countryList, stateList, cityList } = Loader;
  const [isEdit, setIsEdit] = useState(true);
  const [error, setError] = useState({ email: "", userName: "" });

  const intialLoad = async () => {
    dispatch(GetStateList(userProfile?.country_id));
    dispatch(GetCityList(userProfile?.state_id));
  };
  useEffect(() => {
    if (userProfile) {
      dispatch(GetCountryList());
      intialLoad();
    }
    return () => {};
  }, [userProfile]);
  return (
    <div className="col-md-6">
      <Formik
        initialValues={{
          email: userProfile?.email,
          first_name: userProfile?.first_name,
          last_name: userProfile?.last_name,
          username: userProfile?.user_name,
          country: userProfile?.country_id,
          state: userProfile?.state_id,
          city: userProfile?.city_id,
        }}
        enableReinitialize={true}
        validationSchema={EditProfileSchema}
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setIsEdit(true);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleReset,
          dirty,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="edit-profile-wrapper">
              <h5>
                EDIT PROFILE{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEdit(!isEdit);
                  }}
                >
                  {isEdit ? (
                    <>
                      <img src={Icon.Edit_Blue} /> Edit
                    </>
                  ) : (
                    <img src={Icon.Cancel} />
                  )}
                </a>
                {dirty ? (
                  <a
                    href="#"
                    style={{ margin: "0 10px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    Save
                  </a>
                ) : (
                  <></>
                )}
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <FormControl
                    control="input"
                    label="First Name"
                    type="text"
                    name="first_name"
                    id="first_name"
                    disabled={isEdit}
                    value={values?.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-6">
                  <FormControl
                    control="input"
                    label="Last Name"
                    type="text"
                    name="last_name"
                    id="last_name"
                    disabled={isEdit}
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-12">
                  <FormControl
                    control="input"
                    label="Username"
                    type="text"
                    name="username"
                    id="username"
                    disabled={isEdit}
                    value={values.username}
                    onChange={handleChange}
                    style={{
                      borderBottom:
                        values.username &&
                        !isEdit &&
                        (!errors?.username && !error?.userName
                          ? "1px solid green"
                          : "1px solid #db2c6f"),
                    }}
                    onBlur={(e) => {
                      e.preventDefault();
                      !errors?.username &&
                        dispatch(
                          VerifyUsername({
                            username: values.username,
                            user_id: userProfile?.id,
                          })
                        ).then(({ payload }) => {
                          if (payload?.hasError) {
                            setError((preVal) => ({
                              ...preVal,
                              userName: payload.message,
                            }));
                          } else {
                            setError((preVal) => ({
                              ...preVal,
                              userName: "",
                            }));
                          }
                        });
                      handleBlur(e);
                    }}
                  />
                  {!errors?.username && (
                    <div className="error">{error?.userName}</div>
                  )}
                </div>
                <div className="col-md-12">
                  <FormControl
                    control="input"
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    disabled={isEdit}
                    value={values?.email}
                    onChange={handleChange}
                    style={{
                      borderBottom:
                        values?.email &&
                        !isEdit &&
                        (!errors?.email && !error?.email
                          ? "1px solid green"
                          : "1px solid #db2c6f"),
                    }}
                    onBlur={(e) => {
                      e.preventDefault();
                      !errors?.email &&
                        dispatch(
                          VerifyEmail({
                            email: values?.email,
                            user_id: userProfile?.id,
                          })
                        ).then(({ payload }) => {
                          if (payload?.hasError) {
                            setError((preVal) => ({
                              ...preVal,
                              email: payload.message,
                            }));
                          } else {
                            setError((preVal) => ({
                              ...preVal,
                              email: "",
                            }));
                          }
                        });
                      handleBlur(e);
                    }}
                  />
                  {!errors?.email && (
                    <div className="error">{error?.email}</div>
                  )}
                </div>
                <div className="col-md-12">
                  <FormControl
                    control="select"
                    className="type-select"
                    options={countryList}
                    onChange={(value) => dispatch(GetStateList(value))}
                    id="country"
                    name="country"
                    isDisabled={isEdit}
                    value={values?.country}
                    label="Country"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className="col-md-6">
                  <FormControl
                    control="select"
                    className="type-select"
                    options={stateList}
                    onChange={(value) => dispatch(GetCityList(value))}
                    id="state"
                    name="state"
                    isDisabled={isEdit}
                    value={values.state}
                    label="State"
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className="col-md-6">
                  <FormControl
                    control="select"
                    className="type-select"
                    options={cityList}
                    onChange={() => {}}
                    id="city"
                    name="city"
                    isDisabled={isEdit}
                    value={values.city}
                    label="City"
                    setFieldValue={setFieldValue}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export function SocialDetails() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="col-md-6">
      <Formik
        initialValues={{
          linkedIn: userProfile?.linkedin_url,
          instagram: userProfile?.instagram_url,
          twitter: userProfile?.twitter_url,
        }}
        enableReinitialize={true}
        validationSchema={UrlSchema}
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setEnabled(false);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleReset,
          handleSubmit,
          dirty,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="edit-profile-wrapper">
              <div className="social-media-input">
                <h5>
                  SOCIAL MEDIA ACCOUNT
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setEnabled(!enabled);
                    }}
                  >
                    {!enabled ? (
                      <img src={Icon.Edit_Blue} />
                    ) : (
                      <img src={Icon.Cancel} />
                    )}
                  </a>
                  {dirty ? (
                    <a
                      href="#"
                      style={{ margin: "0 10px" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      Save
                    </a>
                  ) : (
                    <></>
                  )}
                </h5>
                <div className="form-group linkin-icon">
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!enabled}
                    type="text"
                    value={values.linkedIn}
                  />
                </div>
                <div className="error">
                  <ErrorMessage name="linkedIn" />
                </div>
                <div className="form-group twitter-icon">
                  <input
                    id="twitter"
                    name="twitter"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!enabled}
                    type="text"
                    value={values.twitter}
                  />
                </div>
                <div className="error">
                  <ErrorMessage name="twitter" />
                </div>
                <div className="form-group instagram-icon">
                  <input
                    id="instagram"
                    name="instagram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!enabled}
                    type="text"
                    value={values.instagram}
                  />
                </div>
                <div className="error">
                  <ErrorMessage name="instagram" />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export function Jobs() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const [pastJobs, setPastJobs] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (userProfile) {
      const tempArray = userProfile?.past_jobs?.map((item) => ({
        id: item?.id,
        title: item?.title,
        company_name: item?.company_name,
      }));
      setPastJobs(tempArray);
    }
    return () => {};
  }, [userProfile]);

  return (
    <div className="content_box">
      <Formik
        initialValues={{ past_jobs: pastJobs }}
        enableReinitialize
        validationSchema={PastJobsSchema}
        onSubmit={(values) => {
          dispatch(UpdateProfile(values)).then((res) => {
            setIsEdit(false);
          });
        }}
      >
        {({
          values,
          dirty,
          handleChange,
          handleBlur,
          handleReset,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="past_jobs"
              render={(fieldArray) => {
                return (
                  <>
                    <div className="edit-icons">
                      <ul>
                        <li>
                          {dirty ? (
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(e);
                              }}
                            >
                              Save
                            </a>
                          ) : (
                            <></>
                          )}
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              fieldArray.push({
                                title: "",
                                company_name: "",
                              });
                            }}
                          >
                            <img src={Icon.Plus} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsEdit(!isEdit);
                            }}
                          >
                            {isEdit ? (
                              <img
                                height={20}
                                width={20}
                                src={Icon.Cancel}
                                onClick={() => handleReset()}
                              />
                            ) : (
                              <img src={Icon.Pencil} />
                            )}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4>PAST JOBS</h4>
                    <div className="past-jobs">
                      <ul>
                        {values?.past_jobs?.map((job, i) => {
                          return (
                            <li
                              key={i}
                              className="img-icon"
                              style={{
                                justifyContent:
                                  job.id && !isEdit
                                    ? "flex-start"
                                    : "space-between",
                              }}
                            >
                              {/* <img src="img/user-profile-apple-icon.svg" /> */}
                              <h5>
                                {job.id && !isEdit ? (
                                  job?.title
                                ) : (
                                  <FormControl
                                    control="input"
                                    type="text"
                                    label="Title"
                                    name={`past_jobs[${i}].title`}
                                    id={`past_jobs[${i}].title`}
                                    value={values?.past_jobs[i].title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                )}
                              </h5>
                              <strong> @ </strong>
                              <h5>
                                {job.id && !isEdit ? (
                                  job?.company_name
                                ) : (
                                  <FormControl
                                    control="input"
                                    type="text"
                                    label="Company Name"
                                    name={`past_jobs[${i}].company_name`}
                                    id={`past_jobs[${i}].company_name`}
                                    value={values?.past_jobs[i].company_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                )}
                              </h5>
                              {job.id && !isEdit ? (
                                <></>
                              ) : (
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fieldArray.remove(i);
                                  }}
                                >
                                  <img src={Icon.Subtract} />
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              }}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}
export function CurrentJob() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="content_box">
      <Formik
        initialValues={{
          current_job: {
            title: userProfile?.current_jobs?.title,
            company_name: userProfile?.current_jobs?.company_name,
          },
          website: userProfile?.website,
        }}
        validationSchema={CurrentJobSchema}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setIsEdit(false);
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          dirty,
          handleSubmit,
          handleReset,
        }) => (
          <form>
            <div className="edit-icons">
              <ul>
                <li>
                  {dirty ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      Save
                    </a>
                  ) : (
                    <></>
                  )}
                </li>

                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEdit(!isEdit);
                    }}
                  >
                    {isEdit ? (
                      <img
                        height={20}
                        width={20}
                        src={Icon.Cancel}
                        onClick={() => handleReset()}
                      />
                    ) : (
                      <img src={Icon.Pencil} />
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <h4>YOUR CURRENT JOB</h4>

            <div className="row">
              <div className="col-md-6">
                <FormControl
                  control="input"
                  type="text"
                  label="Title"
                  name={`current_job.title`}
                  id={`current_job.title`}
                  disabled={!isEdit}
                  value={values?.current_job?.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="col-md-6">
                <FormControl
                  control="input"
                  type="text"
                  label="Company"
                  disabled={!isEdit}
                  name={`current_job.company_name`}
                  id={`current_job.company_name`}
                  value={values?.current_job?.company_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="col-md-12">
                <FormControl
                  control="input"
                  type="text"
                  label="WEBSITE LINK"
                  name="website"
                  id="website"
                  disabled={!isEdit}
                  value={values?.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export function Education() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const [educations, setEducations] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (userProfile) {
      const tempArray = userProfile?.educations?.map((item) => ({
        id: item?.id,
        school_university: item?.school_university,
        start_year: parseInt(item?.start_year),
        end_year: parseInt(item?.end_year),
      }));
      setEducations(tempArray);
    }
    return () => {};
  }, [userProfile]);

  return (
    <div className="content_box">
      <Formik
        initialValues={{ educations: educations }}
        validationSchema={EducationSchema}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setIsEdit(false);
        }}
      >
        {({
          values,
          dirty,
          errors,
          handleChange,
          setFieldValue,
          handleBlur,
          handleReset,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="educations"
              render={(fieldArray) => {
                return (
                  <>
                    <div className="edit-icons">
                      <ul>
                        <li>
                          {dirty ? (
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(e);
                              }}
                            >
                              Save
                            </a>
                          ) : (
                            <></>
                          )}
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              fieldArray.push({
                                school_university: "",
                                start_year: "",
                                end_year: "",
                              });
                            }}
                          >
                            <img src={Icon.Plus} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsEdit(!isEdit);
                            }}
                          >
                            {isEdit ? (
                              <img
                                height={20}
                                width={20}
                                src={Icon.Cancel}
                                onClick={() => handleReset()}
                              />
                            ) : (
                              <img src={Icon.Pencil} />
                            )}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h4>EDUCATION</h4>
                    <div className="past-jobs">
                      <ul>
                        {values?.educations?.map((edu, i) => {
                          return (
                            <li
                              key={i}
                              className="img-icon"
                              style={{
                                justifyContent:
                                  edu.id && !isEdit
                                    ? "flex-start"
                                    : "space-between",
                              }}
                            >
                              {edu.id && !isEdit ? (
                                <img src={Icon.Education} />
                              ) : (
                                <></>
                              )}
                              <h5>
                                {edu.id && !isEdit ? (
                                  edu?.school_university
                                ) : (
                                  <FormControl
                                    control="input"
                                    type="text"
                                    label="University/School"
                                    name={`educations[${i}].school_university`}
                                    id={`educations[${i}].school_university`}
                                    value={
                                      values?.educations[i].school_university
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                )}
                              </h5>
                              <span>
                                {edu.id && !isEdit ? (
                                  edu?.start_year
                                ) : (
                                  <FormControl
                                    control="select"
                                    options={ArrayRange(1991, 2022).map(
                                      (item) => {
                                        return { value: item, label: item };
                                      }
                                    )}
                                    label="Start Year"
                                    name={`educations[${i}].start_year`}
                                    id={`educations[${i}].start_year`}
                                    value={values?.educations[i].start_year}
                                    onChange={() => {}}
                                    setFieldValue={setFieldValue}
                                  />
                                )}
                              </span>
                              -
                              <span>
                                {edu.id && !isEdit ? (
                                  edu?.end_year
                                ) : (
                                  <FormControl
                                    control="select"
                                    options={ArrayRange(
                                      values?.educations[i].start_year,
                                      values?.educations[i].start_year + 30
                                    ).map((item) => {
                                      return { value: item, label: item };
                                    })}
                                    label="End Year"
                                    name={`educations[${i}].end_year`}
                                    id={`educations[${i}].end_year`}
                                    value={values?.educations[i].end_year}
                                    onChange={() => {}}
                                    setFieldValue={setFieldValue}
                                  />
                                )}
                              </span>
                              {edu.id && !isEdit ? (
                                <></>
                              ) : (
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    fieldArray.remove(i);
                                  }}
                                >
                                  <img src={Icon.Subtract} />
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              }}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}
export function Birthdate() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  const [isEdit, setIsEdit] = useState(false);

  const getBirthDate = () => {
    return {
      day: new Date(userProfile?.date_of_birth).getDate(),
      month: Months[new Date(userProfile?.date_of_birth).getMonth() || 0].value,
      year: new Date(userProfile?.date_of_birth).getFullYear(),
    };
  };

  return (
    <div className="content_box">
      <Formik
        initialValues={getBirthDate()}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setIsEdit(false);
        }}
      >
        {({ values, handleSubmit, dirty, handleReset, setFieldValue }) => (
          <form>
            <div className="edit-icons">
              <ul>
                <li>
                  {dirty ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      Save
                    </a>
                  ) : (
                    <></>
                  )}
                </li>

                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEdit(!isEdit);
                    }}
                  >
                    {isEdit ? (
                      <img
                        height={20}
                        width={20}
                        src={Icon.Cancel}
                        onClick={() => handleReset()}
                      />
                    ) : (
                      <img src={Icon.Pencil} />
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <h4>DATE OF BIRTH</h4>
            <div className="img-icon">
              <img src={Icon.Calendar} />
              <h5 className="birthdate">
                {isEdit ? (
                  <div className="row">
                    <div className="col-md-6">
                      <FormControl
                        control="select"
                        options={Months}
                        id="month"
                        name="month"
                        value={values.month}
                        onChange={() => {}}
                        label="Month"
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="col-md-2">
                      <FormControl
                        control="select"
                        options={ArrayRange(1, 31).map((item) => {
                          return { value: item, label: item };
                        })}
                        onChange={() => {}}
                        id="day"
                        name="day"
                        value={values.day}
                        label="Day"
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className="col-md-4">
                      <FormControl
                        control="select"
                        options={ArrayRange(1991, 2022).map((item) => {
                          return { value: item, label: item };
                        })}
                        onChange={() => {}}
                        id="year"
                        name="year"
                        value={values.year}
                        label="Year"
                        setFieldValue={setFieldValue}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {getBirthDate().month} {getBirthDate().day},{" "}
                    {getBirthDate().year}
                  </>
                )}
              </h5>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export function Question({ item }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="content_box">
      <Formik
        initialValues={{ question_id: item?.id, answer: item?.answer }}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(UpdateProfile(values));
          setIsEdit(false);
        }}
      >
        {({
          values,
          handleSubmit,
          dirty,
          handleChange,
          handleBlur,
          handleReset,
        }) => (
          <form>
            <div className="edit-icons">
              <ul>
                <li>
                  {dirty ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      Save
                    </a>
                  ) : (
                    <></>
                  )}
                </li>

                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEdit(!isEdit);
                    }}
                  >
                    {isEdit ? (
                      <img
                        height={20}
                        width={20}
                        src={Icon.Cancel}
                        onClick={() => handleReset()}
                      />
                    ) : (
                      <img src={Icon.Pencil} />
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <h4>{item?.question}</h4>
            <div className="img-icon">
              <img src={Icon.Help} />
              {isEdit ? (
                <FormControl
                  control="input"
                  type="text"
                  label=""
                  name={"answer"}
                  id={"answer"}
                  value={values.answer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <p>{item?.answer}</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
