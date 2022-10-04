import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { formdata } from "../utils/FormData";

const Create = () => {
  return (
    <Formik
      initialValues={{
        event_name: "",
        host_name: "",
        start_date: "",
        end_date: "",
        location: "",
        event_photo: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <main className="flex flex-col justify-between">
          <h1 className="font-bold text-primaryOne text-3xl md:text-5xl leading-none  text-center lg:text-center mt-5">
            Create your event
          </h1>
          <section
            id="form-container"
            className="px-5 md:px-10 flex justify-center mt-4 md:mt-10  "
          >
            <div
              id="form"
              className="max-h-[100vh] lg:max-h-fit w-full lg:w-2/3 bg-secondaryThree p-5 rounded-lg "
            >
              <form className="flex flex-col gap-y-8 md:gap-y-8">
                {formdata.map((item) => {
                  return (
                    <div
                      id="input-wrapper"
                      key={item.id}
                      className="flex flex-col gap-y-2 md:gap-y-6"
                    >
                      <label className="text-sm md:text-2xl lg:text-2xl text-primaryTwo">
                        {item.labelTitle}
                      </label>
                      <input
                        className={`p-2 md:p-5 text-black rounded-md hover:outline-primaryFour `}
                        type={item.inputType}
                        placeholder={item.placeholder}
                        defaultValue={item.value}
                        required={item.required}
                      ></input>
                    </div>
                  );
                })}
                <hr />
                <div className="flex w-full">
                  <Link to="/" className="flex-1">
                    <button className="w-full flex-1">Cancel</button>
                  </Link>
                  <Link to="/event" className="flex-1">
                    <button
                      type="submit"
                      className="w-full p-3 md:p-4 md:text-1xl font-bold text-white rounded-md bg-gradient-to-r from-primaryThree to-primaryFour cursor-pointer"
                    >
                      Next
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </main>
      )}
    </Formik>
  );
};

export default Create;
