import React, { useState } from 'react';

const Doctors = () => {
  const [sortValue, setSortValue] = useState('');
  const [expertiseValue, setExpertiseValue] = useState('');

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="flex justify-between mb-12">
          <div className="flex-1 p-8 bg-blue-700 rounded-lg shadow-lg text-center">
            <h3 className="text-white font-normal mb-4">Today Doctors</h3>
            <p className="text-white text-3xl font-bold mb-2">10</p>
            <p className='text-white font-normal'>Total Doctors 10 today</p>
          </div>
          <div className="flex-1 p-8 bg-blue-700 rounded-lg shadow-lg text-center mx-4">
            <h3 className="text-white font-normal mb-4">Monthly Doctors</h3>
            <p className="text-white text-3xl font-bold mb-2">230</p>
            <p className='text-white font-normal'>Total Doctors 230 this month</p>
          </div>
          <div className="flex-1 p-8 bg-blue-700 rounded-lg shadow-lg text-center">
            <h3 className="text-white font-normal mb-4">Yearly Doctors</h3>
            <p className="text-white text-3xl font-bold mb-2">1,500</p>
            <p className='text-white font-normal'>Total Doctors 1,500 this year</p>
          </div>
        </div>

        {/* Doctor Table */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between mb-8">
            <input
              type="text"
              className="p-3 border border-light-gray rounded-lg w-full md:w-1/4"
              placeholder="Search Doctors"
            />
            <select
              id="sortSelect"
              className="p-3 border border-light-gray rounded-lg w-full md:w-1/4"
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option value="" disabled hidden>
                Sort by...
              </option>
              <option value="None">None</option>
              <option value="name">Name (A-Z)</option>
              <option value="experience">Experience (Years)</option>
              <option value="age">Age</option>
              <option value="patients">Patients Attended</option>
            </select>
            <select
              id="genderSelect"
              className="p-3 border border-light-gray rounded-lg w-full md:w-1/4"
              value={expertiseValue}
              onChange={(e) => setExpertiseValue(e.target.value)}
            >
              <option value="" disabled hidden>
                Expertise
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <button className="btn-blue text-white border bg-blue-700 px-8 py-3 rounded-lg">
              Filter
            </button>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className='bg-gray-300'>
                <th className="p-4 border-b border-light-gray text-left">#</th>
                <th className="p-4 border-b border-light-gray text-left">Doctor</th>
                <th className="p-4 border-b border-light-gray text-left">Qualifications</th>
                <th className="p-4 border-b border-light-gray text-left">Expertise</th>
                <th className="p-4 border-b border-light-gray text-left">Experience</th>
                <th className="p-4 border-b border-light-gray text-left">Age</th>
                <th className="p-4 border-b border-light-gray text-left">Patient Attended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-light-gray">1</td>
                <td className="p-4 border-b border-light-gray">Hugo Lloris</td>
                <td className="p-4 border-b border-light-gray">20 Aug 2021</td>
                <td className="p-4 border-b border-light-gray">Male</td>
                <td className="p-4 border-b border-light-gray">A+</td>
                <td className="p-4 border-b border-light-gray">25</td>
                <td className="p-4 border-b border-light-gray">20</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-light-gray">2</td>
                <td className="p-4 border-b border-light-gray">Mauris auctor</td>
                <td className="p-4 border-b border-light-gray">22 Nov 2023</td>
                <td className="p-4 border-b border-light-gray">Female</td>
                <td className="p-4 border-b border-light-gray">B+</td>
                <td className="p-4 border-b border-light-gray">34</td>
                <td className="p-4 border-b border-light-gray">
                  <button className="btn-light-blue text-light-color border bg-cyan-400 hover:bg-cyan-200 px-4 py-2 rounded-lg">
                    ...
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-light-gray">3</td>
                <td className="p-4 border-b border-light-gray">Michael Owen</td>
                <td className="p-4 border-b border-light-gray">12 Jan 2020</td>
                <td className="p-4 border-b border-light-gray">Male</td>
                <td className="p-4 border-b border-light-gray">O+</td>
                <td className="p-4 border-b border-light-gray">45</td>
                <td className="p-4 border-b border-light-gray">
                  <button className="btn-light-blue text-light-color px-4 py-2 rounded-lg border bg-cyan-400 hover:bg-cyan-200">
                    ...
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-light-gray">4</td>
                <td className="p-4 border-b border-light-gray">Amina Smith</td>
                <td className="p-4 border-b border-light-gray">07 Feb 2001</td>
                <td className="p-4 border-b border-light-gray">Female</td>
                <td className="p-4 border-b border-light-gray">AB+</td>
                <td className="p-4 border-b border-light-gray">28</td>
                <td className="p-4 border-b border-light-gray">
                  <button className="btn-light-blue text-light-color px-4 py-2 rounded-lg border bg-cyan-400 hover:bg-cyan-200">
                    ...
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-light-gray">5</td>
                <td className="p-4 border-b border-light-gray">Minahil Khan</td>
                <td className="p-4 border-b border-light-gray">30 Dec 2019</td>
                <td className="p-4 border-b border-light-gray">Female</td>
                <td className="p-4 border-b border-light-gray">A+</td>
                <td className="p-4 border-b border-light-gray">35</td>
                <td className="p-4 border-b border-light-gray">
                  <button className="btn-light-blue text-light-color px-4 py-2 rounded-lg border bg-cyan-400 hover:bg-cyan-200">
                    ...
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-light-gray">6</td>
                <td className="p-4 border-b border-light-gray">Alex Morgan</td>
                <td className="p-4 border-b border-light-gray">12 Jan 2020</td>
                <td className="p-4 border-b border-light-gray">Male</td>
                <td className="p-4 border-b border-light-gray">O+</td>
                <td className="p-4 border-b border-light-gray">29</td>
                <td className="p-4 border-b border-light-gray">
                  <button className="btn-light-blue text-light-color px-4 py-2 rounded-lg border bg-cyan-400 hover:bg-cyan-200">
                    ...
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
