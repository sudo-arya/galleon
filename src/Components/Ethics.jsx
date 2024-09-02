import React from "react";
import Seo from "./Seo";
import ethics1 from "../Assets/ethics1.jpg";
import ethics2 from "../Assets/ethics2.jpg";
import ethics3 from "../Assets/ethics3.jpg";
import ethics4 from "../Assets/ethics4.jpg";
import ethics5 from "../Assets/ethics5.jpg";
import ethics6 from "../Assets/ethics6.jpg";
import ethics7 from "../Assets/ethics7.jpg";

const Ethics = () => {
  // const arg = "Ethics";

  return (
    <div className=" bg-cs2 w-screen">
      {/* Ethics */}
      <Seo title="Ethics - Galleon Trading" description="" keywords="" />
      <div className="flex items-center justify-center text-5xl font-semibold mt-12 text-cs5 mx-auto text-center">
        Ethical Trading Policy
      </div>
      <div className=" flex items-center justify-center">
        <hr className="h-2 w-1/4 border-cs5 pb-1 mt-4 " />
      </div>
      <p></p>

      <div className="h-fit  bg-cs2 flex items-center justify-center flex-col my-10 pb-10">
        <p className="text-lg mx-auto w-9/12 pt-6">
          At Galleon Trading LLC-FZ, we are committed to conducting our business
          with the highest standards of integrity, transparency, and
          accountability. Our Ethics and Compliance policies guide every aspect
          of our operations, ensuring that we uphold the trust of our
          stakeholders, partners, and customers.
        </p>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col md:flex-row my-10 md:my-12 ">
        <div className="md:w-1/2 w-9/12 md:pt-20 bg-cs6 bg-opacity-15 flex items-end justify-end md:mb-0 mb-14">
          <img src={ethics1} alt="" className="md:w-3/4 w-full" />
        </div>
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Our Commitment to Ethical Business Practices
          </p>
          <p className="text-lg w-10/12 md:mx-4 pt-6">
            We believe that ethical behavior is essential to building
            long-lasting relationships and fostering a positive reputation in
            the global marketplace. To that end, we are dedicated to:
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Fair Trading Practices:</span>{" "}
                We are committed to fair, transparent, and competitive trading
                practices. Our transactions are conducted with honesty,
                fairness, and respect for all parties involved.
              </li>
              <li>
                <span className="font-semibold">
                  Compliance with Laws and Regulations:
                </span>{" "}
                We strictly adhere to all applicable international, national,
                and local laws and regulations in the regions where we operate.
                Our compliance program ensures that we meet all legal
                obligations, including those related to trade, labor, and
                environmental standards.
              </li>
              <li>
                <span className="font-semibold">
                  Integrity and Transparency:
                </span>{" "}
                Our company values integrity in all interactions. We maintain
                transparency in our business dealings, financial reporting, and
                communications, ensuring accurate and honest disclosures to our
                stakeholders.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col-reverse md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Anti-Corruption and Anti-Bribery{" "}
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            Galleon Trading has a zero-tolerance policy toward any form of
            bribery or corruption. We prohibit any improper payments, gifts, or
            inducements intended to gain unfair business advantages. All
            employees, partners, and associates are required to adhere to this
            policy and report any suspected violations promptly.
          </p>
        </div>
        <div className="md:w-1/2 w-9/12 md:py-12 bg-cs6 bg-opacity-15 flex items-center justify-start md:mb-0 mb-14">
          <img src={ethics2} alt="" className="md:w-3/4 w-full" />
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 md:py-12 bg-cs6 bg-opacity-15 flex items-center justify-end md:mb-0 mb-14">
          <img src={ethics3} alt="" className="md:w-3/4 w-full" />
        </div>
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Human Rights and Labor Standards
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            We are committed to upholding human rights and ensuring fair labor
            practices throughout our supply chain. This includes:
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">
                  Respecting Workers' Rights:
                </span>{" "}
                We ensure that all workers are treated fairly, with dignity and
                respect. We do not tolerate any form of forced labor, child
                labor, or human trafficking.
              </li>
              <li>
                <span className="font-semibold">
                  Promoting Diversity and Inclusion:{" "}
                </span>{" "}
                We embrace diversity and strive to create an inclusive
                environment where all employees feel valued and respected,
                regardless of race, gender, religion, or background.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col-reverse md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Environmental Responsibility
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            At Galleon Trading, we recognize the importance of protecting the
            environment for future generations. We strive to minimize our
            environmental impact by:
            <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                <span className="font-semibold">Sustainable Sourcing: </span> We
                prioritize sourcing from suppliers who follow sustainable
                agricultural practices. We work closely with our partners to
                ensure responsible and environmentally friendly operations.
              </li>
              <li>
                <span className="font-semibold">
                  Reducing Carbon Footprint:{" "}
                </span>{" "}
                We aim to reduce our carbon footprint by implementing efficient
                logistics, energy-saving measures, and sustainable practices
                across all our business activities.
              </li>
            </ul>
          </p>
        </div>
        <div className="md:w-1/2 w-9/12 md:py-12 bg-cs6 bg-opacity-15 flex items-center justify-start md:mb-0 mb-14">
          <img src={ethics4} alt="" className="md:w-3/4 w-full" />
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 md:py-12 bg-cs6 bg-opacity-15 flex items-center justify-end md:mb-0 mb-14">
          <img src={ethics5} alt="" className="md:w-3/4 w-full" />
        </div>
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Whistleblower Policy
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            We encourage a culture of openness and accountability. Our
            Whistleblower Policy allows employees and partners to report any
            unethical, illegal, or improper conduct without fear of retaliation.
            All reports are treated with confidentiality, and appropriate
            actions are taken to address any concerns raised.
          </p>
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col-reverse md:flex-row md:my-12 my-10 ">
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Continuous Improvement
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            We continuously review and enhance our Ethics and Compliance
            policies to ensure they remain effective, relevant, and aligned with
            global best practices. We provide regular training to our employees
            to reinforce ethical behavior and compliance with laws and
            regulations.
          </p>
        </div>
        <div className="md:w-1/2 w-9/12 md:py-12 bg-cs6 bg-opacity-15 flex items-center justify-start md:mb-0 mb-14">
          <img src={ethics6} alt="" className="md:w-3/4 w-full" />
        </div>
      </div>
      <div className="h-fit bg-cs2 flex items-center justify-center flex-col md:flex-row md:my-12 my-10 md:pb-12 ">
        <div className="md:w-1/2 w-9/12 md:pb-20 bg-cs6 bg-opacity-15 flex md:mb-0 mb-14 items-end justify-end">
          <img src={ethics7} alt="" className="md:w-3/4 w-full" />
        </div>
        <div className="md:w-1/2 w-9/12 mx-8">
          <p className="md:text-4xl text-3xl font-semibold items-center md:mx-4 w-10/12 ">
            Contact Us
          </p>
          <p className="text-lg w-11/12 md:mx-4 pt-6">
            If you have any questions or concerns regarding our Ethics and
            Compliance policies, please contact us at{" "}
            <span className="bg-cs6 bg-opacity-15">
              &nbsp;mail@galleon-trading.com &nbsp;
            </span>{" "}
            We are committed to listening to all concerns and ensuring that they
            are addressed promptly and appropriately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ethics;
