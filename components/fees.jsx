import React from 'react'

const fees = () => {
  return (
    <div>
      <div className="fee-payment-section" id="Fee">
  <h1>Flexible Payment Options</h1>
  <p>You can make your payment using any of the following methods:</p>
  <h2>Bank Transfer Options</h2>
  <div className="payment-options">
    <div className="bank-option">
      <h3>Moniepoint Account</h3>
      <div className="bank-details">
        <p>
          <strong>Bank Name:</strong> Monieopoint acc
        </p>
        <p>
          <strong>Account Number:</strong> 6514221660
        </p>
        <p>
          <strong>Account Name:</strong> [The Inspired Elites Global Academy]
        </p>
      </div>
      <p>Make transfer to the Moniepoint account details above</p>
    </div>
    <div className="bank-option">
      <h3>Zenith Bank Account</h3>
      <div className="bank-details">
        <p>
          <strong>Bank Name:</strong> Zenith Bank
        </p>
        <p>
          <strong>Account Number:</strong> 1313217426
        </p>
        <p>
          <strong>Account Name:</strong> [The Inspired Elites Global Academy]
        </p>
      </div>
      <p>Make transfer to the Zenith Bank account details above</p>
    </div>
  </div>
  <h2>Online Payment</h2>
  {/* <div className="online-payment">
    <p>
      For your convenience, you can also pay online using our secure payment
      gateway:
    </p>
    <a href="#" className="pay-button">
      PAY ONLINE
    </a>
  </div> */}
  <div className="after-payment">
    <h2>After Payment</h2>
    <p>Once your payment is completed:</p>
    <ol>
      <li>Return to our website</li>
      <li>Fill out the registration form</li>
      <li>Upload your payment confirmation (if required)</li>
    </ol>
    <p>
      For payment verification or assistance, please contact{" "}
      <a href="mailto:Elitescollege@gmail.com">Elitescollege@gmail.com</a> or call +234
      8133478247
    </p>
  </div>
</div>

    </div>
  )
}

export default fees
