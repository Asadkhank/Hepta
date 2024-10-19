import React from "react";
import person from "../assets/person_1.webp";
import person2 from "../assets/person_2.webp";
import person3 from "../assets/person_3.webp";
import person4 from "../assets/person_1.webp"; // Add new team member images
import person5 from "../assets/person_2.webp";
import person6 from "../assets/person_3.webp";

const teamMembers = [
  {
    image: person,
    title: "CEO, CO-FOUNDER",
    name: "Vince Richardson",
    link: "#", // Add the link for each member
  },
  {
    image: person2,
    title: "CTO, CO-FOUNDER",
    name: "Jean Love",
    link: "#",
  },
  {
    image: person3,
    title: "MARKETER, CO-FOUNDER",
    name: "Jeff Stark",
    link: "#",
  },
  {
    image: person4,
    title: "DESIGNER, CO-FOUNDER",
    name: "Sara White",
    link: "#",
  },
  {
    image: person5,
    title: "DEVELOPER, CO-FOUNDER",
    name: "Tom Brown",
    link: "#",
  },
  {
    image: person6,
    title: "PRODUCT MANAGER, CO-FOUNDER",
    name: "Linda Green",
    link: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8">Our Team</h2>
        <p className="mt-4 mb-10 leading-8 text-xl text-gray-800 px-4 md:px-0 max-w-2xl mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="flex justify-center flex-wrap mx-auto max-w-5xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 mb-12" // Reduced margin-bottom
            >
              <a href={member.link}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-68 object-cover" // Set image height to 68px
                />
              </a>
              <div className="p-4 flex items-start flex-col">
                <p className="mt-4 text-gray-500">{member.title}</p>
                <a href={member.link} className="text-3xl font-bold mt-2 hover:text-sky-500 transition duration-300">
                  {member.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
