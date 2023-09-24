function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch location data");
      }
      return response.json();
    })
    .then((data) => {
      const city = data.city || "unknown city";
      const country = data.country || "unknown country";
      console.log(`You are in ${city}, ${country}`);
    })
    .catch((error) => console.error(error.message));
}

// Test data
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
