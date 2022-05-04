import React, { useState } from "react";
import { Field, ErrorMessage, getIn, FieldArray } from "formik";
import ReactSelect, { components } from "react-select";
import { Icon } from "../../../Utilities/Icons";
// import { ICON, ICONFILLED } from "../../../Utilities/Icons";
function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
      boxShadow: "none",
    };
  }
}

const CustomOption = (props) => {
  const { innerProps, isDisabled, children } = props;
  return !isDisabled ? (
    <div className="my-select__option" {...innerProps}>
      {children}
    </div>
  ) : null;
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={Icon.CiverDown} alt="" />
    </components.DropdownIndicator>
  );
};
const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <img src={Icon.CiverDown} alt="" />
    </components.MultiValueRemove>
  );
};

function Input(props) {
  const {
    name,
    label,
    outerClass,
    innerClass,
    className,
    icon,
    type,
    id,
    ...rest
  } = props;
  const [visible, setVisible] = useState(undefined);
  return (
    <>
      <div className={`form-group ${outerClass || ""}`}>
        {label ? <label htmlFor={id}>{label}</label> : <></>}
        {icon ? <img src={icon} alt="icon" /> : <></>}
        <Field
          className={`${className || ""} ${innerClass || ""}`}
          name={name}
          type={visible || type}
          id={id}
          {...rest}
        />
        {type === "password" ? (
          <div
            className="password-icon1"
            onClick={() => setVisible(visible ? undefined : "text")}
          ></div>
        ) : (
          <></>
        )}
      </div>
      <div className="error">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

function TextArea(props) {
  const { name, label, errors, touched, id, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        component={({ children }) => <div className="error">{children}</div>}
        name={name}
      />
    </div>
  );
}

function Select(props) {
  const {
    name,
    options,
    label,
    isMulti,
    setFieldValue,
    id,
    value,
    className,
    onChange,
    isDisabled,
  } = props;

  const handleChange = (values) => {
    try {
      if (isMulti) {
        let tempArray = [];
        tempArray = values.map((item) => item.value);
        setFieldValue(name, tempArray);
        onChange(tempArray);
      } else {
        setFieldValue(name, values.value);
        onChange(values.value);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const selectedValue = () => {
    if (isMulti) {
      let tempArray = [];
      value?.map((outerItem) => {
        let tempObj = options?.find(
          (item) => item.value.toString() === outerItem.toString()
        );
        tempArray.push(tempObj);
        return null;
      });

      return tempArray;
    } else {
      return options?.find((item) => item.value === value);
    }
  };
  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <ReactSelect
          closeMenuOnSelect={true}
          className={`${className}`}
          isDisabled={isDisabled}
          classNamePrefix="my-select"
          isSearchable={false}
          options={options}
          placeholder={``}
          isClearable={false}
          setFieldValue={setFieldValue}
          value={selectedValue()}
          name={name}
          id={id}
          onChange={(values) => {
            handleChange(values);
          }}
          styles={{
            menu: (base) => ({
              ...base,
              maxWidth: 365,
            }),
          }}
          components={{
            Option: CustomOption,
            DropdownIndicator,
          }}
        />
      </div>
      <div className="error">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <Field name={name}>
        {(formik) => {
          const { field } = formik;
          return options?.map((option) => {
            return (
              <div className="col-md-4" key={option.key}>
                <div className="form-group event-custom-radiobox">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option?.value}
                    checked={
                      field?.value?.toString() === option?.value?.toString()
                    }
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              </div>
            );
          });
        }}
      </Field>

      <ErrorMessage
        component={({ children }) => <div className="error">{children}</div>}
        name={name}
      />
    </>
  );
}

function CheckBoxes(rest) {
  const { label, name, options, values, className, containerClass } = rest;
  return (
    <>
      <label>{label}</label>
      {options?.length > 1 ? (
        <FieldArray
          name={name}
          render={(arrayHelpers) =>
            options.map((tag) => (
              <div className={`form-group ${containerClass}`} key={tag.value}>
                <input
                  name={name}
                  type="checkbox"
                  className={`form-check-input ${className}`}
                  value={tag}
                  checked={values[name].includes(tag.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      arrayHelpers.push(tag.value);
                    } else {
                      const idx = values[name].indexOf(tag.value);
                      arrayHelpers.remove(idx);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor={tag.key}>
                  {tag.key}
                </label>
              </div>
            ))
          }
        />
      ) : (
        <Field name={name} className="row">
          {(formik) => {
            const { field } = formik;
            return options?.map((option) => {
              return (
                <div
                  key={option.key}
                  className={`form-group ${containerClass}`}
                >
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      )}
      <ErrorMessage
        component={({ children }) => <div className="error">{children}</div>}
        name={name}
      />
    </>
  );
}

export { Input, TextArea, Select, RadioButtons, CheckBoxes };
