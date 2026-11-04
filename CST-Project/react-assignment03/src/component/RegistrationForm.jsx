import React, { useState } from 'react'

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [mobileNumberError, setMobileNumberError] = useState('')

  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let isValid = true

    if (!fullName) {
      setFullNameError('Full Name is required')
      isValid = false
    } else if (fullName.length < 3) {
      setFullNameError('Name must be at least 3 characters')
      isValid = false
    } else {
      setFullNameError('')
    }

    if (!email) {
      setEmailError('Email is required')
      isValid = false
    } else if (!email.includes('@')) {
      setEmailError('Enter a valid email')
      isValid = false
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError('Password is required')
      isValid = false
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters')
      isValid = false
    } else {
      setPasswordError('')
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm your password')
      isValid = false
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match')
      isValid = false
    } else {
      setConfirmPasswordError('')
    }

    if (!mobileNumber) {
      setMobileNumberError('Mobile number is required')
      isValid = false
    } else if (mobileNumber.length !== 10) {
      setMobileNumberError('Mobile number must be exactly 10 digits')
      isValid = false
    } else {
      setMobileNumberError('')
    }

    if (isValid) {
      setSubmittedData({
        fullName: fullName,
        email: email,
        mobileNumber: mobileNumber
      })
    } else {
      setSubmittedData(null)
    }
  }

  return (
    <div style={{ width: '350px', margin: '30px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label><br />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && <p style={{ color: 'red' }}>{fullNameError}</p>}
        </div>

        <div>
          <label>Email Address:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>

        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
        </div>

        <div>
          <label>Mobile Number:</label><br />
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {mobileNumberError && <p style={{ color: 'red' }}>{mobileNumberError}</p>}
        </div>

        <br />
        <button type="submit">Submit</button>

        {submittedData && (
          <div style={{ marginTop: '20px', color: 'green' }}>
            <h3>Registration Successful!</h3>
            <p>Full Name: {submittedData.fullName}</p>
            <p>Email: {submittedData.email}</p>
            <p>Mobile Number: {submittedData.mobileNumber}</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default RegistrationForm