import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Link } from "react-router-dom";

const Youraddress = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    phone: 9956733356,
    street: "23 / 12",
    pincode: 231301,
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    phone: 9956735356,
    street: "20/ 12",
    pincode: 231305,
  },
];

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      country,
      address,
      city,
      region,
      pinCode,
    };
    console.log("Sending data:", data);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setSuccessMessage("Reservation submitted successfully!");
    } catch (error) {
      console.error(error);
      setSuccessMessage("Failed to submit the reservation. Please try again.");
    }
  };

  return (
    <div className="mx-auto mt-10 bg-gray-300 max-w-7xl px-4 sm:px-6 lg:px-8">
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="text-center font-bold text-3xl mb-5 mt-5">
              Personal Information
            </div>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pincode
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Choose any of your existing address
            </p>

            <div className="divide-y bg-gray-200 pl-10 pr-10 divide-gray-100">
              <ul role="list" className="divide-y divide-gray-100">
                {Youraddress.map((Address) => (
                  <li
                    key={Address.email}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <input
                        name="address"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {Address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {Address.email}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {Address.pincode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {Address.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-900">
                        {Address.street}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Payment Methods
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Card
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Cash On delivery
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div> */}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/homepage">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default Checkout;
