import React from 'react'
import { useState } from 'react';

export default function ListingDeatils({setActiveTab}) {
    const [formData, setFormData] = useState({
        listingName: '',
        listingMobile: '',
        listingEmail: '',
        listingWhatsapp: '',
        listingWebsite: '',
        listingAddress: '',
        listingLat: '',
        listingLng: '',
        countryId: '',
        cityId: [],
        categoryId: '',
        subCategoryId: [],
        profileImage: null,
        coverImage: null,
        serviceLocations: ''
      });

      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
          setFormData((prevData) => ({
            ...prevData,
            [name]: files[0]
          }));
        } else if (type === 'checkbox' || type === 'radio') {
          setFormData((prevData) => ({
            ...prevData,
            [name]: e.target.checked
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
      };
    
  return (
    <div className='h-full'>
             <div className=" mx-auto bg-white rounded-md shadow-lg">
            <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              Step 1
            </div>

            <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
              <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
                Listing Details
              </h5>

              <div className="space-y-6">
              <form
        className="listing_form_1 space-y-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        noValidate
      >
        <div className="space-y-4">
          {/* Listing Name */}
          <div className="flex flex-col">
            <label htmlFor="listing_name" className="text-sm font-medium">
              Listing Name*
            </label>
            <input
              type="text"
              name="listingName"
              id="listing_name"
              className="form-control p-2 border border-gray-300 rounded"
              required
              value={formData.listingName}
              onChange={handleChange}
              placeholder="Listing Name*"
            />
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="listing_mobile" className="text-sm font-medium">
                Phone number
              </label>
              <input
                type="text"
                name="listingMobile"
                id="listing_mobile"
                className="form-control p-2 border border-gray-300 rounded"
                value={formData.listingMobile}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="listing_email" className="text-sm font-medium">
                Email Id
              </label>
              <input
                type="text"
                name="listingEmail"
                id="listing_email"
                className="form-control p-2 border border-gray-300 rounded"
                value={formData.listingEmail}
                onChange={handleChange}
                placeholder="Email Id"
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col">
            <label htmlFor="listing_whatsapp" className="text-sm font-medium">
              WhatsApp Number (e.g. +919876543210)
            </label>
            <input
              type="text"
              name="listingWhatsapp"
              id="listing_whatsapp"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.listingWhatsapp}
              onChange={handleChange}
              placeholder="Whatsapp Number"
            />
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label htmlFor="listing_website" className="text-sm font-medium">
              Website (www.rn53themes.net)
            </label>
            <input
              type="text"
              name="listingWebsite"
              id="listing_website"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.listingWebsite}
              onChange={handleChange}
              placeholder="Website"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="listing_address" className="text-sm font-medium">
              Shop Address
            </label>
            <input
              type="text"
              name="listingAddress"
              id="listing_address"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.listingAddress}
              onChange={handleChange}
              placeholder="Shop address"
            />
          </div>

          {/* Latitude and Longitude */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="listing_lat" className="text-sm font-medium">
                Latitude (e.g. 40.730610)
              </label>
              <input
                type="text"
                name="listingLat"
                id="listing_lat"
                className="form-control p-2 border border-gray-300 rounded"
                value={formData.listingLat}
                onChange={handleChange}
                placeholder="Latitude"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="listing_lng" className="text-sm font-medium">
                Longitude (e.g. -73.935242)
              </label>
              <input
                type="text"
                name="listingLng"
                id="listing_lng"
                className="form-control p-2 border border-gray-300 rounded"
                value={formData.listingLng}
                onChange={handleChange}
                placeholder="Longitude"
              />
            </div>
          </div>

          {/* Country Selection */}
          <div className="flex flex-col">
            <label htmlFor="country_id" className="text-sm font-medium">
              Select your Country
            </label>
            <select
              name="countryId"
              id="country_id"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.countryId}
              onChange={handleChange}
              required
            >
              <option value="">Select your Country</option>
              <option value="101">India</option>
              <option value="230">United Kingdom</option>
              <option value="231">United States</option>
            </select>
          </div>

          {/* Cities Selection */}
          <div className="flex flex-col">
            <label htmlFor="city_id" className="text-sm font-medium">
              Select your Cities
            </label>
            <select
              multiple
              name="cityId[]"
              id="city_id"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.cityId}
              onChange={handleChange}
              required
            >
              <option value="">Select your Cities</option>
            </select>
          </div>

          {/* Category Selection */}
          <div className="flex flex-col">
            <label htmlFor="category_id" className="text-sm font-medium">
              Select Category
            </label>
            <select
              name="categoryId"
              id="category_id"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.categoryId}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="19">Wedding halls</option>
              <option value="18">Hotel & Food</option>
              <option value="17">Pet shop</option>
              {/* Add other options */}
            </select>
          </div>

          {/* Sub Category Selection */}
          <div className="flex flex-col">
            <label htmlFor="sub_category_id" className="text-sm font-medium">
              Select Sub Category
            </label>
            <select
              multiple
              name="subCategoryId[]"
              id="sub_category_id"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.subCategoryId}
              onChange={handleChange}
            >
              <option value="">Select Sub Category</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="profile_image" className="text-sm font-medium">
                Choose Profile Image
              </label>
              <input
                type="file"
                name="profileImage"
                id="profile_image"
                className="form-control p-2 border border-gray-300 rounded"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cover_image" className="text-sm font-medium">
                Choose Cover Image
              </label>
              <input
                type="file"
                name="coverImage"
                id="cover_image"
                className="form-control p-2 border border-gray-300 rounded"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Service Locations */}
          <div className="flex flex-col">
            <label htmlFor="service_locations" className="text-sm font-medium">
              Service Locations
            </label>
            <textarea
              name="serviceLocations"
              id="service_locations"
              className="form-control p-2 border border-gray-300 rounded"
              value={formData.serviceLocations}
              onChange={handleChange}
              placeholder="Enter your service locations... (i.e) London, Dallas"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button onClick={()=>setActiveTab(2)} type="submit" className="btn w-full btn-primary px-4 py-2 text-white bg-sky-400  rounded-full hover:bg-blue-700">
            Next
          </button>
        </div>
      </form>
              </div>
            </div>
          </div>
    </div>
  )
}
