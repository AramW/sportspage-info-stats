'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  // this only exists on the client/browser
  useEffect(() => {
    // this function triggers on first render

    // Check if there is a local Storage field for the cookieBanner
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

    // JSON.parse(window.localStorage.getItem('areCookiesTermsAccepted'));
    // If not then initial value is false
    // If Yes then the initial value is that is stored in the browser
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>
          By continuing to browse the website, please agree the terms and
          conditions for our (yummy) cookies.🍪
        </div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(true);

            setLocalStorage('areCookiesTermsAccepted', true);
            // window.localStorage.setItem(
            // 'areCookiesTermsAccepted',
            // </> JSON.stringify(true),
            // );
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
