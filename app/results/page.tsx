'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface StudentResult {
  name: string;
  usn: string;
  semester: number;
  subjects: Subject[];
  sgpa: number;
  cgpa: number;
}

interface Subject {
  name: string;
  code: string;
  credits: number;
  grade: string;
  total: number;
}

const ResultsPage: React.FC = () => {
  const [studentResult, setStudentResult] = useState<StudentResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/student/results'); // replace with your API endpoint
        setStudentResult(response.data);
      } catch (error) {
        console.error('Error fetching student results:', error);
      }
    };

    fetchData();
  }, []);

  if (!studentResult) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center">
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

      {/* Student Result Content */}
      <main className="py-8 container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">Student Result Details</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Student Details */}
          <table className="min-w-full text-left mb-6">
            <tbody>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">Student Name:</th>
                <td className="py-3 px-6 text-gray-700">{studentResult.name}</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">USN:</th>
                <td className="py-3 px-6 text-gray-700">{studentResult.usn}</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">Semester:</th>
                <td className="py-3 px-6 text-gray-700">{studentResult.semester}</td>
              </tr>
            </tbody>
          </table>

          {/* Subject Details */}
          <h3 className="text-xl font-semibold mb-4">Subject Details</h3>
          <table className="min-w-full border-collapse border border-gray-300 text-left mb-6">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 border border-gray-300">Subject Name</th>
                <th className="py-3 px-6 border border-gray-300">Subject Code</th>
                <th className="py-3 px-6 border border-gray-300">Credits</th>
                <th className="py-3 px-6 border border-gray-300">Grade</th>
                <th className="py-3 px-6 border border-gray-300">Total</th>
              </tr>
            </thead>
            <tbody>
              {studentResult.subjects.map((subject, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.name}</td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.code}</td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.credits}</td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.grade}</td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">{subject.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Overall Performance */}
          <h3 className="text-xl font-semibold mb-4">Overall Performance</h3>
          <table className="min-w-full text-left">
            <tbody>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">SGPA:</th>
                <td className="py-3 px-6 text-gray-700">{studentResult.sgpa}</td>
              </tr>
              <tr>
                <th className="py-3 px-6 font-medium text-gray-500">CGPA:</th>
                <td className="py-3 px-6 text-gray-700">{studentResult.cgpa}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
