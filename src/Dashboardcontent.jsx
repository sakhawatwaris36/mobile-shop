export default function Dashboardcontent() {
  return (
    <div className="ml-64 dashboard p-6 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] min-h-screen text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-gray-400 text-sm">Malik Mobile Dashboard</p>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full border-2 border-blue-500"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        {[
          { title: "Total Orders", value: "1,240" },
          { title: "Pending Orders", value: "23", color: "text-yellow-400" },
          { title: "Monthly Income", value: "$8,540", color: "text-green-400" },
          { title: "Customers", value: "540" }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow hover:scale-105 transition border border-white/10"
          >
            <h2 className="text-gray-400 text-sm">{item.title}</h2>
            <p className={`text-2xl font-bold mt-2 ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}

      </div>

      {/* Graph + Side */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {/* 🔥 Modern Graph */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/10">

          <h2 className="text-lg font-semibold mb-6">
            Monthly Sales Overview 📊
          </h2>

          <div className="flex items-end justify-between h-56 gap-3">

            {[40, 70, 30, 90, 60, 80].map((h, i) => (
              <div
                key={i}
                className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-xl relative group transition duration-300 hover:scale-105"
                style={{ height: `${h}%` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition"></div>
              </div>
            ))}

          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-6">

          <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow border border-white/10 hover:scale-105 transition">
            <h2 className="text-gray-400 text-sm">Today's Orders</h2>
            <p className="text-2xl font-bold mt-2">58</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow border border-white/10 hover:scale-105 transition">
            <h2 className="text-gray-400 text-sm">Today Revenue</h2>
            <p className="text-2xl font-bold mt-2 text-green-400">$1,240</p>
          </div>

        </div>
      </div>

      {/* Table */}
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/10">

        <h2 className="text-lg font-semibold mb-4">
          Recent Orders 🧾
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">

            <thead>
              <tr className="text-gray-400 border-b border-white/10">
                <th className="pb-2">Customer</th>
                <th className="pb-2">Product</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-2">Ali</td>
                <td>iPhone 13</td>
                <td className="text-green-400">Completed</td>
                <td>$1200</td>
              </tr>

              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="py-2">Ahmed</td>
                <td>Samsung S22</td>
                <td className="text-yellow-400">Pending</td>
                <td>$800</td>
              </tr>

              <tr className="hover:bg-white/5">
                <td className="py-2">Sara</td>
                <td>AirPods</td>
                <td className="text-red-400">Cancelled</td>
                <td>$150</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}