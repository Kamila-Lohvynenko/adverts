import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import Button from "../Button/Button";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

// Custom DatePicker component for Formik
const CustomDatePicker = ({ field, form }) => {
  const today = new Date();
  return (
    <DatePicker
      {...field}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => form.setFieldValue(field.name, val)}
      dateFormat="MMMM d, yyyy"
      minDate={today}
      placeholderText="Booking date*"
      showPopperArrow={false}
      className={css.input}
    />
  );
};

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // imitation request
    try {
      console.log(values);
      toast.success("Your request has been sent successfully");
      resetForm();
    } catch {
      toast.error("Your request has not been sent");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        {/* Name Field */}
        <div className={css.wrapper}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={css.input}
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        {/* Email Field */}
        <div className={css.wrapper}>
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>

        {/* Booking Date Field */}
        <div className={css.wrapper}>
          <Field
            name="bookingDate"
            className={css.input}
            component={CustomDatePicker}
          />
          <ErrorMessage
            name="bookingDate"
            component="div"
            className={css.error}
          />
        </div>

        {/* Comment Field */}
        <div className={css.wrapper}>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={`${css.input} ${css.textarea}`}
          />
        </div>

        {/* Submit Button */}

        <Button text="Send" classCss="center" />
      </Form>
    </Formik>
  );
};

export default BookingForm;
