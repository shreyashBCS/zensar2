import React, { useState } from 'react';

const Form = () => {
    const [Enquiry, setEnquiry] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [country, setCountry] = useState("");
    const [requirement, setRequirement] = useState("");

    return (
        <>
            <div className=" bg-primary text-white p-4 mt-5" style={{ paddingTop: "150px" }}>
                <h3 className="mb-4">Send us a message</h3>
                <h4 className="mb-4">We'd love to hear from you!</h4>
                <form>
                    <div className="row g-4">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input
                                    placeholder="How can we help you"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Business email address"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="First name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Last name"
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Phone"
                                    type="number"
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input
                                    placeholder="Job Title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Company Name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder="Tell us briefly about your requirement"
                                    type="text"
                                    value={requirement}
                                    onChange={(e) => setRequirement(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Checkboxes Section */}
                    <div className="form-check mt-3 d-flex ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="policyCheck"
                            required
                        />
                        <label className="form-check-label" htmlFor="policyCheck">
                                  I  agree with Zensar's privacy policy
                        </label>
                    </div>
                    <div className="form-check mt-2 form-check mt-3 d-flex ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailConsent"
                            required
                        />
                        <label className="form-check-label" htmlFor="emailConsent">
                            I would like to subscribe to Zensar’s blogs, thought leadership assets, and updates                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 form-check mt-3 d-flex ">
                        <button className="btn btn-light " type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default Form;
