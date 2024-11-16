'use client'

import Image from 'next/image'
import { useState } from 'react'

interface StudentData {
  name: string
  usn: string
  semester: string
}

interface CourseRegistrationProps {
  studentData?: StudentData
}

export default function CourseRegistration({ 
  studentData = {
    name: "",
    usn: "",
    semester: ""
  }
}: CourseRegistrationProps) {
  const [subjects, setSubjects] = useState<SubjectData[]>([])
  const [currentSubject, setCurrentSubject] = useState({
    subjectType: '',
    subjectCode: '',
    subjectName: '',
    credits: ''
  })

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setCurrentSubject(prev => ({ ...prev, [name]: value }))
  }

  const handleAddSubject = () => {
    if (currentSubject.subjectType && currentSubject.subjectCode && 
        currentSubject.subjectName && currentSubject.credits) {
      setSubjects(prev => [...prev, { id: Date.now(), ...currentSubject }])
      setCurrentSubject({
        subjectType: '',
        subjectCode: '',
        subjectName: '',
        credits: ''
      })
    }
  }

  const handleSave = () => {
    console.log('Saved Data:', { studentData, subjects })
    // Here you would typically send this data to your backend
  }

  const handleSubmit = () => {
    console.log('Submitted Data:', { studentData, subjects })
    // Here you would typically send this data to your backend and maybe redirect the user
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-black">
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
              <h1 className="text-xl font-bold text-white">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm opacity-90 text-white">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col items-center p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">COURSE-REGISTRATION</h2>
        
        <div className="w-full max-w-4xl space-y-6">
          {/* Student Details */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-black font-semibold mb-1">NAME:</label>
              <input
                type="text"
                value={studentData?.name}
                readOnly
                className="p-2 border rounded text-black bg-gray-100"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-semibold mb-1">USN:</label>
              <input
                type="text"
                value={studentData?.usn}
                readOnly
                className="p-2 border rounded text-black bg-gray-100"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-semibold mb-1">SEMESTER:</label>
              <input
                type="text"
                value={studentData?.semester}
                readOnly
                className="p-2 border rounded text-black bg-gray-100"
              />
            </div>
          </div>

          {/* Subject Selection */}
          <div className="grid grid-cols-2 gap-4">
            <select
              name="subjectType"
              value={currentSubject.subjectType}
              onChange={handleSubjectChange}
              className="p-2 bg-[#2B4B8C] text-white rounded"
            >
              <option value="">SUBJECT TYPE</option>
              <option value="Core">Core</option>
              <option value="Elective">Elective</option>
              <option value="Open Elective">Open Elective</option>
            </select>
            <select
              name="subjectName"
              value={currentSubject.subjectName}
              onChange={handleSubjectChange}
              className="p-2 bg-[#2B4B8C] text-white rounded"
            >
              <option value="">SUBJECT NAME</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Computer Networks">Computer Networks</option>
              <option value="Database Management">Database Management</option>
            </select>
            <select
              name="subjectCode"
              value={currentSubject.subjectCode}
              onChange={handleSubjectChange}
              className="p-2 bg-[#2B4B8C] text-white rounded"
            >
              <option value="">SUBJECT CODE</option>
              <option value="MAT101">MAT101</option>
              <option value="CSE201">CSE201</option>
              <option value="CSE202">CSE202</option>
            </select>
            <select
              name="credits"
              value={currentSubject.credits}
              onChange={handleSubjectChange}
              className="p-2 bg-[#2B4B8C] text-white rounded"
            >
              <option value="">CREDITS</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleAddSubject}
              className="px-6 py-2 bg-[#2B4B8C] text-white rounded hover:bg-blue-700 transition"
            >
              ADD SUBJECT
            </button>
          </div>

          {/* Subjects Table */}
          {subjects.length > 0 && (
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="bg-[#2B4B8C] text-white p-3 text-left">Subject Type</th>
                  <th className="bg-[#2B4B8C] text-white p-3 text-left">Subject Code</th>
                  <th className="bg-[#2B4B8C] text-white p-3 text-left">Subject Name</th>
                  <th className="bg-[#2B4B8C] text-white p-3 text-left">Credits</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id}>
                    <td className="border p-3 text-black">{subject.subjectType}</td>
                    <td className="border p-3 text-black">{subject.subjectCode}</td>
                    <td className="border p-3 text-black">{subject.subjectName}</td>
                    <td className="border p-3 text-black">{subject.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              SAVE
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SubjectData {
  id: number
  subjectType: string
  subjectCode: string
  subjectName: string
  credits: string
}