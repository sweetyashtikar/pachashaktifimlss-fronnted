"use client";
import React, { useState } from "react";

const tabs = [
  "Basic Details",
  "Basic Personal Information",
  "Professional Interests",
  "Experience / Camera Skills",
  "Physical Measurements",
  "Appearance / Body Details",
  "Personal Habits",
  "Location & Availability",
];

const Input = ({ label }) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type="text"
      className="mt-1 w-full bg-[#1a1a1a] border border-yellow-500/30
                 rounded-lg px-4 py-2 text-white
                 focus:outline-none focus:border-yellow-500"
    />
  </div>
);

export default function ProfileForm() {
  const [activeTab, setActiveTab] = useState("Basic Details");

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex">

      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-72 bg-[#111] border-r border-yellow-500/20 p-6">
        <h2 className="text-xl font-bold mb-1">Priya Malik</h2>
        <p className="text-xs text-gray-400 mb-6">
          Complete your profile
        </p>

        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm
                ${
                  activeTab === tab
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-[#1a1a1a]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </aside>

      {/* ================= RIGHT CONTENT ================= */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* ===== BASIC DETAILS ===== */}
          {activeTab === "Basic Details" && (
            <Section title="Basic Details">
              <Grid>
                <Input label="First Name" />
                <Input label="Middle Name" />
                <Input label="Last Name" />
                <Input label="Email" />
                <Input label="Phone" />
                <Input label="Age" />
              </Grid>
            </Section>
          )}

          {/* ===== BASIC PERSONAL INFORMATION ===== */}
          {activeTab === "Basic Personal Information" && (
            <Section title="Basic Personal Information">
              <Grid>
                <Input label="Full Name" />
                <Input label="Nationality" />
                <Input label="Marital Status" />
                <Input label="Education" />
              </Grid>
            </Section>
          )}

          {/* ===== PROFESSIONAL INTERESTS ===== */}
          {activeTab === "Professional Interests" && (
            <Section title="Professional Interests">
              <Grid>
                <Input label="Acting" />
                <Input label="Voice Over" />
                <Input label="Music & Dance" />
                <Input label="Anchoring" />
                <Input label="Modeling" />
                <Input label="Content Creator" />
              </Grid>
            </Section>
          )}

          {/* ===== EXPERIENCE / CAMERA SKILLS ===== */}
          {activeTab === "Experience / Camera Skills" && (
            <Section title="Experience / Camera Skills">
              <Grid>
                <Input label="Films" />
                <Input label="Web Series" />
                <Input label="Short Films" />
                <Input label="Theatre Experience" />
                <Input label="Camera Facing" />
                <Input label="Improvisation" />
              </Grid>
            </Section>
          )}

          {/* ===== PHYSICAL MEASUREMENTS ===== */}
          {activeTab === "Physical Measurements" && (
            <Section title="Physical Measurements">
              <Grid>
                <Input label="Height" />
                <Input label="Weight" />
                <Input label="Chest" />
                <Input label="Waist" />
                <Input label="Hip" />
                <Input label="Body Type" />
              </Grid>
            </Section>
          )}

          {/* ===== APPEARANCE / BODY DETAILS ===== */}
          {activeTab === "Appearance / Body Details" && (
            <Section title="Appearance / Body Details">
              <Grid>
                <Input label="Skin Tone" />
                <Input label="Eye Color" />
                <Input label="Hair Color" />
                <Input label="Hair Type" />
                <Input label="Beard" />
                <Input label="Tattoo" />
              </Grid>
            </Section>
          )}

          {/* ===== PERSONAL HABITS ===== */}
          {activeTab === "Personal Habits" && (
            <Section title="Personal Habits">
              <Grid>
                <Input label="Smoking" />
                <Input label="Drinking" />
                <Input label="Diet" />
              </Grid>
            </Section>
          )}

          {/* ===== LOCATION & AVAILABILITY ===== */}
          {activeTab === "Location & Availability" && (
            <Section title="Location & Availability">
              <Grid>
                <Input label="Current City" />
                <Input label="Willing to Travel" />
                <Input label="Available for Outstation Shoot" />
              </Grid>
            </Section>
          )}

          {/* ===== SAVE BUTTON ===== */}
          <div className="pt-6">
            <button className="bg-yellow-500 text-black font-bold
                               px-10 py-3 rounded-lg
                               hover:bg-yellow-400 transition">
              Save & Continue
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid md:grid-cols-3 gap-6">{children}</div>
);
