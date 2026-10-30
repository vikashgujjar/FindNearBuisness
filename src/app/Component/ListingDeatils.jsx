"use client";
import React, { useState } from "react";

const fileCls =
  "field file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-brand-600";

export default function ListingDeatils() {
  const [formData, setFormData] = useState({
    listingName: "",
    listingMobile: "",
    listingEmail: "",
    listingWhatsapp: "",
    listingWebsite: "",
    listingAddress: "",
    listingLat: "",
    listingLng: "",
    countryId: "",
    cityId: [],
    categoryId: "",
    subCategoryId: [],
    profileImage: null,
    coverImage: null,
    serviceLocations: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files, multiple, selectedOptions } = e.target;
    let next = value;
    if (type === "file") next = files[0];
    else if (multiple) next = Array.from(selectedOptions, (o) => o.value);
    setFormData((prev) => ({ ...prev, [name]: next }));
  };

  const text = (name, id, label, placeholder, extra = {}) => (
    <div>
      <label htmlFor={id} className="field-label">{label}</label>
      <input type="text" name={name} id={id} className="field" value={formData[name]} onChange={handleChange} placeholder={placeholder} {...extra} />
    </div>
  );

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data" noValidate className="space-y-4">
      {text("listingName", "listing_name", "Listing Name*", "Listing Name*", { required: true })}
      <div className="grid gap-4 sm:grid-cols-2">
        {text("listingMobile", "listing_mobile", "Phone number", "Phone number")}
        {text("listingEmail", "listing_email", "Email Id", "Email Id")}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {text("listingWhatsapp", "listing_whatsapp", "WhatsApp (e.g. +919876543210)", "Whatsapp Number")}
        {text("listingWebsite", "listing_website", "Website (www.rn53themes.net)", "Website")}
      </div>
      {text("listingAddress", "listing_address", "Shop Address", "Shop address")}
      <div className="grid gap-4 sm:grid-cols-2">
        {text("listingLat", "listing_lat", "Latitude (e.g. 40.730610)", "Latitude")}
        {text("listingLng", "listing_lng", "Longitude (e.g. -73.935242)", "Longitude")}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="country_id" className="field-label">Country</label>
          <select name="countryId" id="country_id" className="field" value={formData.countryId} onChange={handleChange} required>
            <option value="">Select your Country</option>
            <option value="101">India</option>
            <option value="230">United Kingdom</option>
            <option value="231">United States</option>
          </select>
        </div>
        <div>
          <label htmlFor="category_id" className="field-label">Category</label>
          <select name="categoryId" id="category_id" className="field" value={formData.categoryId} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="19">Wedding halls</option>
            <option value="18">Hotel & Food</option>
            <option value="17">Pet shop</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city_id" className="field-label">Cities</label>
          <select multiple name="cityId" id="city_id" className="field h-24" value={formData.cityId} onChange={handleChange}>
            <option value="" disabled>Select your Cities</option>
          </select>
        </div>
        <div>
          <label htmlFor="sub_category_id" className="field-label">Sub Category</label>
          <select multiple name="subCategoryId" id="sub_category_id" className="field h-24" value={formData.subCategoryId} onChange={handleChange}>
            <option value="" disabled>Select Sub Category</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="profile_image" className="field-label">Profile Image</label>
          <input type="file" name="profileImage" id="profile_image" className={fileCls} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cover_image" className="field-label">Cover Image</label>
          <input type="file" name="coverImage" id="cover_image" className={fileCls} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="service_locations" className="field-label">Service Locations</label>
        <textarea
          name="serviceLocations"
          id="service_locations"
          className="field"
          value={formData.serviceLocations}
          onChange={handleChange}
          placeholder="Enter your service locations... (i.e) London, Dallas"
        />
      </div>
    </form>
  );
}
