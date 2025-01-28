"use client";

import React, { useEffect, useState } from "react";
import styles from "./validateModal.module.css";
import countryCodes from "./countryCodes.json";
import { generateOTP, login } from "./api";

export default function ValidateModal({ setShowVerifyModal, content }) {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [useEmail, setUseEmail] = useState(true);
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].dial_code);
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        if (accessToken) {
            setShowVerifyModal(false);
        }
    }, [accessToken]);

    const handleSendOtp = () => {
        if (emailOrPhone) {
            generateOTP({
                emailPhone: useEmail ? emailOrPhone : `${selectedCountryCode}${emailOrPhone}`,
                setIsOtpSent: setIsOtpSent,
            });
        }
    };

    const handleVerifyOtp = () => {
        if (otp) {
            login(
                useEmail ? emailOrPhone : `${selectedCountryCode}${emailOrPhone}`,
                otp.trim(),
                setAccessToken,
                content.mmp_submission_link,
                content.mmp_tickets
            );
        }
    };

    const toggleInputType = () => {
        setUseEmail(!useEmail);
        setEmailOrPhone("");
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.form}>
                    <p className={styles.validationHeader}>Validate Information</p>
                    <p className={styles.validationSubText}>
                        Kindly make sure you have registered for the main event.
                    </p>
                    {!isOtpSent ? (
                        <>
                            {useEmail ? (
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                />
                            ) : (
                                <div className={styles.phoneInputContainer}>
                                    <select
                                        value={selectedCountryCode}
                                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                                    >
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.dial_code}>
                                                ({country.dial_code})
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Enter your phone number"
                                        value={emailOrPhone}
                                        onChange={(e) => setEmailOrPhone(e.target.value)}
                                    />
                                </div>
                            )}
                            <button onClick={handleSendOtp}>Send OTP</button>
                            <button onClick={toggleInputType} className={styles.secondaryButton}>
                                {useEmail ? "Use Phone Number" : "Use Email"}
                            </button>

                            <p className={styles.poweredBy}>
                                Form Powered By{" "}
                                <a href="https://makemypass.com" target="_blank" rel="noreferrer">
                                    MakeMyPass
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Enter the OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button onClick={handleVerifyOtp}>Verify OTP</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
