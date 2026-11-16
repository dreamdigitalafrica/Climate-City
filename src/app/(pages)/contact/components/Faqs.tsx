'use client'

import { Icon } from '@iconify/react'

type FaqItemType = {
  id: number
  question: string
  answer: string
  controlsId: string
  headingId: string
  active?: boolean
}

const faqsData: FaqItemType[] = [{"id": 1, "question": "What is Climate City?", "answer": "Climate City is a proposed sustainable community in Nasarawa State, Africa, powered by Climate City.", "controlsId": "faq-collapse-0", "headingId": "faq-heading-0", "active": true}, {"id": 2, "question": "Is the city already built?", "answer": "The project is in pre-development. Images and the interactive masterplan present concepts, with delivery subject to studies, approvals, funding and partnerships.", "controlsId": "faq-collapse-1", "headingId": "faq-heading-1", "active": false}, {"id": 3, "question": "How can I discuss a partnership?", "answer": "Contact Climate City on +234 708 206 4914 or email enquires@theclimatecity.com or use this enquiry form.", "controlsId": "faq-collapse-2", "headingId": "faq-heading-2", "active": false}, {"id": 4, "question": "Can I arrange a visit?", "answer": "Please contact the team before travelling. Visits and project discussions require prior arrangements.", "controlsId": "faq-collapse-3", "headingId": "faq-heading-3", "active": false}, {"id": 5, "question": "Where can I find the masterplan?", "answer": "Use Explore to open the conceptual city map and its destination galleries. A downloadable project overview is also available through the website.", "controlsId": "faq-collapse-4", "headingId": "faq-heading-4", "active": false}]

const Faqs = () => {
  return (
    <section className="bg-default-50 py-20 md:py-25 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-6 max-w-2xl text-center lg:mb-17.5">
          <div className="border-default-200 mb-2.5 inline-flex rounded-full border px-3.75 py-1.25">
            <span className="text-default-500 text-sm font-normal tracking-tight uppercase">FAQs</span>
          </div>
          <h2 className="text-default-900 text-3xl leading-[1.2] font-medium md:text-[34px]">
            Your questions about <span className="text-default-400">Climate City</span>
          </h2>
        </div>

        <div className="hs-accordion-group mx-auto max-w-6xl space-y-4">
          {faqsData.map((item) => (
            <div key={item.id} className={`hs-accordion ${item.active ? 'active' : ''} hs-accordion-active:bg-default-100/30 border-default-300 rounded-xl border border-dashed bg-white p-3.75 transition-all duration-300 md:p-5`} id={item.headingId}>
              <button className="hs-accordion-toggle group text-default-950 flex w-full items-center justify-between text-start font-normal transition-colors md:text-lg lg:text-xl" aria-controls={item.controlsId}>
                {item.question}
                <div className="relative ms-4 flex shrink-0 items-center justify-center">
                  <Icon icon="lucide:plus" className="text-default-600 hs-accordion-active:hidden block size-5" />
                  <Icon icon="lucide:minus" className="text-default-600 hs-accordion-active:block hidden size-5" />
                </div>
              </button>
              <div id={item.controlsId} className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${item.active ? '' : 'hidden'}`} aria-labelledby={item.headingId}>
                <p className="text-default-500 pt-3.75 text-base leading-relaxed font-normal">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs
