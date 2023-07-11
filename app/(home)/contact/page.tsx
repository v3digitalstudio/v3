export default function Contact() {
  return (
    <div className="p-12">
      <h2 className="font-heading text-2xl">Contact V3</h2>
      <div className="mt-8 max-w-md">
        <div className="grid grid-cols-1 gap-8">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input
              type="date"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">What type of event is it?</span>
            <select className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200">
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              rows={3}
            />
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                    checked
                  />
                  <span className="">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
