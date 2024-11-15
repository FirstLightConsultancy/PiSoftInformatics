import React from "react";

export default function DigitalMarketing() {
  const items1: string[] = ["Ranking in first 2 search result pages of Google - 5-8 Keywords / Phrases", "Google analytics for site performance reviews", "Generation and submission of Site Map", "Monthly Search Engine Ranking Report", "Keywords & Phrases targeted - 20" , "Meta Tags Composition (5 Pages)", "Keywords & Phrases Analysis", " Web & mobile devices search", "Directory Submission – 20", "Quality back links" ];
  const items2: string[] = ["Ranking in first 2 search result pages of Google - 8-12 Keywords / Phrases", "Google analytics for site performance reviews", "Generation and submission of Site Map", "Monthly Search Engine Ranking Report", "Keywords & Phrases targeted - 40","Meta Tags Composition (15 Pages)", "Keywords & Phrases Analysis", "Web & mobile devices search", "Directory Submission – 50", "Quality back links" ];
  const items3: string[] = ['Ranking in first 2 search result pages of Google - 10-14 Keywords / Phrases', 'Google analytics for site performance reviews', 'Generation and submission of Site Map', 'Monthly Search Engine Ranking Report', 'Keywords & Phrases targeted - 50','Meta Tags Composition (5 Pages)', 'Keywords & Phrases Analysis', 'Web & mobile devices search', 'Directory Submission – 80', 'Quality back links' ];
  const items4: string[] = ['Mailers to specific target database for offer details / like us / visit us / Newsletter', 'YouTube video promotions and likes / share', 'Reciprocal linking to Facebook articles', 'Indexing on Industry specific portal', 'On Page / Off Page content editing','Popularity campaign on Facebook', 'Article / Blog Submission', 'Facebook Page creation', 'Facebook Group Creation', 'Generating Likes' ];

  return (
    <div>
      <div className="relative h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight pb-4">
            Digital Marketing
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Your <span className="text-green-300"> brand&apos;s</span> voice,
                  amplified in the
                  <span className="text-green-300"> digital world.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  The rules are changing. You&apos;ve worked hard at building your
                  business, and are looking for new ways of marketing it online
                  to attract customers and grow revenues. We tirelessly study
                  digital marketing trends, and the technologies behind their
                  successful applications. Aimed at helping entrepreneurs
                  position themselves effectively online. How do we do this? By
                  knowing our role -- and helping you understand it. We have a
                  unique approach to client development, and our promotional
                  discount on new advertising campaigns. There was a time when
                  marketing was mainly a budget-driven, zero-sum game.
                </p>
                <p className="text-xl">
                  The biggest names with the biggest marketing budgets took all
                  the spotlight from their smaller competitors. As digital
                  communications have evolved, however, the marginal costs of
                  internet marketing have fallen. Consumer habits reward
                  well-targeted messages. Markets appear where we never knew
                  they existed. Niche players can now position their product in
                  front of the exact audience that has been waiting for them.
                  With search engines reaching near-ubiquity in the United
                  States, the size of the audience at arm&apos;s length provides a
                  vehicle to grow profits.Let us help you achieve your digital
                  needs. At Pisoft Informatics We have an expert team for
                  digital marketing they help you achieve your business goals.
                  Grow your business successfully with our digital marketing
                  services and set marketing campaign which can help you to
                  reach your goals.
                </p>
                <p className="text-xl"></p>
              </div>
            </header>
          </div>
        </div>
        <img
          src="/assets/images/our-services-tab/digital-marketing.jpg"
          alt="Background Image"
          className="w-full h-44 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <section className="relative flex flex-col overflow-hidden h-svh items-center justify-center bg-zinc-950">
        <img
          className="absolute w-full h-full lg:w-full lg:h-screen object-cover"
          src="/assets/images/our-services/our-services-pricing.jpg"
          alt="alt text"
        />
        <div className="relative items-center py-5 px-12 mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    BASIC
                  </p>
                  <p className="text-white">Search Engine Optimization
                  </p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items1.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    ADVANCED
                  </p>
                  <p className="text-white">Search Engine Optimization</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items2.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/20 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    PROFESSIONAL
                  </p>
                  <p className="text-white">Search Engine Optimization</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items3.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
              
              </div>
              <div className="flex mt-6">
                <a
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 shadow-2xl  rounded-3xl bg-black/50 backdrop-blur-3xl  shadow-gray-900/50 border-sm border-2">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    EXTREME
                  </p>
                  <p className="text-white">Wordpress / Drupal / Joomla</p>
                </div>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {items4.map((item, index) => (
                    
                      <li key={index}  className="inline-flex items-center gap-2"><img src="/icons/tick.png" className="w-7" /> {item} </li>
                  ))}
                </ul>
                
              </div>
              <div className="flex mt-6">
                <a
                  href="http://localhost:3000/contact-us"
                  title="Get Price"
                  aria-label="get started"
                  className="flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-black bg-white hover:bg-white/5 hover:text-white "
                >
                  Get Price
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
