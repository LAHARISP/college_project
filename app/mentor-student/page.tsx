"use client"; // Ensures this is a client component for hooks

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function StudentMentorAllocation() {
  const [students, setStudents] = useState([]);

  // Fetch students data from the database when the component loads
  useEffect(() => {
    async function fetchStudents() {
      // Replace '/api/students' with your actual API route
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/DRAIT.jpg"
              alt="Institute Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
        </div>
      </header>

      {/* Student Mentor Allocation Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">STUDENT MENTOR ALLOCATION</h2>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {/* Dropdowns */}
          <select className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none">
            <option>ACADEMIC YEAR</option>
            {/* Add more options here */}
          </select>
          <select className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none">
            <option>SEMESTER</option>
            {/* Add more options here */}
          </select>
          <select className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none">
            <option>FACULTY LIST</option>
            {/* Add more options here */}
          </select>
          <select className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none">
            <option>SECTION</option>
            {/* Add more options here */}
          </select>
        </div>

        {/* Student Table */}
        <table className="w-full max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-lg text-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-gray-800">SL NO</th>
              <th className="py-3 px-4 text-gray-800">USN</th>
              <th className="py-3 px-4 text-gray-800">NAME</th>
              <th className="py-3 px-4 text-gray-800">Select</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.usn} className="border-b">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{student.usn}</td>
                <td className="py-3 px-4 text-center">{student.name}</td>
                <td className="py-3 px-4 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Allocate Button */}
        <div className="flex justify-center mt-6">
          <button 
            className="py-2 px-6 text-base font-medium text-white rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            ALLOCATE
          </button>
        </div>

        
      </main>
    </div>
  );
}
