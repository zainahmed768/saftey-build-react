/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "react-bootstrap";
const CommonInputField = ({
  placeholder,
  name,
  id,
  accept,
  label,
  className,
  multiple,
  maxLength,
  showCount,
  addonBefore,
  type,
  onChange,
  onBlur,
  value,
  hidden,
  errors,
  touch,
  height = "45px",
  defaultValue,
  disabled,
  max,
  min,
  autocomplete,
  ref,
}) => {
  return (
    <>
      <div className="position-relative">
        <Form.Control
          style={{ height }}
          type={type}
          hidden={hidden}
          id={id}
          multiple
          name={name}
          accept={accept}
          addonBefore={addonBefore}
          showCount={showCount}
          maxLength={maxLength}
          // className={
          //   `ad-input  ${className || ""} ` && errors && "border border-danger "
          // }
          className={`${className || ""} ${
            errors ? "border border-danger" : ""
          }`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          suffix
          disabled={disabled}
          max={max}
          min={min}
          autocomplete={autocomplete}
          ref={ref}
        />
      </div>
      {errors && (
        <p
          className="error"
          style={{
            color: "red",
            fontSize: "13px",
            marginBottom: "0",
            marginTop: "10px",
          }}
        >
          {errors}
        </p>
      )}
    </>
  );
};

export default CommonInputField;
// && touch &&
