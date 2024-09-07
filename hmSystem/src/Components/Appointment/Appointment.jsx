import React from 'react'

const Appointment = () => {
    // function popLabel(){
    //     var allTxt = document.querySelectorAll("input")
    //     allTxt.forEach(function(txt){
    //         txt.addEventListener('focus', function(){
    //             var lbl = document.querySelector(`label[for="${txt.id}"]`)
    //             if(lbl){
    //                 lbl.style.color = 'blue'
    //             }
    //         })

    //         txt.addEventListener('blur',function(){
    //             var lbl = document.querySelector(`label[for="${txt.id}"]`)
    //             if(lbl){
    //                 lbl.style.color = 'gray'
                    // lbl.style.font = 'semibold'
    //             }
    //         })
    //     })
    // } 

    function bookAppointment(){
        alert("Appointment Booked!")
    }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-blue-700 underline text-3xl font-bold text-center mb-8">Book An Appointment</h1>
      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor='input1' className="block font-semibold text-gray-800">Patient Name:</label>
            <input type="text" id='input1' className="w-full px-3 py-2 border
            rounded transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor='input2' className="block font-semibold text-gray-800">Email:</label>
            <input type="email" id='input2' className="w-full px-3 py-2 border rounded transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor='input3' className="block font-semibold text-gray-800">Mobile No.:</label>
            <input type="text" id='input3' className="w-full px-3 py-2 border rounded transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor='input4' className="block font-semibold text-gray-800">Hospital Name:</label>
            <input type="text" id='input4' className="w-full px-3 py-2 border rounded transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor='input5' className="block font-semibold text-gray-800">Doctor Name:</label>
            <select id='input5' className="w-full px-3 py-2 border rounded transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>--Select a Doctor--</option>
              <option>Hugo Lloris</option>
              <option>Mauris auctor</option>
              <option>Michael Owen</option>
              <option>Amina Smith</option>
              <option>Minahil Khan</option>
              <option>Alex Morgan</option>
              
            </select>
          </div>
          <div>
            <label htmlFor='input6' className="block font-semibold text-gray-800">Time Slot:</label>
            <select id='input6' className="w-full px-3 py-2 border rounded blue-500 focus:ring-blue-500out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>--Select a time slot--</option>
              <option>9:00 A.M. - 10:00 A.M.</option>
              <option>10:00 A.M. - 11:00 A.M.</option>
              <option>11:00 A.M. - 12:00 P.M.</option>
              <option>2:00 P.M. - 3:00 P.M.</option>
              <option>3:00 P.M. - 4:00 P.M.</option>
              <option>4:00 P.M. - 5:00 P.M.</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor='input7' className="block font-semibold text-gray-800">Description:</label>
          <textarea id='input7' className="w-full px-3 py-2 border rounded h-40 resize-none transition-all duration-500 ease-out
            hover:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
        </div>
        <div className="flex justify-center">
          <button onClick={bookAppointment} className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};
export default Appointment