'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Student = {
  id: number
  name: string
  usn: string
}

export default function StudentMentorAllocation() {
  const [studentName, setStudentName] = useState('')
  const [usn, setUsn] = useState('')
  const [students, setStudents] = useState<Student[]>([])

  const router = useRouter()

  const handleAddStudent = () => {
    if (studentName && usn) {
      setStudents([...students, { id: students.length + 1, name: studentName, usn }])
      setStudentName('')
      setUsn('')
    }
  }

  const handleAllocate = () => {
    // Navigate to the next page where the master table is displayed
    router.push('/hod/master-table')
  }

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/DRAIT.jpg" 
            alt="Dr. Ambedkar Institute of Technology Logo" 
            className="mx-auto mb-4"
            width={80} 
            height={80}
          />
          <h1 className="text-2xl font-bold text-[#37474F] mb-2">
            Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY
          </h1>
          <p className="text-sm text-gray-600">
            Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India
          </p>
          <h2 className="text-3xl font-bold text-center text-[#37474F] mt-4">
            STUDENT MENTOR ALLOCATION
          </h2>
        </div>

        {/* Dropdowns for Academic Year, Semester, Faculty List, Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <select className="w-full px-4 py-2 border rounded bg-white text-[#37474F]">
            <option>ACADEMIC YEAR</option>
            {/* Add academic year options here */}
          </select>
          <select className="w-full px-4 py-2 border rounded bg-white text-[#37474F]">
            <option>FACULTY LIST</option>
            {/* Add faculty list options here */}
          </select>
          <select className="w-full px-4 py-2 border rounded bg-white text-[#37474F]">
            <option>SEMESTER</option>
            {/* Add semester options here */}
          </select>
          <select className="w-full px-4 py-2 border rounded bg-white text-[#37474F]">
            <option>SECTION</option>
            {/* Add section options here */}
          </select>
        </div>

        {/* Student Allocation Table */}
        <table className="w-full mb-8 border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-[#E0E0E0]">SL NO</th>
              <th className="border p-2 bg-[#E0E0E0]">USN</th>
              <th className="border p-2 bg-[#E0E0E0]">NAME</th>
              <th className="border p-2 bg-[#E0E0E0]">SELECT</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2 text-center">{student.id}</td>
                <td className="border p-2">{student.usn}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mb-8">
          {/* Add new student form */}
          <div className="w-1/2">
            <h3 className="text-lg font-semibold text-[#37474F] mb-2">
              ADDING NEW STUDENT (LATERAL)
            </h3>
            <input
              type="text"
              placeholder="STUDENT NAME"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-2 mb-2 border rounded text-black"
            />
            <input
              type="text"
              placeholder="USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <button
              onClick={handleAddStudent}
              className="w-full bg-[#37474F] text-white py-2 rounded hover:bg-[#2C3E50]"
            >
              ADD
            </button>
          </div>

          {/* Allocate Button */}
          <button
            onClick={handleAllocate}
            className="bg-green-600 text-white py-2 px-8 rounded hover:bg-green-700 self-end"
          >
            ALLOCATE
          </button>
        </div>
      </div>
    </div>
  )
}
