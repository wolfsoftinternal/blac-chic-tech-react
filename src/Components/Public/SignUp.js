import { ErrorMessage, FieldArray, Formik, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Months, SignUpEnum } from "../../Utilities/Enums";
import { ArrayRange } from "../../Utilities/Functions";
import { BackGround, Logo } from "../../Utilities/Icons";
import FormControl from "../Common/Forms/FormControl";
import {
  nextStep,
  prevStep,
  SignInAPI,
  SignUpAPI,
  VerifyEmail,
  VerifyUsername,
} from "../../Store/Reducers/SignInSlice";
import { SignUpSchema } from "../../Utilities/Schema";
import {
  GetCityList,
  GetCountryList,
  GetStateList,
} from "../../Store/Reducers/CommonSlice";

function SignUp(params) {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(({ SignIn }) => SignIn);
  function submit(values) {
    dispatch(SignUpAPI(values));
  }
  return (
    <Formik
      initialValues={SignUpEnum}
      validationSchema={SignUpSchema}
      onSubmit={(values) => submit(values)}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="sign-in-form-wrapper">
            <WizardForm />
            <div className="button-actions">
              {currentStep > 1 ? (
                <a href="#previous" onClick={() => dispatch(prevStep())}>
                  Back
                </a>
              ) : (
                <></>
              )}
              {currentStep < 7 ? (
                <a
                  href="#next"
                  className={currentStep === 1 ? "full" : "half"}
                  onClick={() => {
                    dispatch(nextStep());
                  }}
                >
                  Continue
                </a>
              ) : (
                <></>
              )}
              {currentStep === 7 ? (
                <a type="submit" onClick={handleSubmit} href="#finish">
                  Finish
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
export default SignUp;
function WizardForm({ formData }) {
  const { currentStep } = useSelector(({ SignIn }) => SignIn);
  switch (currentStep) {
    case 1:
      return <StepOne formData={formData} />;
    case 2:
      return <StepTwo formData={formData} />;
    case 3:
      return <StepThree formData={formData} />;
    case 4:
      return <StepFour formData={formData} />;
    case 5:
      return <StepFive formData={formData} />;
    case 6:
      return <StepSix formData={formData} />;
    case 7:
      return <StepSeven formData={formData} />;
    default:
      return <></>;
  }
}

function StepOne() {
  const {
    values: { step_one },
    errors,
    setFieldValue,
    handleBlur,
    handleChange,
  } = useFormikContext();
  useEffect(() => {
    return () => {};
  }, [errors.step_one]);
  const dispatch = useDispatch();
  const [error, setError] = useState({ email: "", userName: "" });
  const { countryList, stateList, cityList } = useSelector(
    ({ Loader }) => Loader
  );
  useEffect(() => {
    dispatch(GetCountryList());
    return () => {};
  }, []);

  return (
    <section>
      <div className="row">
        <div className="col-md-12">
          {/* {console.log(errors)} */}
          <FormControl
            control="input"
            placeholder=""
            type="email"
            id="step_one.email"
            name="step_one.email"
            label="Email"
            value={step_one.email}
            onChange={handleChange}
            style={{
              borderBottom:
                step_one.email &&
                (!errors?.step_one?.email && !error?.email
                  ? "1px solid green"
                  : "1px solid #db2c6f"),
            }}
            onBlur={(e) => {
              e.preventDefault();
              !errors?.step_one?.email &&
                dispatch(VerifyEmail({ email: step_one.email })).then(
                  ({ payload }) => {
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
                  }
                );
              handleBlur(e);
            }}
          />
          {!errors?.step_one?.email && (
            <div className="error">{error?.email}</div>
          )}
        </div>
        <div className="col-md-6">
          <FormControl
            control="input"
            type="text"
            id="step_one.first_name"
            name="step_one.first_name"
            label="First Name"
            value={step_one.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="col-md-6">
          <FormControl
            control="input"
            type="text"
            id="step_one.last_name"
            name="step_one.last_name"
            label="Last Name"
            value={step_one.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="col-md-12">
          <FormControl
            control="input"
            type="text"
            id="step_one.username"
            name="step_one.username"
            label="UserName"
            value={step_one.username}
            onChange={handleChange}
            style={{
              borderBottom:
                step_one.username &&
                (!errors?.step_one?.username && !error?.userName
                  ? "1px solid green"
                  : "1px solid #db2c6f"),
            }}
            onBlur={(e) => {
              e.preventDefault();
              !errors?.step_one?.username &&
                dispatch(VerifyUsername({ username: step_one.username })).then(
                  ({ payload }) => {
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
                  }
                );
              handleBlur(e);
            }}
          />
          {!errors?.step_one?.username && (
            <div className="error">{error?.userName}</div>
          )}
        </div>
        <div className="col-md-12">
          <FormControl
            outerClass="password"
            control="input"
            type="password"
            id="step_one.password"
            name="step_one.password"
            label="Password"
            value={step_one.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="col-md-12">
          <h6>Birthdate</h6>
          <div className="row">
            <div className="col-md-6">
              <FormControl
                control="select"
                options={Months}
                id="step_one.month"
                name="step_one.month"
                value={step_one.month}
                onChange={() => {
                  setFieldValue("step_one.state", "");
                }}
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
                id="step_one.day"
                name="step_one.day"
                value={step_one.day}
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
                id="step_one.year"
                name="step_one.year"
                value={step_one.year}
                label="Year"
                setFieldValue={setFieldValue}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <FormControl
            control="select"
            options={countryList}
            onChange={(value) => dispatch(GetStateList(value))}
            id="step_one.country"
            name="step_one.country"
            value={step_one.country}
            label="Country"
            setFieldValue={setFieldValue}
          />
        </div>
        <div className="col-md-4">
          <FormControl
            control="select"
            options={stateList}
            onChange={(value) => dispatch(GetCityList(value))}
            id="step_one.state"
            name="step_one.state"
            value={step_one.state}
            valu
            label="State"
            setFieldValue={setFieldValue}
          />
        </div>
        <div className="col-md-4">
          <FormControl
            control="select"
            options={cityList}
            onChange={() => {}}
            id="step_one.city"
            name="step_one.city"
            value={step_one.city}
            label="City"
            setFieldValue={setFieldValue}
          />
        </div>
      </div>
    </section>
  );
}
function StepTwo() {
  const {
    values: { step_two },
    errors,
    setFieldValue,
  } = useFormikContext();

  const handleImage = (e, i) => {
    try {
      let file = e?.target?.files[0];
      setFieldValue(`step_two.image[${i}]`, file);
    } catch (error) {}
  };
  return (
    <section>
      <div className="upload-img-wrapper">
        <FieldArray
          name="step_two.image"
          render={(arrayHelper) => (
            <ul>
              <li>
                <h6>UPLOAD PHOTO</h6>
                <div className="form-group">
                  <input
                    type="file"
                    name={"step_two.image[0]"}
                    id={"step_two.image[0]"}
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => handleImage(e, 0)}
                  />
                  <img
                    src={
                      (step_two.image[0] &&
                        URL.createObjectURL(step_two.image[0])) ||
                      BackGround.UploadWithLabel
                    }
                  />
                </div>
              </li>
              <li>
                <div className="form-group">
                  <input
                    type="file"
                    name={`step_two.image[${1}]`}
                    id={`step_two.image[${1}]`}
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => handleImage(e, 1)}
                  />
                  <img
                    src={
                      (step_two.image[1] &&
                        URL.createObjectURL(step_two.image[1])) ||
                      BackGround.Upload
                    }
                  />
                </div>
              </li>
              <li>
                <div className="form-group">
                  <input
                    type="file"
                    name={`step_two.image[${2}]`}
                    id={`step_two.image[${2}]`}
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => handleImage(e, 2)}
                  />
                  <img
                    src={
                      (step_two.image[2] &&
                        URL.createObjectURL(step_two.image[2])) ||
                      BackGround.Upload
                    }
                  />
                </div>
              </li>
              <li>
                <div className="form-group">
                  <input
                    type="file"
                    name={`step_two.image[${3}]`}
                    id={`step_two.image[${3}]`}
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => handleImage(e, 3)}
                  />
                  <img
                    src={
                      (step_two.image[3] &&
                        URL.createObjectURL(step_two.image[3])) ||
                      BackGround.Upload
                    }
                  />
                </div>
              </li>
            </ul>
          )}
        />

        <div className="error">
          <ErrorMessage name="step_two.image" />
        </div>
      </div>
    </section>
  );
}
function StepThree() {
  const {
    values: { step_three },
    handleBlur,
    handleChange,
  } = useFormikContext();
  return (
    <section>
      <h6>SOCIAL MEDIA ACCOUNT</h6>
      <FormControl
        outerClass="social-icon"
        placeholder="https://"
        control="input"
        type="text"
        id="step_three.linkedIn"
        name="step_three.linkedIn"
        value={step_three.linkedIn}
        onChange={handleChange}
        onBlur={handleBlur}
        icon={Logo.LinkedIn}
      />
      <FormControl
        outerClass="social-icon"
        placeholder="https://"
        control="input"
        type="text"
        id="step_three.instagram"
        name="step_three.instagram"
        value={step_three.instagram}
        onChange={handleChange}
        onBlur={handleBlur}
        icon={Logo.Instagram}
      />
      <FormControl
        outerClass="social-icon"
        placeholder="https://"
        control="input"
        type="text"
        id="step_three.twitter"
        name="step_three.twitter"
        value={step_three.twitter}
        onChange={handleChange}
        onBlur={handleBlur}
        icon={Logo.Twitter}
      />
    </section>
  );
}
function StepFour() {
  const {
    values: { step_four },
    handleBlur,
    handleChange,
  } = useFormikContext();
  return (
    <section>
      <div className="job-profile">
        <h6>YOUR CURRENT JOB</h6>
        <div className="row">
          <div className="col-md-6">
            <FormControl
              placeholder=""
              control="input"
              type="text"
              id="step_four.current_job.title"
              name="step_four.current_job.title"
              value={step_four.current_job.title}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Title"
            />
          </div>
          <div className="col-md-6">
            <FormControl
              placeholder=""
              control="input"
              type="text"
              id="step_four.current_job.company_name"
              name="step_four.current_job.company_name"
              value={step_four.current_job.company_name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Company Name"
            />
          </div>
        </div>

        <h6>YOUR PAST JOBS</h6>
        <FieldArray
          name="step_four.past_jobs"
          render={(arrayHelper) => (
            <>
              {step_four?.past_jobs?.map((job, index) => (
                <div className="row" key={index}>
                  <div className="col-md-6">
                    <FormControl
                      placeholder=""
                      control="input"
                      type="text"
                      id={`step_four.past_jobs[${index}].title`}
                      name={`step_four.past_jobs[${index}].title`}
                      value={step_four?.past_jobs[index]?.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Title"
                    />
                  </div>
                  <div className="col-md-6">
                    <FormControl
                      placeholder=""
                      control="input"
                      type="text"
                      id={`step_four.past_jobs[${index}].company_name`}
                      name={`step_four.past_jobs[${index}].company_name`}
                      value={step_four?.past_jobs[index]?.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Company Name"
                    />
                  </div>
                  <div className="remove-btn-block">
                    {index > 0 && (
                      <a
                        href="#"
                        className="remove-btn"
                        onClick={() => arrayHelper.remove(index)}
                      >
                        Remove
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="add-more-btn"
                onClick={() =>
                  arrayHelper.push({ title: "", company_name: "" })
                }
              >
                + Add More
              </a>
            </>
          )}
        />
      </div>
    </section>
  );
}
function StepFive() {
  const {
    values: { step_five },
    handleBlur,
    setFieldValue,
    handleChange,
  } = useFormikContext();
  return (
    <section>
      <div className="eduction-wrappper">
        <h6>EDUCATION</h6>
        <FieldArray
          name="step_five"
          render={(arrayHelper) => (
            <>
              {step_five?.map((education, index) => (
                <div className="row" key={index}>
                  <div className="col-md-12">
                    <FormControl
                      control="input"
                      type="text"
                      id={`step_five[${index}].school_university`}
                      name={`step_five[${index}].school_university`}
                      label="University/School"
                      value={step_five[index]?.school_university}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormControl
                      control="select"
                      options={ArrayRange(1991, 2022).map((item) => {
                        return { value: item, label: item };
                      })}
                      id={`step_five[${index}].start_year`}
                      name={`step_five[${index}].start_year`}
                      value={step_five[index]?.start_year}
                      label="Start Year"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormControl
                      control="select"
                      options={ArrayRange(1991, 2022).map((item) => {
                        return { value: item, label: item };
                      })}
                      id={`step_five[${index}].end_year`}
                      name={`step_five[${index}].end_year`}
                      value={step_five[index]?.end_year}
                      label="End Year"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="remove-btn-block">
                    {index > 0 && (
                      <a
                        href="#"
                        className="remove-btn"
                        onClick={() => arrayHelper.remove(index)}
                      >
                        Remove
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="add-more-btn"
                onClick={() =>
                  arrayHelper.push({
                    school_university: "",
                    start_year: "",
                    end_year: "",
                  })
                }
              >
                + Add More
              </a>
            </>
          )}
        />
      </div>
    </section>
  );
}
function StepSix() {
  const {
    values: { step_six },
    handleBlur,

    handleChange,
  } = useFormikContext();

  return (
    <section>
      <FieldArray
        name="step_six"
        render={(arrayHelper) =>
          step_six.map((item, index) => (
            <FormControl
              control="input"
              placeholder=""
              type="text"
              id={`step_six[${index}].answer`}
              name={`step_six[${index}].answer`}
              label={item.question_id}
              value={step_six[index].answer}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))
        }
      />
    </section>
  );
}
function StepSeven() {
  const {
    values: { step_seven },
    handleBlur,
    handleChange,
  } = useFormikContext();
  return (
    <section>
      <div className="additional-question">
        <h6>ADDITIONAL QUESTION</h6>
        <FormControl
          label="In 10 words, what should the world know about you?"
          control="input"
          type="text"
          id={`step_seven.answer`}
          name={`step_seven.answer`}
          value={step_seven.answer}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </section>
  );
}
