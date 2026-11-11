import './index.css'
import { useState, useEffect } from "react";

function App() {
  const [hour, setHour] = useState('00')
  const [minute, setMinute] = useState('00')
  const [second, setSecond] = useState('00')
  const [forma, setForma] = useState('AM')
  const [ho, setHo] = useState(true)

  function clock() {
    const now = new Date()
    setSecond(String(now.getSeconds()).padStart(2, '0'))
    setMinute(String(now.getMinutes()).padStart(2, '0'))

    if (ho) {
      const currentHour = now.getHours()
      const hour12 = currentHour % 12 || 12
      setHour(String(hour12).padStart(2, '0'))
      setForma(currentHour >= 12 ? 'PM' : 'AM')
    } else {
      setHour(String(now.getHours()).padStart(2, '0'))
    }
  }

  useEffect(() => {
    clock()
    const timer = setInterval(clock, 1000)
    return () => clearInterval(timer)
  }, [ho])

  return (
    <>
      <section className="h-screen w-screen bg-blue-900 flex flex-col gap-4 items-center justify-center">
        <div className="h-24 w-76 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl flex justify-center items-center tracking-wide text-5xl font-bold text-white">
          {hour} : {minute} : {second}
        </div>

        {ho && (
          <div className="h-12 w-20 flex items-center justify-center text-3xl font-bold bg-[#b1c9e5] rounded-full">
            {forma}
          </div>
        )}

        <div className="h-10 w-20 rounded-full flex items-center justify-center text-xl font-bold bg-white/10">
          <button
            className={`h-full w-1/2 rounded-full cursor-pointer transition-all ${
              ho ? 'bg-sky-300 text-black' : 'bg-transparent text-white hover:bg-white/20'
            }`}
            onClick={() => setHo(true)}
          >
            12
          </button>
          <button
            className={`h-full w-1/2 rounded-full cursor-pointer transition-all ${
              ho ? 'bg-transparent text-white hover:bg-white/20' : 'bg-sky-300 text-black'
            }`}
            onClick={() => setHo(false)}
          >
            24
          </button>
        </div>
      </section>
    </>
  )
}

export default App