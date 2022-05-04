import React, { useEffect, useRef, useState } from "react";
import { BackGround, Icon, Logo } from "../../../Utilities/Icons";

import { Formik, Form, Field, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import FormControl from "../../Common/Forms/FormControl";
import { EventEnum } from "../../../Utilities/Enums";
import {
  GetCityList,
  GetCountryList,
  GetStateList,
} from "../../../Store/Reducers/CommonSlice";

const PostEvent = (props) => {
  const dispatch = useDispatch();
  const { countryList, stateList, cityList } = useSelector(
    ({ Loader }) => Loader
  );
  const fileRef = useRef();
  const id = 0;

  const inputArr = [
    {
      type: "text",
      id: id,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          id: s[s.length - 1].id + 1,
          value: "",
        },
      ];
    });
  };

  const eventFormSchema = Yup.object().shape({
    eventTitle: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field is required."),
    imageUrl: Yup.string().required("Please choose any image."),
    startDate: Yup.date().required("Please select start date."),
    startTime: Yup.string().required("Please select start time."),
    endDate: Yup.date().when(
      "startDate",
      (startDate, schema) =>
        startDate &&
        schema.min(startDate, "Event end date should be later than start date.")
    ),
    endTime: Yup.string(),
    venue: Yup.string().required("Please enter the venue."),
    city: Yup.string().required("Please enter the city."),
    country: Yup.string().required("Please enter the country."),
    catType: Yup.string().required("Please enter category type."),
  });

  useEffect(() => {
    dispatch(GetCountryList());
    return () => {};
  }, []);

  return (
    <div
      className={`modal fade post-modal ${props.modelClass}`}
      id="create-new-post-events"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="post-title">
            <h6>CREATE NEW EVENT</h6>
          </div>
          <Formik
            initialValues={EventEnum}
            validationSchema={eventFormSchema}
            onSubmit={(values) => {
              console.log(values);
              // dispatch(createEvent(values));
              props.closeModel();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {console.log(values)}
                <div className="row">
                  <div className="col-md-12">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      name="poster"
                      hidden
                      onChange={(e) => {
                        e.preventDefault();
                        setFieldValue("poster", e.target.files[0]);
                      }}
                    />
                    <div
                      onClick={() =>
                        fileRef.current && fileRef.current?.click()
                      }
                    >
                      {!values.poster ? (
                        <div className="form-group file-upload">
                          <div className="file-upload-content">
                            <img src={Icon.AddEvent} />
                            <h6>Upload image poster</h6>
                            <p>16:9 aspect ratio recommended</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          style={{ marginBottom: "20px" }}
                          src={URL.createObjectURL(values.poster)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <FormControl
                      control="input"
                      name="title"
                      id="title"
                      label="EVENT TITLE"
                      type="text"
                      placeholder="Enter Event Title"
                      value={values.title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormControl
                      control="input"
                      name="start_date"
                      id="start_date"
                      label="START DATE"
                      type="date"
                      placeholder="Select Start Date"
                      value={values.start_date}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormControl
                      control="input"
                      name="start_time"
                      id="start_time"
                      label="START TIME"
                      type="time"
                      placeholder="Select Start Time"
                      value={values.start_time}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormControl
                      control="checkbox"
                      name="isEndTime"
                      values={values.isEndTime}
                      options={[
                        {
                          key: "Add End Date and Time",
                          value: values.isEndTime,
                        },
                      ]}
                      containerClass="event-custom-checkbox"
                    />
                  </div>

                  {values.isEndTime ? (
                    <>
                      <div className="col-md-6">
                        <FormControl
                          control="input"
                          name="end_date"
                          id="end_date"
                          label="END DATE"
                          type="date"
                          placeholder="Enter Event Title"
                          value={values.end_date}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <FormControl
                          control="input"
                          name="end_time"
                          id="end_time"
                          label="END TIME"
                          type="time"
                          placeholder="Select End Time"
                          value={values.end_time}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="col-md-12">
                    <FormControl
                      control="input"
                      name="venue"
                      id="venue"
                      label="VENUE"
                      type="text"
                      placeholder="Enter Event Venue"
                      value={values.venue}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-group address-icon">
                      <label>ADDRESS</label>
                      <input
                        type="text"
                        placeholder="Enter Event Address"
                        value={values.address}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      control="select"
                      className="type-select"
                      options={countryList}
                      onChange={(value) => dispatch(GetStateList(value))}
                      id="country_id"
                      name="country_id"
                      value={values?.country_id}
                      label="Country"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      control="select"
                      className="type-select"
                      options={stateList}
                      onChange={(value) => dispatch(GetCityList(value))}
                      id="state_id"
                      name="state_id"
                      value={values.state_id}
                      label="State"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormControl
                      control="select"
                      className="type-select"
                      options={cityList}
                      onChange={() => {}}
                      id="city_id"
                      name="city_id"
                      value={values.city_id}
                      label="City"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormControl
                      control="textArea"
                      label="EVENT DETAILS"
                      placeholder="Ex: Topics, Schedule, etc."
                      value={values.details}
                      name="details"
                      id="details"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-group speakers-search-wrapper">
                      <label>SPEAKERS</label>
                      <input
                        type="search"
                        placeholder="Search Speakers Name..."
                        name="speakers"
                        id="myInput"
                        value={values.speakers}
                        onChange={handleChange}
                      />
                      <p>
                        Confirmed speakers will be shown in the event’s Details
                        section.
                      </p>

                      {/* <div className="speakers-add">
                                                <ul>
                                                    <li>
                                                        <img src="img/slider-author-img.png" />
                                                        <h5>Rianti Catwright</h5>
                                                        <p>UI/UX Designer at Shopee</p>
                                                        <a href={undefined} className="close-speakers"><span className="iconify" data-icon="eva:close-outline"></span></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                      {/* <div className="speakers-search-list">
                                                <ul>
                                                    <li>
                                                        <img src="img/slider-author-img.png" />
                                                        <h5>Rianti1 Catwright</h5>
                                                        <p>UI/UX Designer at Shopee</p>
                                                    </li>
                                                    <li>
                                                        <img src="img/slider-author-img.png" />
                                                        <h5>Rianti2 Catwright</h5>
                                                        <p>UI/UX Designer at Shopee</p>
                                                    </li>
                                                    <li>
                                                        <img src="img/slider-author-img.png" />
                                                        <h5>Rianti3 Catwright</h5>
                                                        <p>UI/UX Designer at Shopee</p>
                                                    </li>
                                                    <li>
                                                        <img src="img/slider-author-img.png" />
                                                        <h5>Rianti4 Catwright</h5>
                                                        <p>UI/UX Designer at Shopee</p>
                                                    </li>
                                                </ul>
                                            </div> */}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>HOST</label>
                      <input
                        type="search"
                        placeholder="Search Host Name..."
                        name="host"
                        value={values.host}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>ADMISSION OPTIONS</label>
                      <div className="row">
                        <FormControl
                          control="radio"
                          name="admission_type"
                          id="admission_type"
                          value={values.admission_type}
                          options={[
                            { value: "ticketprice", key: "Ticket Price" },
                            { value: "inviteonly", key: "Invite Only" },
                            { value: "free", key: "Free" },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  <FieldArray
                    name="admission_data"
                    render={(arrayHelper) => {
                      return (
                        <>
                          {values?.admission_data?.map((item, index) => (
                            <>
                              {values.admission_type === "ticketprice" && (
                                <>
                                  <div className="col-md-12">
                                    <div className="form-group currency-icon">
                                      <span>$</span>
                                      <input
                                        type="number"
                                        name={`values.admission_data[${index}].price`}
                                        value={
                                          values.admission_data[index].price
                                        }
                                        onChange={handleChange}
                                        placeholder="Enter Ticket Price"
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                              <div className="col-md-12">
                                <div className="form-group category-type-select">
                                  <FormControl
                                    control="select"
                                    className="type-select"
                                    options={[
                                      { label: "Premium", value: "premium" },
                                      { label: "Platinum", value: "platinum" },
                                      { label: "Gold", value: "gold" },
                                      { label: "Silver", value: "silver" },
                                      { label: "Bronze", value: "bronze" },
                                    ]}
                                    onChange={() => {}}
                                    id={`values.admission_data[${index}].category`}
                                    name={`values.admission_data[${index}].category`}
                                    value={
                                      values.admission_data[index].category
                                    }
                                    label="CATEGORY TYPE"
                                    setFieldValue={setFieldValue}
                                  />
                                </div>
                                <label>BENEFITS</label>
                                <div className="benefits-select">
                                  <ul>
                                    <FieldArray
                                      name={`values.admission_data[${index}].benifits`}
                                      render={(arrayInnerHelpers) => (
                                        <div>
                                          {values?.admission_data[
                                            index
                                          ].benifits?.map((item, i) => (
                                            <li key={i}>
                                              <input
                                                name={`values.admission_data[${index}].benifits[${i}]`}
                                                id={`values.admission_data[${index}].benifits[${i}]`}
                                                type="text"
                                                size="40"
                                                onChange={handleChange}
                                              />
                                              {i !== 0 && (
                                                <a
                                                  href="#"
                                                  onClick={(e) => {
                                                    arrayInnerHelpers.remove(i);
                                                  }}
                                                >
                                                  +
                                                </a>
                                              )}
                                            </li>
                                          ))}
                                          <a
                                            href={undefined}
                                            className="add-more-btn"
                                            onClick={() =>
                                              arrayInnerHelpers.push("")
                                            }
                                          >
                                            <strong>+</strong> ADD MORE
                                          </a>
                                        </div>
                                      )}
                                    />
                                  </ul>
                                </div>
                              </div>
                            </>
                          ))}

                          <a
                            href="#"
                            className="add-new-ticket"
                            onClick={(e) => {
                              e.preventDefault();
                              arrayHelper.push({
                                price: "",
                                category: "premium",
                                benifits: [],
                              });
                            }}
                          >
                            <strong>+</strong> Add new ticket category
                          </a>
                        </>
                      );
                    }}
                  />
                </div>
                <div className="actions post-events">
                  <ul>
                    <li className="post-events-close">
                      <a href={undefined} onClick={props.closeModel}>
                        +
                      </a>
                    </li>
                    <li className="post-public-events">
                      <a href="#finish" onClick={handleSubmit}>
                        Publish Event
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostEvent;
