"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface StudentDetails {
    name: string;
    dob: string;
    usn: string;
    email: string; // New field for email
    phone: string;
    motherName: string;
    fatherName: string;
    motherPhone: string;
    fatherPhone: string;
    category: string;
    guardianName: string;
    guardianPhone: string;
    bloodGroup: string;
    address: string;
}

const StudentDetailsPage: React.FC = () => {
    const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(null);

    // Fetch student details from database (mocked for demonstration)
    useEffect(() => {
        // Replace with an actual API call to fetch student data
        const fetchStudentDetails = async () => {
            const data = {
                name: "John Doe",
                dob: "01-01-2000",
                usn: "USN001",
                email: "john.doe@example.com", // Mock email data
                phone: "1234567890",
                motherName: "Jane Doe",
                fatherName: "John Senior",
                motherPhone: "0987654321",
                fatherPhone: "1122334455",
                category: "General",
                guardianName: "Guardian Name",
                guardianPhone: "6677889900",
                bloodGroup: "B+",
                address: "123 Main St, City, State, ZIP",
            };
            setStudentDetails(data);
        };
        fetchStudentDetails();
    }, []);

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

            {/* Student Details Content */}
            <main className="py-8">
                <h2 className="text-center text-2xl text-black font-semibold mb-6">Student Details</h2>
                
                {studentDetails ? (
                    <div className="container mx-auto px-4">
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
                            <table className="min-w-full text-left">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Name</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.name}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Date of Birth</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.dob}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">USN</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.usn}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Email ID</th> {/* New Email row */}
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.email}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Phone Number</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.phone}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Mother Name</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.motherName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Father Name</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.fatherName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Mother Phone number</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.motherPhone}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Father Phone number</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.fatherPhone}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Category</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.category}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Guardian Name</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.guardianName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Guardian Phone number</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.guardianPhone}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-6 font-medium text-gray-500">Blood Group</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.bloodGroup}</td>
                                    </tr>
                                    <tr>
                                        <th className="py-3 px-6 font-medium text-gray-500">Address</th>
                                        <td className="py-3 px-6 text-gray-700">{studentDetails.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-700">Loading student details...</p>
                )}
            </main>
        </div>
    );
};

export default StudentDetailsPage;
