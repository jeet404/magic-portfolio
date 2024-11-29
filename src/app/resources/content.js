import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jeet",
  lastName: "Patel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "MERN Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Calcutta", // Expecting the IANA time zone identifier, e.g., 'Asia/Calcutta'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jeet404",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jeet404/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jeet63240@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>MERN Stack Developer</>,
  subline: (
    <>
      Building modern web applications with <InlineCode>React</InlineCode>,{" "}
      <InlineCode>Node.js</InlineCode>, <InlineCode>Express.js</InlineCode>,{" "}
      <InlineCode>MongoDB</InlineCode>, and <InlineCode>GraphQL</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Throughout my career, I have leveraged the power of Node.js to build
        robust and scalable web applications, with a deep knowledge of
        JavaScript at the core of my skill set. I specialize in creating
        efficient, optimized server-side code and am highly proficient in using
        Express.js to develop RESTful APIs that seamlessly integrate with
        frontend applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "UNIKWORK SYSTEMS LLP",
        timeframe: "2022 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Developed a new user interface for the company's flagship product,
          </>,
          <>
            Led a team of 5 developers to deliver a new feature that increased
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ASHTAVINAYAK SOFT SOLUTIONS",
        timeframe: "2018 - 2022",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed a new user interface for the company's flagship product,
          </>,
          <>
            Led a team of 5 developers to deliver a new feature that increased
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Saurashtra University",
        description: (
          <>Masters in Science (M.Sc.) in Information Technology (IT)</>
        ),
      },
      {
        name: "Saurashtra University",
        description: (
          <>
            Bachelor of Computer Applications (BCA) with 8.81 CGPA (1st Rank in
            College)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript",
        description: (
          <>
            I have been working with JavaScript for over 4 years and have a deep
            understanding of the language. I have experience with both frontend
            and backend development using JavaScript. I have worked with various
            frameworks and libraries such as React, Node.js, Express.js, and
            more.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "PHP, Ajax, jQuery",
        description: (
          <>
            I have worked with PHP, Ajax, and jQuery for over 3 years. I have
            experience with both frontend and backend development using these
            technologies. I have worked with various frameworks and libraries
            such as Laravel, CodeIgniter, and more.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };