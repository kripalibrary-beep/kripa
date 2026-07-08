import React, { useEffect, useState } from 'react';
import SEO from './SEO';
import { db } from '../config/firebaseClient';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

export default function AdminPanel() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterEvent, setFilterEvent] = useState('All');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  
  useEffect(() => {
    // Only fetch registrations if authenticated
    if (!isAuthenticated) return;
    
    const fetchRegistrations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'registrations'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sort by createdAt descending
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRegistrations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [isAuthenticated]);

  const handleAttendanceChange = async (id, currentStatus) => {
    try {
      const newStatus = !currentStatus;
      const regRef = doc(db, 'registrations', id);
      await updateDoc(regRef, {
        attendance: newStatus
      });
      setRegistrations(prev => prev.map(reg => 
        reg.id === id ? { ...reg, attendance: newStatus } : reg
      ));
    } catch (error) {
      console.error("Error updating attendance:", error);
      alert("Failed to update attendance");
    }
  };

  // Extract unique events for filtering dropdown
  const uniqueEvents = ['All', ...new Set(registrations.map(reg => reg.eventTitle))];

  const filteredRegistrations = filterEvent === 'All'
    ? registrations
    : registrations.filter(reg => reg.eventTitle === filterEvent);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password!');
      setPasswordInput('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-[#f7f9fc] flex items-center justify-center px-4">
        <SEO 
          title="Admin Login | Kripa Library" 
          description="Login to access the Head Office Student Event Registrations Control panel." 
        />
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center border border-gray-150">
          <h2 className="text-2xl font-bold text-[#00082E] mb-2">Admin Panel</h2>
          <p className="text-sm text-gray-500 mb-6">Enter password to access the console</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="Password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm"
              autoFocus
            />
            <button 
              type="submit" 
              className="w-full h-11 bg-blue-700 text-white font-semibold text-sm rounded-xl hover:bg-blue-800 transition-colors border-none cursor-pointer"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f7f9fc] py-12 px-4 sm:px-8 lg:px-[77px] font-sans">
      <SEO 
        title="Admin Registration Dashboard | Kripa Library" 
        description="Head Office Student Event Registrations Control panel." 
      />

      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-5 border-b border-gray-250">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00082E] tracking-tight">
              Event Registration Console
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome Head! Here you can check which students have registered and are coming to the library events.
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600">Filter Event:</span>
            <select
              value={filterEvent}
              onChange={(e) => setFilterEvent(e.target.value)}
              className="h-10 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm bg-white font-medium text-gray-800 shadow-sm"
            >
              {uniqueEvents.map((evt, idx) => (
                <option key={idx} value={evt}>{evt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Status indicator blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Registrations</h4>
            <p className="text-3xl font-black text-[#00082E] mt-2">{registrations.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Events</h4>
            <p className="text-3xl font-black text-[#00082E] mt-2">{uniqueEvents.length - 1}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-semibold text-blue-700">Filter Matches</h4>
            <p className="text-3xl font-black text-blue-700 mt-2">{filteredRegistrations.length}</p>
          </div>
        </div>

        {/* Main List Table */}
        {loading ? (
          <div className="w-full text-center py-12">
            <p className="text-gray-500 font-medium">Loading registration details...</p>
          </div>
        ) : error ? (
          <div className="w-full bg-red-50 text-red-700 border border-red-100 rounded-2xl p-6 text-center">
            <p className="font-semibold">Error: {error}</p>
            <p className="text-xs mt-1">Make sure the backend is active on http://localhost:5000</p>
          </div>
        ) : filteredRegistrations.length === 0 ? (
          <div className="w-full bg-white border border-gray-150 rounded-2xl p-12 text-center shadow-sm">
            <p className="text-gray-400 font-medium italic">No students registered yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse m-0">
                <thead>
                  <tr className="bg-[#00082E] text-white border-b border-gray-200">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Student Name</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Contact Info</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Preparing For</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Event Name</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Registered At</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-semibold text-gray-800">{reg.name}</td>
                      <td className="p-4 text-sm">
                        <div className="text-gray-700 font-medium">{reg.email}</div>
                        <div className="text-xs text-gray-400 mt-0.5">Phone: {reg.phone}</div>
                      </td>
                      <td className="p-4 text-sm">
                        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded">
                          {reg.preparingFor}
                        </span>
                      </td>
                      <td className="p-4 text-sm font-semibold text-[#00082E]">{reg.eventTitle}</td>
                      <td className="p-4 text-xs text-gray-400">
                        {new Date(reg.createdAt).toLocaleDateString()} at{' '}
                        {new Date(reg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="p-4 text-sm text-center">
                        <input 
                          type="checkbox" 
                          checked={reg.attendance || false} 
                          onChange={() => handleAttendanceChange(reg.id, reg.attendance || false)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
