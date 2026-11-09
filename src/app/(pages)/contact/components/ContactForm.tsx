'use client'

const ContactForm = () => {
  return (
    <section id="enquiry" className="bg-default-50 py-20 md:py-25 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-6 max-w-3xl text-center lg:mb-17.5">
          <h2 className="text-default-900 text-3xl leading-[1.2] font-medium md:text-[40px]">
            Let’s start a <span className="text-default-400">conversation</span>
          </h2>
        </div>

        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-3.75 md:p-7.5 lg:p-12.5">
          <form className="grid grid-cols-1 gap-x-7.5 gap-y-7.5 md:grid-cols-2 lg:gap-x-12.5" onSubmit={(e) => {e.preventDefault();const data=new FormData(e.currentTarget);const message=`Climate City enquiry\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("Phone")}\n${data.get("field")}`;window.location.href="https://wa.me/2347082064914?text="+encodeURIComponent(message)}}>
            <div className="flex flex-col gap-1.25 md:col-span-2">
              <label htmlFor="name" className="text-default-900 text-sm font-normal md:text-base">
                What is your full name?
              </label>
              <input
                type="text"
                id="name"
                required
                name="name"
                placeholder="Type your full name"
                maxLength={256}
                className="border-default-300 text-default-800 placeholder-default-400 focus:border-primary-1 w-full rounded-lg border border-dashed bg-transparent px-5 py-4 transition-colors focus:ring-0"
              />
            </div>

            <div className="flex flex-col gap-1.25">
              <label htmlFor="email" className="text-default-900 text-sm font-normal md:text-base">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your email"
                maxLength={256}
                required
                className="border-default-300 text-default-800 placeholder-default-400 focus:border-primary-1 w-full rounded-lg border border-dashed bg-transparent px-5 py-4 transition-colors focus:ring-0"
              />
            </div>

            <div className="flex flex-col gap-1.25">
              <label htmlFor="Phone" className="text-default-900 text-sm font-normal md:text-base">
                Phone number
              </label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                placeholder="Type your phone number"
                maxLength={256}
                className="border-default-300 text-default-800 placeholder-default-400 focus:border-primary-1 w-full rounded-lg border border-dashed bg-transparent px-5 py-4 transition-colors focus:ring-0"
              />
            </div>

            <div className="flex flex-col gap-1.25 md:col-span-2">
              <label htmlFor="field" className="text-default-900 text-sm font-normal md:text-base">
                Send us a message
              </label>
              <textarea
                id="field"
                required
                name="field"
                placeholder="Type your message"
                maxLength={5000}
                rows={6}
                className="border-default-300 text-default-800 placeholder-default-400 focus:border-primary-1 w-full resize-none rounded-lg border border-dashed bg-transparent px-5 py-4 transition-colors focus:ring-0"
              ></textarea>
            </div>

            <div className="text-start">
              <button
                type="submit"
                className="bg-primary-1 hover:bg-default-800 hover:border-primary-1 text-default-800 inline-block cursor-pointer rounded-full border border-dashed border-transparent px-5 py-3.75 font-medium text-nowrap transition-all duration-300 hover:text-white"
              >
                Continue on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
