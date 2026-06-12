const fs = require('fs');
const mapping = require('./milestones_mapping.json');

const events = [
  {
    id: 10,
    year: "2026",
    title: "Holi Celebration 2026",
    date: "3 March 2026",
    venue: "Kripa Library",
    attendees: "80+ Students Attended",
    desc: "Kripa Library celebrated Holi with immense joy, enthusiasm, and togetherness, bringing students together for a colorful and memorable gathering. The festive spirit was evident from the very beginning as students exchanged greetings and wished one another happiness and success.\n\nThe celebration was filled with vibrant colors as students played with gulal, creating an atmosphere of excitement, friendship, and positivity. Laughter and cheerful conversations echoed throughout the gathering, making the occasion truly special.\n\nMusic added energy to the celebration, and students enthusiastically participated in dance and other fun activities. The festive environment encouraged everyone to relax, enjoy the moment, and strengthen their bonds with fellow students. The celebration served as a refreshing break from daily routines and academic schedules.\n\nOne of the most heartwarming aspects of the event was the active involvement of students in organizing refreshments. Students themselves prepared refreshing cold drinks such as shikanji and helped serve them to their fellow participants. Delicious snacks, including samosas and other refreshments, were also distributed, adding to the festive spirit and making the celebration even more enjoyable.\n\nThe event reflected the values of unity, teamwork, and mutual respect. Students came together not only to celebrate but also to contribute to the success of the gathering through their participation and cooperation. The colorful atmosphere, music, refreshments, and shared moments of joy created unforgettable memories for everyone.\n\nAs the celebration concluded, students carried forward the happiness and positivity of the occasion. The event not only brought smiles to everyone's faces but also inspired them to continue their academic journey with renewed energy and enthusiasm.\n\nThe Holi Celebration 2026 was a vibrant and memorable occasion that filled students with joy, positivity, friendship, and the true spirit of togetherness.",
    images: mapping["Holi Celebration 2026"]
  },
  {
    id: 1,
    year: "2026",
    title: "Basant Panchami Celebration 2026",
    date: "Basant Panchami, 2026",
    venue: "Kripa Library",
    attendees: "60+ Students Attended",
    desc: "Kripa Library celebrated Basant Panchami with devotion and simplicity, honoring Maa Saraswati, the goddess of knowledge, wisdom, and learning. The event was organized to seek blessings for the academic success and intellectual growth of students.\n\nThe celebration began with an Aarti and the chanting of sacred mantras in a calm and serene atmosphere. Students gathered with reverence and participated wholeheartedly in the prayers, creating an environment filled with positivity and spiritual energy.\n\nAs a symbol of their dedication to learning, students offered their books, notebooks, and stationery before Maa Saraswati, seeking her blessings for wisdom, knowledge, and success in their studies. The venue was beautifully adorned with flowers, which added to the peaceful and devotional ambiance of the occasion.\n\nA brief meditation session was also conducted, encouraging students to cultivate focus, inner peace, and clarity of thought. The session reflected the values associated with Maa Saraswati—knowledge, wisdom, discipline, and continuous learning.\n\nThe celebration served as a reminder of the importance of education and inspired students to pursue their academic goals with sincerity and determination. The event concluded with prayers for the success and bright future of all students.\n\nThe Basant Panchami celebration at Kripa Library was a simple yet meaningful occasion that strengthened students' connection with the values of learning, wisdom, and self-improvement.",
    images: mapping["Basant panchmi 2026"]
  },
  {
    id: 2,
    year: "2026",
    title: "New Year Celebration 2026",
    date: "1 January 2026",
    venue: "Kripa Library",
    attendees: "100+ Students Attended",
    desc: "Kripa Library welcomed the New Year 2026 with a grand and memorable celebration organized especially for its students. To make the occasion special, a dedicated hall was booked for the event, and entry passes were issued to students, ensuring a well-organized and exciting gathering.\n\nThe celebration began on a positive and spiritual note with an Aarti and the chanting of sacred mantras, creating an atmosphere of peace and gratitude. Students gathered enthusiastically to welcome the new year with hopes, aspirations, and renewed determination.\n\nOne of the highlights of the event was the inspiring address delivered by the library owner. Through motivational speeches and encouraging words, students were guided to set meaningful goals, remain disciplined in their studies, and work consistently towards achieving success in life. The message resonated deeply with the audience and motivated them to begin the year with confidence and purpose.\n\nThe cultural segment of the program featured a variety of performances, including music, dance, and other artistic presentations. The performances captivated the audience and filled the hall with energy, excitement, and applause. Students displayed remarkable talent and creativity, making the event vibrant and entertaining.\n\nSeveral games and competitions were also organized, witnessing enthusiastic participation from students. Their active involvement and competitive spirit added excitement to the celebration and created an atmosphere of fun and camaraderie. Winners were recognized and appreciated during the prize distribution ceremony.\n\nAnother major attraction of the event was the delicious food served to all attendees. Students thoroughly enjoyed the variety of dishes and refreshments, which added to the festive mood of the occasion. The combination of outstanding performances, engaging activities, and tasty food made the celebration truly unforgettable.\n\nThe event concluded with music, dance, laughter, and countless happy memories. Students left the celebration with smiling faces, positive energy, and a renewed commitment to their academic goals and personal growth.\n\nThe New Year Celebration 2026 was a grand success, reflecting the spirit of togetherness, motivation, and excellence that Kripa Library strives to foster among its students.",
    images: mapping["New Year Celebration 2026"]
  },
  {
    id: 3,
    year: "2025",
    title: "Diwali Celebration",
    date: "20 October 2025",
    venue: "Kripa Library",
    attendees: "50+ Students Attended",
    desc: "Kripa Library celebrated Diwali with great enthusiasm, warmth, and spiritual fervor on 20 October 2025. The festival of lights brought together students and staff in an atmosphere filled with positivity, peace, and devotion.\n\nThe celebration commenced with the lighting of traditional diyas, symbolizing the victory of light over darkness and knowledge over ignorance. This was followed by a devotional Aarti, during which students gathered to offer prayers and seek blessings for success, wisdom, and prosperity.\n\nThe beautifully illuminated library premises created a festive and serene environment. Students actively participated in the celebrations, joining together in prayers and sharing moments of joy and togetherness. Prashadam was distributed among all attendees, adding to the spirit of community and gratitude.\n\nThe event served as a reminder of the values associated with Diwali—hope, positivity, self-discipline, and the pursuit of knowledge. It strengthened the sense of unity among students and encouraged them to continue their academic journey with renewed determination and enthusiasm.\n\nThe Diwali celebration at Kripa Library was a memorable occasion that not only honored cultural traditions but also inspired students to illuminate their minds with learning and positivity. Everyone left the event with happy hearts, positive thoughts, and fresh motivation to achieve their goals.",
    images: mapping["Diwali Celebration 25"]
  },
  {
    id: 4,
    year: "2025",
    title: "Yoga Session",
    date: "21 June 2025",
    venue: "Talab Park",
    attendees: "45+ Students Attended",
    desc: "With the vision of promoting holistic development, mental well-being, and enhanced concentration among students, Kripa Library organized a Yoga Session at Talab Park. The event witnessed enthusiastic participation from students, who arrived early in the morning with great energy and excitement.\n\nThe session was conducted under the guidance of a trained yoga instructor who introduced students to various yogic exercises and asanas that help improve focus, concentration, physical fitness, and mental calmness. Students actively participated and learned the correct techniques and benefits of different yoga practices.\n\nSome of the important asanas practiced during the session included:\n\n• **Padmasana (Lotus Pose):** Helps improve concentration and mental clarity.\n• **Vajrasana (Thunderbolt Pose):** Enhances focus and promotes calmness of mind.\n• **Tadasana (Mountain Pose):** Improves posture, balance, and awareness.\n• **Vrikshasana (Tree Pose):** Develops concentration, stability, and mental balance.\n• **Sukhasana with Deep Breathing:** Encourages relaxation and reduces stress.\n• **Anulom Vilom Pranayama:** Improves oxygen flow, mental peace, and focus.\n• **Bhramari Pranayama:** Helps reduce anxiety and increases concentration levels.\n\nThe yoga trainer also mentored the students about the importance of maintaining a healthy lifestyle and explained how regular yoga practice can help improve memory, reduce stress, enhance productivity, and build self-discipline. Students were encouraged to incorporate yoga into their daily routines to achieve better academic performance and overall well-being.\n\nThe peaceful surroundings of Talab Park provided the perfect environment for learning and practicing yoga. Throughout the session, students remained highly engaged and motivated, showing great enthusiasm in performing the various exercises and asanas.\n\nThe event concluded with a brief interaction session where students shared their experiences and expressed their willingness to continue practicing yoga regularly. The session left the participants feeling refreshed, energized, and inspired.\n\nThe Yoga Session was a meaningful initiative by Kripa Library towards nurturing not only academic excellence but also the physical, mental, and emotional well-being of students. The participants returned with a positive mindset, renewed motivation, and a deeper understanding of the importance of yoga in leading a balanced and successful life.",
    images: mapping["yoga day 25"]
  },
  {
    id: 5,
    year: "2025",
    title: "Holi Celebration 2025",
    date: "14 March 2025",
    venue: "Kripa Library",
    attendees: "80+ Students Attended",
    desc: "Kripa Library celebrated Holi, the festival of colors, with great joy and enthusiasm. Students gathered to share sweets and apply colors, fostering a strong sense of community and happiness.\n\nThe event provided a wonderful and refreshing break from rigorous studies. It allowed students to relax, connect with their peers, and build lasting friendships in a festive atmosphere.\n\nThe colorful celebration was a reminder of the vibrant spirit of the Kripa Library community, combining focus and dedication with joyous celebrations.",
    images: mapping["Holi 2025"]
  },
  {
    id: 6,
    year: "2025",
    title: "Basant Panchami Celebration 2025",
    date: "Basant Panchami, 2025",
    venue: "Kripa Library",
    attendees: "50+ Students Attended",
    desc: "Kripa Library celebrated Basant Panchami with devotion and simplicity, honoring Maa Saraswati, the goddess of knowledge, wisdom, and learning. The event was organized to seek blessings for the academic success and intellectual growth of students.\n\nThe celebration began with an Aarti and the chanting of sacred mantras in a calm and serene atmosphere. Students gathered with reverence and participated wholeheartedly in the prayers, creating an environment filled with positivity and spiritual energy.\n\nAs a symbol of their dedication to learning, students offered their books, notebooks, and stationery before Maa Saraswati, seeking her blessings for wisdom, knowledge, and success in their studies. The venue was beautifully adorned with flowers, which added to the peaceful and devotional ambiance of the occasion.\n\nA brief meditation session was also conducted, encouraging students to cultivate focus, inner peace, and clarity of thought. The session reflected the values associated with Maa Saraswati—knowledge, wisdom, discipline, and continuous learning.\n\nThe celebration served as a reminder of the importance of education and inspired students to pursue their academic goals with sincerity and determination. The event concluded with prayers for the success and bright future of all students.\n\nThe Basant Panchami celebration at Kripa Library was a simple yet meaningful occasion that strengthened students' connection with the values of learning, wisdom, and self-improvement.",
    images: mapping["basant panchmi jan 2025"]
  },
  {
    id: 7,
    year: "2024",
    title: "Independence Day Celebration 2024",
    date: "15 August 2024",
    venue: "Kripa Library",
    attendees: "75+ Students Attended",
    desc: "Kripa Library celebrated Independence Day with great patriotic spirit and enthusiasm. Students gathered at the library and warmly wished each other on the occasion, creating an atmosphere filled with pride and respect for the nation.\n\nThe celebration began with the hoisting of the National Flag. Students participated wholeheartedly and reflected on the sacrifices and struggles of the freedom fighters who dedicated their lives to India's independence. They shared their thoughts and discussed the values of courage, determination, and service to the nation.\n\nThe library was beautifully decorated with tricolor decorations, and students proudly carried and waved small national flags, adding to the festive spirit of the occasion. The entire premises reflected a sense of unity, patriotism, and national pride.\n\nThe event encouraged students to think about their responsibilities as future citizens of the country. Inspired by the ideals of the freedom fighters, students resolved to work hard towards their goals and contribute positively to the nation's development.\n\nAfter the celebration, students returned to their studies with renewed focus, dedication, and a strong spirit of nation-building. The occasion served as a reminder that through education, discipline, and perseverance, they can play a meaningful role in shaping the future of India.\n\nThe Independence Day celebration at Kripa Library was a simple yet inspiring event that filled everyone with patriotism, motivation, and a commitment to excellence.",
    images: mapping["Independence Day Celebration 2024"]
  },
  {
    id: 8,
    year: "2024",
    title: "Pooja Ceremony",
    date: "23 January 2024",
    venue: "Kripa Library",
    attendees: "50+ Students Attended",
    desc: "Kripa Library organized a special Pooja Ceremony to seek divine blessings for the success, well-being, and bright future of its students. The event was conducted in a spiritually uplifting atmosphere, bringing together students, parents, and well-wishers in devotion and prayer.\n\nThe ceremony began with traditional rituals and prayers, creating an environment filled with positivity, peace, and spiritual energy. Sacred mantras and devotional hymns resonated throughout the premises, inspiring a sense of faith, gratitude, and inner calm among all participants.\n\nStudents participated with great devotion and enthusiasm, offering prayers for academic excellence, good health, wisdom, and success in their future endeavors. During the ceremony, valuable messages were shared about the importance of discipline, perseverance, sincerity, and positive thinking in achieving one’s goals.\n\nThe event reflected Kripa Library’s commitment to supporting not only the academic growth of students but also their moral and personal development. It encouraged students to remain focused on their aspirations while maintaining strong values and a positive outlook on life.\n\nFollowing the prayers and Aarti, Prashadam was distributed among all attendees. The gathering fostered a sense of unity, community, and shared purpose, strengthening the bond among students and their mentors.\n\nThe ceremony concluded with heartfelt blessings for the success and happiness of every student. Participants left the event feeling inspired, motivated, and confident about their future, carrying with them renewed determination to pursue their dreams with dedication and hard work.",
    images: mapping["Pooja Ceremony 2024"]
  },
  {
    id: 9,
    year: "2025",
    title: "New Year Celebration 2025",
    date: "1 January 2025",
    venue: "Kripa Library",
    attendees: "50+ Students Attended",
    desc: "The New Year 2025 was welcomed with great enthusiasm and positivity at Kripa Library. The celebration began with a divine Aarti accompanied by the chanting of sacred shlokas and the resonating sound of the shankh (conch shell), creating a peaceful and spiritual atmosphere.\n\nFollowing the Aarti, a mesmerizing flute performance captivated everyone present and filled the environment with purity, serenity, and devotion. The cultural segment of the event featured various song and dance performances by students, showcasing their talent and adding vibrant energy to the celebration.\n\nSeveral fun-filled games and competitions were organized, in which students participated with great enthusiasm and sportsmanship. Their active involvement made the event lively and engaging for everyone.\n\nThe winners of different competitions were honored during the prize distribution ceremony. Snacks were served to all participants, adding to the festive spirit of the occasion.\n\nThe celebration continued with a delicious dinner that was enjoyed by all. The special rasgullas served during the meal became a favorite among the students and added sweetness to the New Year festivities.\n\nTo conclude the event, everyone came together for a joyful DJ dance session. The music, laughter, and collective celebrations filled the atmosphere with happiness and excitement. Students smiled, laughed, and created beautiful memories with their friends.\n\nThe New Year Celebration at Kripa Library was a grand success. Students returned home with joyful hearts, renewed motivation, and a positive spirit to begin the year ahead with dedication and enthusiasm.",
    images: mapping["new year clebration 25"]
  }
];

let content = fs.readFileSync('./src/components/Events/MilestonesMemories.jsx', 'utf8');
const startIndex = content.indexOf('export const milestoneEvents = [');
const endIndex = content.indexOf('];', startIndex) + 2;

if (startIndex !== -1 && endIndex !== -1) {
  const newArrayStr = 'export const milestoneEvents = ' + JSON.stringify(events, null, 2) + ';';
  const newContent = content.substring(0, startIndex) + newArrayStr + content.substring(endIndex);
  fs.writeFileSync('./src/components/Events/MilestonesMemories.jsx', newContent);
  console.log('Successfully updated MilestonesMemories.jsx');
} else {
  console.log('Could not find milestoneEvents array');
}
