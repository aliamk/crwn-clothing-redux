import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} { ...otherProps }>
    { children }
  </button>
)

/* Both Input and Button take a 'type=submit' property
connects to the handSubmit functions  */

/* Google Sign-In Button Styling: Conditionaly render a className (google-sign-in)  
based on whether a prop is true (isGoogleSignIn), otherwise render an empty string... but always 
render Custom Button
*/
export default CustomButton