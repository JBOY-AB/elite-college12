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
      <h3>GTBank Account</h3>
      <div className="bank-details">
        <p>
          <strong>Bank Name:</strong> Guaranty Trust Bank (GTB)
        </p>
        <p>
          <strong>Account Number:</strong> 0316263558
        </p>
        <p>
          <strong>Account Name:</strong> [Your Institution Name]
        </p>
      </div>
      <p>Make transfer to the GTBank account details above</p>
    </div>
    <div className="bank-option">
      <h3>Zenith Bank Account</h3>
      <div className="bank-details">
        <p>
          <strong>Bank Name:</strong> Zenith Bank
        </p>
        <p>
          <strong>Account Number:</strong> 1012675114
        </p>
        <p>
          <strong>Account Name:</strong> [Your Institution Name]
        </p>
      </div>
      <p>Make transfer to the Zenith Bank account details above</p>
    </div>
  </div>
  <h2>Online Payment</h2>
  <div className="online-payment">
    <p>
      For your convenience, you can also pay online using our secure payment
      gateway:
    </p>
    <a href="#" className="pay-button">
      PAY ONLINE
    </a>
  </div>
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
      <a href="mailto:support@example.com">support@example.com</a> or call +234
      XXX XXXX XXX.
    </p>
  </div>
</div>

    </div>
  )
}

export default fees
