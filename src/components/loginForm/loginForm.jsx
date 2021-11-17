import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {login} from '../../store/api-action';
import { PropTypes } from 'prop-types';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

function Basic({ onSubmit }) {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onSubmit({email: values.email, password: values.password});
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
        }) => (
          <form onSubmit={handleSubmit}>
            <h3>Sing in...</h3>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email*"
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password*"
            />
            {errors.password && touched.password && errors.password}
            <a href="/">Forgot password?</a>
            <button type="submit">
              Sing In
            </button>
            <div>
              <input defaultChecked type="checkbox" id="remember" />
              <label htmlFor="remember">Remember password</label>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
Basic.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export {Basic};
export default connect(null, mapDispatchToProps)(Basic);
