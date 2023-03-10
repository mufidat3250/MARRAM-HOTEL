import Button from "./attom/Button";

export const happenings = [
  {
    id: 0,
    title: "AS SCHEDULED, Various Times",
    subtitle: "Yoga + Meditation",
    desc: "Our community of visiting and local yogis + meditators lead complimentary groups overlooking the beach exclusively for marram ’s, guests. Meditators and yogis of all levels and traditions are welcome. The participation of beginners is especially valued. Social distancing is mindfully observed.",
    img: "/images/happenings.webp"
  },
  {
    id: 1,
    title: "AS SCHEDULED, Various Times",
    subtitle: "Retrospec® Cruiser Bikes",
    desc: "Explore the area on one of our complimentary Retrospec® cruisers. Available on request to adult hotel guests during daylight hours.",
    img: '/images/happening-1.webp'
  },
  {
    id: 2,
    title: "UPON REQUEST",
    subtitle: "Higher Dose® PEMF GO Mats",
    desc: "Raise your vibrations and recharge your body. Try the relaxing effects of PEMF + far infrared sessions courtesy of our partner, Higher Dose®. The PEMF GO Mat combines Amethyst and Tourmaline crystals, PEMF (Pulsed Electromagnetic Fields), and Far Infrared, offering a unique experience that may assist with reduced stress, increased energy, improved sleep, and recovery. Available daily for complimentary use in our lounge.",
    img: '/images/happening-2.webp'
  },
  {
    id: 3,
    title: "TWICE WEEKLY + UPON REQUEST",
    subtitle: "Nature Walks",
    desc: "Discover nearby Shadmoor State Park at your leisure. Whether you prefer a guided nature walk led by a member of the marram team, or the opportunity to explore on your own (self-guided nature walk with maps available upon request at the marram Lobby), the natural beauty of Montauk awaits. Walk 1/2 mile from the resort to Shadmoor State Park’s side entrance (heading east on Surfside Avenue). Upon entering the Park, hike 1/2 mile to Roosevelt’s Run Trail, along the bluffs overlooking the Atlantic Ocean.",
    img: '/images/happening-3.webp'
  },
  {
    id: 4,
    title: "TWICE WEEKLY, Various Times",
    subtitle: "Creative Workshops",
    desc: "Indulge your creativity. Adults and children are invited to create unique marram mementos of their stay. A variety of projects for different skill levels are available. Meet at the lounge.",
    img: '/images/happening-4.webp'
  },
  {
    id: 5,
    title: "NIGHTLY, 6pm",
    subtitle: "Evening Firepits",
    desc: "Unwind and relax at the patio around our nightly fire pits– enjoy complimentary s’mores and enjoy the colors of Montauk’s skies as dusk falls. Social distancing is mindfully observed.",
    img: '/images/happening-5.webp'

  },
  {
    id: 6,
    title: "VARIOUS EVENINGS, 8pm",
    subtitle: "Fireside Chats",
    desc: 'Join us for our 2022 fireside chat series featuring a variety of speakers leading engaging and thoughtful town hall style discussions. We look forward to welcoming a combination of new and "old" friends to the series. Past speakers have included Regan Robinson, entrepreneur and futurist on Creativity and freeing one’s Imagination - frequent host Zac Waldman, professor at Parsons - and creator of The Futurist Sessions - Matt Titone, publisher of Surf Shacks Vol I & II - and Raymond Storms, intuitive energy healer.',
    img: '/images/happening-7.webp'

  },
];
export const experience = [
  {
    desc: (
      <p className="font-[Heldane display]"> 
        {" "}
        <strong className="text-[#d77256] font-[mabry]">REFRESH</strong> Unwind to the
        rhythmic sounds of the waves on the shore, walk the beach to nearby
        Shadmoor State Park, surf the perfect wave at Terrace, or explore
        further afield with one of our complimentary cruiser bikes. With so many
        ways to relax and reconnect, our team is here to help you curate your
        perfect stay.
      </p>
    ),
    button: (
      <div className="max-w-[13.125rem]">
        <Button title={"Our Experience"} />
      </div>
    ),
    img: "/images/refresh.webp",
  },
  {
    desc: (
      <p>
        {" "}
        <strong className="text-[#d77256]font-[mabry]">DINE</strong> From late May through
        mid October, join us us at mostador marram, our on-site seasonal outdoor
        counter service café, which celebrates a refined approach to Latin
        American cuisine led by award-winning chef Fernando Trocca and
        restaurateur Martín Pittaluga of{" "}
        <i>José Ignacio’s La Huella & Mostrador Santa Teresita.</i>
      </p>
    ),
    button: (
      <div className="max-w-[13.125rem]">
        <Button title={"Dine with Us"} />
      </div>
    ),
    img: "/images/dine.webp",
  },
  {
    desc: (
      <p>
        {" "}
        <strong className="text-[#d77256] font-[mabry]">SPACE</strong> We have mindfully
        curated spaces that both feel like home and inspire a fresh perspective.
        Explore the everyday treasures you’ll find during your stay.
      </p>
    ),
    button: (
      <div className="max-w-[13.125rem]">
        <Button title={"See More"} />
      </div>
    ),
    img: "/images/spaces.webp",
  },
];

export const quotations = ["", "", ``, ``];
export const sliderImg = [
  "/images/slider1.webp",
  "/images/slider2.webp",
  "/images/slider3.webp",
  "/images/slider4.webp",
  "/images/slider5.webp",
  "/images/slider6.webp",
  "/images/slider7.webp",
];

export const secExperience = [
  {
    desc: (
      <p>
        {" "}
        <strong className="text-[#d77256]font-[mabry]">OFFERS</strong> Explore our exclusive
        limited-time promotions and experiential packages, designed to help you
        make the most of your stay.
      </p>
    ),
    button: (
      <div className="max-w-[13.125rem]">
        <Button title={"Special Offers"} />
      </div>
    ),
    img: "/images/offers.webp",
  },
  {
    desc: (
      <p>
        {" "}
        <strong className="text-[#d77256] font-[mabry]">GROUPS & GATHERINGS</strong> We are
        always happy to host special events. Reach out to discuss our options
        and availability.
      </p>
    ),
    button: (
      <div className="max-w-[13.125rem]">
        <Button title={"CONTACT US"} />
      </div>
    ),
    img: "/images/groups.webp",
  },
];
