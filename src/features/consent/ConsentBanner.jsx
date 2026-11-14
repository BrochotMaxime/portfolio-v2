import { useConsent } from './useConsent'
import { CONSENT_STATUS } from './consentStorage'

function ConsentBanner() {
  const { consent, consentError, acceptConsent, rejectConsent } = useConsent()

  if (consent !== CONSENT_STATUS.PENDING) {
    return null
  }

  return (
    <section
      className="consent-banner"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-description"
    >
      <div className="consent-banner__content">
        <div className="consent-banner__text">
          <h2 id="consent-banner-title" className="consent-banner__title">
            Privacy preferences
          </h2>

          <p id="consent-banner-description" className="consent-banner__description">
            This website uses optional Google Analytics cookies to measure visits and understand
            which pages are viewed. You can accept or reject analytics tracking and change your
            choice at any time.
          </p>
        </div>

        {consentError && (
          <p className="consent-banner__error" role="alert">
            Your preference could not be saved. Please try again.
          </p>
        )}

        <div className="consent-banner__actions">
          <button
            type="button"
            className="consent-banner__button consent-banner__button--reject"
            onClick={rejectConsent}
          >
            Reject
          </button>

          <button
            type="button"
            className="consent-banner__button consent-banner__button--accept"
            onClick={acceptConsent}
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConsentBanner
