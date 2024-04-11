"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("India");

  const getCountry = async () => {
    
    const response = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (!response) return;
    setCountry(response);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return( <div>{country}</div>);
}
