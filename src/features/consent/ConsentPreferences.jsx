import { useEffect, useRef } from 'react'

import { useConsent } from './useConsent'
import { CONSENT_STATUS } from './consentStorage'

function ConsentPreferences() {
  const { consent, consentError, preferencesOpen, acceptConsent, rejectConsent, closePreferences } =
    useConsent()

  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (preferencesOpen && !dialog.open) {
      dialog.showModal()
    } else if (!preferencesOpen && dialog.open) {
      dialog.close()
    }
  }, [preferencesOpen])

  const handleClose = () => {
    closePreferences()
  }

  const statusLabel =
    consent === CONSENT_STATUS.ACCEPTED
      ? 'Accepted'
      : consent === CONSENT_STATUS.REJECTED
        ? 'Rejected'
        : 'Not selected'

  return (
    <dialog
      ref={dialogRef}
      className="consent-preferences"
      aria-labelledby="consent-preferences-title"
      aria-describedby="consent-preferences-description"
      onClose={handleClose}
    >
      <div className="consent-preferences__content">
        <div className="consent-preferences__header">
          <h2 id="consent-preferences-title" className="consent-preferences__title">
            Cookie settings
          </h2>

          <button
            type="button"
            className="consent-preferences__close"
            onClick={closePreferences}
            aria-label="Close cookie settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p id="consent-preferences-description" className="consent-preferences__description">
          This website uses optional Google Analytics cookies to measure visits and page views. You
          can change your preference at any time.
        </p>

        <div className="consent-preferences__category">
          <div>
            <h3 className="consent-preferences__category-title">Analytics</h3>

            <p className="consent-preferences__category-description">
              Measures visits and page views to help understand portfolio traffic.
            </p>
          </div>

          <p className="consent-preferences__status">
            Current choice: <strong>{statusLabel}</strong>
          </p>
        </div>

        {consentError && (
          <p className="consent-preferences__error" role="alert">
            Your preference could not be saved. Please check your browser settings and try again.
          </p>
        )}

        <div className="consent-preferences__actions">
          <button
            type="button"
            className="consent-preferences__button consent-preferences__button--reject"
            onClick={rejectConsent}
          >
            Reject analytics
          </button>

          <button
            type="button"
            className="consent-preferences__button consent-preferences__button--accept"
            onClick={acceptConsent}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ConsentPreferences
