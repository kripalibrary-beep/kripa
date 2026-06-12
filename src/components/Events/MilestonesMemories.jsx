import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

// Comprehensive milestones list complete with real images arrays from ImageKit
export const milestoneEvents = [
  {
    "id": 10,
    "year": "2026",
    "title": "Holi Celebration 2026",
    "date": "3 March 2026",
    "venue": "Kripa Library",
    "attendees": "80+ Students Attended",
    "desc": "Kripa Library celebrated Holi with immense joy, enthusiasm, and togetherness, bringing students together for a colorful and memorable gathering. The festive spirit was evident from the very beginning as students exchanged greetings and wished one another happiness and success.\n\nThe celebration was filled with vibrant colors as students played with gulal, creating an atmosphere of excitement, friendship, and positivity. Laughter and cheerful conversations echoed throughout the gathering, making the occasion truly special.\n\nMusic added energy to the celebration, and students enthusiastically participated in dance and other fun activities. The festive environment encouraged everyone to relax, enjoy the moment, and strengthen their bonds with fellow students. The celebration served as a refreshing break from daily routines and academic schedules.\n\nOne of the most heartwarming aspects of the event was the active involvement of students in organizing refreshments. Students themselves prepared refreshing cold drinks such as shikanji and helped serve them to their fellow participants. Delicious snacks, including samosas and other refreshments, were also distributed, adding to the festive spirit and making the celebration even more enjoyable.\n\nThe event reflected the values of unity, teamwork, and mutual respect. Students came together not only to celebrate but also to contribute to the success of the gathering through their participation and cooperation. The colorful atmosphere, music, refreshments, and shared moments of joy created unforgettable memories for everyone.\n\nAs the celebration concluded, students carried forward the happiness and positivity of the occasion. The event not only brought smiles to everyone's faces but also inspired them to continue their academic journey with renewed energy and enthusiasm.\n\nThe Holi Celebration 2026 was a vibrant and memorable occasion that filled students with joy, positivity, friendship, and the true spirit of togetherness.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/holi_26/WhatsApp_Image_2026-06-11_at_8.54.40_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/holi_26/WhatsApp_Image_2026-06-11_at_8.54.41_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/holi_26/WhatsApp_Image_2026-06-11_at_8.54.59_PM.jpeg"
    ]
  },
  {
    "id": 1,
    "year": "2026",
    "title": "Basant Panchami Celebration 2026",
    "date": "Basant Panchami, 2026",
    "venue": "Kripa Library",
    "attendees": "60+ Students Attended",
    "desc": "Kripa Library celebrated Basant Panchami with devotion and simplicity, honoring Maa Saraswati, the goddess of knowledge, wisdom, and learning. The event was organized to seek blessings for the academic success and intellectual growth of students.\n\nThe celebration began with an Aarti and the chanting of sacred mantras in a calm and serene atmosphere. Students gathered with reverence and participated wholeheartedly in the prayers, creating an environment filled with positivity and spiritual energy.\n\nAs a symbol of their dedication to learning, students offered their books, notebooks, and stationery before Maa Saraswati, seeking her blessings for wisdom, knowledge, and success in their studies. The venue was beautifully adorned with flowers, which added to the peaceful and devotional ambiance of the occasion.\n\nA brief meditation session was also conducted, encouraging students to cultivate focus, inner peace, and clarity of thought. The session reflected the values associated with Maa Saraswati—knowledge, wisdom, discipline, and continuous learning.\n\nThe celebration served as a reminder of the importance of education and inspired students to pursue their academic goals with sincerity and determination. The event concluded with prayers for the success and bright future of all students.\n\nThe Basant Panchami celebration at Kripa Library was a simple yet meaningful occasion that strengthened students' connection with the values of learning, wisdom, and self-improvement.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/Basant_panchmi_2026/WhatsApp_Image_2026-06-11_at_3.01.36_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Basant_panchmi_2026/WhatsApp_Image_2026-06-11_at_3.01.36_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Basant_panchmi_2026/WhatsApp_Image_2026-06-11_at_3.01.37_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Basant_panchmi_2026/WhatsApp_Image_2026-06-11_at_3.01.37_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Basant_panchmi_2026/WhatsApp_Image_2026-06-11_at_3.01.37_PM.jpeg"
    ]
  },
  {
    "id": 2,
    "year": "2026",
    "title": "New Year Celebration 2026",
    "date": "1 January 2026",
    "venue": "Kripa Library",
    "attendees": "100+ Students Attended",
    "desc": "Kripa Library welcomed the New Year 2026 with a grand and memorable celebration organized especially for its students. To make the occasion special, a dedicated hall was booked for the event, and entry passes were issued to students, ensuring a well-organized and exciting gathering.\n\nThe celebration began on a positive and spiritual note with an Aarti and the chanting of sacred mantras, creating an atmosphere of peace and gratitude. Students gathered enthusiastically to welcome the new year with hopes, aspirations, and renewed determination.\n\nOne of the highlights of the event was the inspiring address delivered by the library owner. Through motivational speeches and encouraging words, students were guided to set meaningful goals, remain disciplined in their studies, and work consistently towards achieving success in life. The message resonated deeply with the audience and motivated them to begin the year with confidence and purpose.\n\nThe cultural segment of the program featured a variety of performances, including music, dance, and other artistic presentations. The performances captivated the audience and filled the hall with energy, excitement, and applause. Students displayed remarkable talent and creativity, making the event vibrant and entertaining.\n\nSeveral games and competitions were also organized, witnessing enthusiastic participation from students. Their active involvement and competitive spirit added excitement to the celebration and created an atmosphere of fun and camaraderie. Winners were recognized and appreciated during the prize distribution ceremony.\n\nAnother major attraction of the event was the delicious food served to all attendees. Students thoroughly enjoyed the variety of dishes and refreshments, which added to the festive mood of the occasion. The combination of outstanding performances, engaging activities, and tasty food made the celebration truly unforgettable.\n\nThe event concluded with music, dance, laughter, and countless happy memories. Students left the celebration with smiling faces, positive energy, and a renewed commitment to their academic goals and personal growth.\n\nThe New Year Celebration 2026 was a grand success, reflecting the spirit of togetherness, motivation, and excellence that Kripa Library strives to foster among its students.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.09_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/ChatGPT_Image_Jun_11__2026__05_17_07_PM.png",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.07_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.08_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.08_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.08_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.09_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.09_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.10_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.10_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.10_PM__3_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.10_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.11_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.11_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.11_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.12_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.12_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.12_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.13_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/New_Year_Celebration_2026/WhatsApp_Image_2026-06-11_at_3.06.13_PM.jpeg"
    ]
  },
  {
    "id": 3,
    "year": "2025",
    "title": "Diwali Celebration",
    "date": "20 October 2025",
    "venue": "Kripa Library",
    "attendees": "50+ Students Attended",
    "desc": "Kripa Library celebrated Diwali with great enthusiasm, warmth, and spiritual fervor on 20 October 2025. The festival of lights brought together students and staff in an atmosphere filled with positivity, peace, and devotion.\n\nThe celebration commenced with the lighting of traditional diyas, symbolizing the victory of light over darkness and knowledge over ignorance. This was followed by a devotional Aarti, during which students gathered to offer prayers and seek blessings for success, wisdom, and prosperity.\n\nThe beautifully illuminated library premises created a festive and serene environment. Students actively participated in the celebrations, joining together in prayers and sharing moments of joy and togetherness. Prashadam was distributed among all attendees, adding to the spirit of community and gratitude.\n\nThe event served as a reminder of the values associated with Diwali—hope, positivity, self-discipline, and the pursuit of knowledge. It strengthened the sense of unity among students and encouraged them to continue their academic journey with renewed determination and enthusiasm.\n\nThe Diwali celebration at Kripa Library was a memorable occasion that not only honored cultural traditions but also inspired students to illuminate their minds with learning and positivity. Everyone left the event with happy hearts, positive thoughts, and fresh motivation to achieve their goals.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/Diwali_Celebration_25/WhatsApp_Image_2026-06-11_at_2.42.24_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Diwali_Celebration_25/WhatsApp_Image_2026-06-11_at_2.42.24_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Diwali_Celebration_25/WhatsApp_Image_2026-06-11_at_2.42.24_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Diwali_Celebration_25/WhatsApp_Image_2026-06-11_at_2.42.25_PM.jpeg"
    ]
  },
  {
    "id": 4,
    "year": "2025",
    "title": "Yoga Session",
    "date": "21 June 2025",
    "venue": "Talab Park",
    "attendees": "45+ Students Attended",
    "desc": "With the vision of promoting holistic development, mental well-being, and enhanced concentration among students, Kripa Library organized a Yoga Session at Talab Park. The event witnessed enthusiastic participation from students, who arrived early in the morning with great energy and excitement.\n\nThe session was conducted under the guidance of a trained yoga instructor who introduced students to various yogic exercises and asanas that help improve focus, concentration, physical fitness, and mental calmness. Students actively participated and learned the correct techniques and benefits of different yoga practices.\n\nSome of the important asanas practiced during the session included:\n\n• **Padmasana (Lotus Pose):** Helps improve concentration and mental clarity.\n• **Vajrasana (Thunderbolt Pose):** Enhances focus and promotes calmness of mind.\n• **Tadasana (Mountain Pose):** Improves posture, balance, and awareness.\n• **Vrikshasana (Tree Pose):** Develops concentration, stability, and mental balance.\n• **Sukhasana with Deep Breathing:** Encourages relaxation and reduces stress.\n• **Anulom Vilom Pranayama:** Improves oxygen flow, mental peace, and focus.\n• **Bhramari Pranayama:** Helps reduce anxiety and increases concentration levels.\n\nThe yoga trainer also mentored the students about the importance of maintaining a healthy lifestyle and explained how regular yoga practice can help improve memory, reduce stress, enhance productivity, and build self-discipline. Students were encouraged to incorporate yoga into their daily routines to achieve better academic performance and overall well-being.\n\nThe peaceful surroundings of Talab Park provided the perfect environment for learning and practicing yoga. Throughout the session, students remained highly engaged and motivated, showing great enthusiasm in performing the various exercises and asanas.\n\nThe event concluded with a brief interaction session where students shared their experiences and expressed their willingness to continue practicing yoga regularly. The session left the participants feeling refreshed, energized, and inspired.\n\nThe Yoga Session was a meaningful initiative by Kripa Library towards nurturing not only academic excellence but also the physical, mental, and emotional well-being of students. The participants returned with a positive mindset, renewed motivation, and a deeper understanding of the importance of yoga in leading a balanced and successful life.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/yoga_day_25/WhatsApp_Image_2026-06-11_at_2.39.58_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/yoga_day_25/WhatsApp_Image_2026-06-11_at_2.39.58_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/yoga_day_25/WhatsApp_Image_2026-06-11_at_2.39.58_PM__3_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/yoga_day_25/WhatsApp_Image_2026-06-11_at_2.39.58_PM.jpeg"
    ]
  },
  {
    "id": 5,
    "year": "2025",
    "title": "Holi Celebration 2025",
    "date": "14 March 2025",
    "venue": "Kripa Library",
    "attendees": "80+ Students Attended",
    "desc": "Kripa Library celebrated Holi, the festival of colors, with great joy and enthusiasm. Students gathered to share sweets and apply colors, fostering a strong sense of community and happiness.\n\nThe event provided a wonderful and refreshing break from rigorous studies. It allowed students to relax, connect with their peers, and build lasting friendships in a festive atmosphere.\n\nThe colorful celebration was a reminder of the vibrant spirit of the Kripa Library community, combining focus and dedication with joyous celebrations.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/Holi_2025/WhatsApp_Image_2026-06-11_at_2.53.01_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Holi_2025/WhatsApp_Image_2026-06-11_at_2.53.01_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Holi_2025/WhatsApp_Image_2026-06-11_at_2.53.01_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Holi_2025/WhatsApp_Image_2026-06-11_at_2.53.02_PM.jpeg"
    ]
  },
  {
    "id": 6,
    "year": "2025",
    "title": "Basant Panchami Celebration 2025",
    "date": "Basant Panchami, 2025",
    "venue": "Kripa Library",
    "attendees": "50+ Students Attended",
    "desc": "Kripa Library celebrated Basant Panchami with devotion and simplicity, honoring Maa Saraswati, the goddess of knowledge, wisdom, and learning. The event was organized to seek blessings for the academic success and intellectual growth of students.\n\nThe celebration began with an Aarti and the chanting of sacred mantras in a calm and serene atmosphere. Students gathered with reverence and participated wholeheartedly in the prayers, creating an environment filled with positivity and spiritual energy.\n\nAs a symbol of their dedication to learning, students offered their books, notebooks, and stationery before Maa Saraswati, seeking her blessings for wisdom, knowledge, and success in their studies. The venue was beautifully adorned with flowers, which added to the peaceful and devotional ambiance of the occasion.\n\nA brief meditation session was also conducted, encouraging students to cultivate focus, inner peace, and clarity of thought. The session reflected the values associated with Maa Saraswati—knowledge, wisdom, discipline, and continuous learning.\n\nThe celebration served as a reminder of the importance of education and inspired students to pursue their academic goals with sincerity and determination. The event concluded with prayers for the success and bright future of all students.\n\nThe Basant Panchami celebration at Kripa Library was a simple yet meaningful occasion that strengthened students' connection with the values of learning, wisdom, and self-improvement.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.30_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.29_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.30_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.30_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.31_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.31_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.31_PM__3_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.31_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.32_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/basant_panchmi_jan_2025/WhatsApp_Image_2026-06-11_at_2.50.32_PM.jpeg"
    ]
  },
  {
    "id": 7,
    "year": "2024",
    "title": "Independence Day Celebration 2024",
    "date": "15 August 2024",
    "venue": "Kripa Library",
    "attendees": "75+ Students Attended",
    "desc": "Kripa Library celebrated Independence Day with great patriotic spirit and enthusiasm. Students gathered at the library and warmly wished each other on the occasion, creating an atmosphere filled with pride and respect for the nation.\n\nThe celebration began with the hoisting of the National Flag. Students participated wholeheartedly and reflected on the sacrifices and struggles of the freedom fighters who dedicated their lives to India's independence. They shared their thoughts and discussed the values of courage, determination, and service to the nation.\n\nThe library was beautifully decorated with tricolor decorations, and students proudly carried and waved small national flags, adding to the festive spirit of the occasion. The entire premises reflected a sense of unity, patriotism, and national pride.\n\nThe event encouraged students to think about their responsibilities as future citizens of the country. Inspired by the ideals of the freedom fighters, students resolved to work hard towards their goals and contribute positively to the nation's development.\n\nAfter the celebration, students returned to their studies with renewed focus, dedication, and a strong spirit of nation-building. The occasion served as a reminder that through education, discipline, and perseverance, they can play a meaningful role in shaping the future of India.\n\nThe Independence Day celebration at Kripa Library was a simple yet inspiring event that filled everyone with patriotism, motivation, and a commitment to excellence.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/Independence_Day_Celebration_2024/Screenshot_2026-06-11_180406.png"
    ]
  },
  {
    "id": 8,
    "year": "2024",
    "title": "Pooja Ceremony",
    "date": "23 January 2024",
    "venue": "Kripa Library",
    "attendees": "50+ Students Attended",
    "desc": "Kripa Library organized a special Pooja Ceremony to seek divine blessings for the success, well-being, and bright future of its students. The event was conducted in a spiritually uplifting atmosphere, bringing together students, parents, and well-wishers in devotion and prayer.\n\nThe ceremony began with traditional rituals and prayers, creating an environment filled with positivity, peace, and spiritual energy. Sacred mantras and devotional hymns resonated throughout the premises, inspiring a sense of faith, gratitude, and inner calm among all participants.\n\nStudents participated with great devotion and enthusiasm, offering prayers for academic excellence, good health, wisdom, and success in their future endeavors. During the ceremony, valuable messages were shared about the importance of discipline, perseverance, sincerity, and positive thinking in achieving one’s goals.\n\nThe event reflected Kripa Library’s commitment to supporting not only the academic growth of students but also their moral and personal development. It encouraged students to remain focused on their aspirations while maintaining strong values and a positive outlook on life.\n\nFollowing the prayers and Aarti, Prashadam was distributed among all attendees. The gathering fostered a sense of unity, community, and shared purpose, strengthening the bond among students and their mentors.\n\nThe ceremony concluded with heartfelt blessings for the success and happiness of every student. Participants left the event feeling inspired, motivated, and confident about their future, carrying with them renewed determination to pursue their dreams with dedication and hard work.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.23_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.23_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.24_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.24_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.24_PM__3_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.24_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/Pooja_Ceremony_2024/WhatsApp_Image_2026-06-11_at_2.45.25_PM.jpeg"
    ]
  },
  {
    "id": 9,
    "year": "2025",
    "title": "New Year Celebration 2025",
    "date": "1 January 2025",
    "venue": "Kripa Library",
    "attendees": "50+ Students Attended",
    "desc": "The New Year 2025 was welcomed with great enthusiasm and positivity at Kripa Library. The celebration began with a divine Aarti accompanied by the chanting of sacred shlokas and the resonating sound of the shankh (conch shell), creating a peaceful and spiritual atmosphere.\n\nFollowing the Aarti, a mesmerizing flute performance captivated everyone present and filled the environment with purity, serenity, and devotion. The cultural segment of the event featured various song and dance performances by students, showcasing their talent and adding vibrant energy to the celebration.\n\nSeveral fun-filled games and competitions were organized, in which students participated with great enthusiasm and sportsmanship. Their active involvement made the event lively and engaging for everyone.\n\nThe winners of different competitions were honored during the prize distribution ceremony. Snacks were served to all participants, adding to the festive spirit of the occasion.\n\nThe celebration continued with a delicious dinner that was enjoyed by all. The special rasgullas served during the meal became a favorite among the students and added sweetness to the New Year festivities.\n\nTo conclude the event, everyone came together for a joyful DJ dance session. The music, laughter, and collective celebrations filled the atmosphere with happiness and excitement. Students smiled, laughed, and created beautiful memories with their friends.\n\nThe New Year Celebration at Kripa Library was a grand success. Students returned home with joyful hearts, renewed motivation, and a positive spirit to begin the year ahead with dedication and enthusiasm.",
    "images": [
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.26.22_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.23_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.23_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.23_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.24_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.24_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.24_PM.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.25_PM__1_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.25_PM__2_.jpeg",
      "https://ik.imagekit.io/manish07/assets/milistones/new_year_clebration_25/WhatsApp_Image_2026-06-11_at_2.34.25_PM.jpeg"
    ]
  }
];

// MilestoneCard component for rendering items in list view
function MilestoneCard({ item, index, onReadMoreClick }) {
  const isEven = index % 2 === 1;
  const firstParagraph = item.desc.split('\n\n')[0];

  return (
    <div 
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full animate-fadeIn ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
      style={{ minHeight: '384px' }}
    >
      {/* Image Box */}
      <div 
        className="w-full lg:w-[632px] h-[250px] sm:h-[320px] lg:h-[384px] rounded-[24px] overflow-hidden relative shrink-0 shadow-sm border border-gray-150 group cursor-pointer"
        onClick={onReadMoreClick}
      >
        <img
          src={item.images[0]} // Show first image as cover in list view
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            item.images[0] && item.images[0].includes("ChatGPT_Image") ? 'object-top' : ''
          }`}
          loading="lazy"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Overlay metadata row */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-[11px] font-semibold tracking-wide">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0112.24 21c-2.787 0-5.323-.984-7.24-2.613a9.38 9.38 0 01-2.625-.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0112.24 21M12.24 21c-2.787 0-5.323-.984-7.24-2.613v-.003c0-1.113.285-2.16.786-3.07m0 0A7.373 7.373 0 013.75 12.24c0-2.787.984-5.323 2.613-7.24m1.5 13.5A7.373 7.373 0 0012.24 15M12.24 15a7.373 7.373 0 004.5-1.5m-4.5 1.5a7.373 7.373 0 01-4.5-1.5" />
            </svg>
            <span>{item.attendees}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>{item.date}</span>
          </div>
        </div>
      </div>

      {/* Text Area */}
      <div className="w-full lg:w-[618px] flex flex-col justify-center gap-3 py-4 lg:py-0">
        <h3 className="font-extrabold text-[#090D1A] text-2xl sm:text-3xl leading-snug">
          {item.title}
        </h3>
        
        <p className="text-gray-500 text-sm sm:text-base font-normal leading-relaxed m-0">
          {firstParagraph.split('**').map((chunk, i) => i % 2 === 1 ? <strong key={i} className="font-extrabold text-[#090D1A]">{chunk}</strong> : chunk)}
        </p>

        <button
          onClick={onReadMoreClick}
          className="text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm mt-1 focus:outline-none flex items-center gap-1 cursor-pointer self-start"
        >
          <span>Read More</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </div>
  );
}

// Dedicated Milestone Image Slider (Carousel Widget with overlaid arrows < > and count indicators)
function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-[1024px] mx-auto h-[250px] sm:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-md group border border-gray-150 bg-slate-900">
      
      {/* Active Image */}
      <img
        src={images[currentIndex]}
        alt={`Milestone slideshow ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-300 select-none ${
          images[currentIndex] && images[currentIndex].includes("ChatGPT_Image") ? 'object-top' : ''
        }`}
      />

      {/* Dark overlay bottom strip */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

      {/* Overlaid Left Navigation Control (<) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow flex items-center justify-center text-gray-800 hover:text-black hover:bg-white active:scale-95 transition-all cursor-pointer select-none"
        aria-label="Previous slide photo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Overlaid Right Navigation Control (>) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow flex items-center justify-center text-gray-800 hover:text-black hover:bg-white active:scale-95 transition-all cursor-pointer select-none"
        aria-label="Next slide photo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* 1 / N count indicator tag absolute centered at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-[11px] font-bold tracking-widest select-none">
        {currentIndex + 1} / {images.length}
      </div>

    </div>
  );
}

export default function MilestonesMemories({ onImageClick }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeMilestoneId = searchParams.get('milestone');
  
  const [activeYear, setActiveYear] = useState("2026");
  const sectionRef = useRef(null);
  const prevActiveMilestoneId = useRef(activeMilestoneId);

  // Auto-scroll to section ref top on detail changes or exits
  useEffect(() => {
    if (prevActiveMilestoneId.current !== activeMilestoneId) {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    prevActiveMilestoneId.current = activeMilestoneId;
  }, [activeMilestoneId]);

  // Handle detailed route switching
  const handleOpenDetail = (id) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('milestone', id.toString());
    setSearchParams(nextParams);
  };

  const handleCloseDetail = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('milestone');
    setSearchParams(nextParams);
  };

  // Find active milestone detail if requested
  const activeMilestone = activeMilestoneId 
    ? milestoneEvents.find(m => m.id.toString() === activeMilestoneId)
    : null;

  const filteredMilestones = milestoneEvents.filter(item => item.year === activeYear);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white px-6 sm:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-100 scroll-mt-20"
    >
      <div className="max-w-[1298px] mx-auto flex flex-col">
        
        {/* ── CONDITIONAL VIEW 1: DEDICATED MILESTONE DETAIL VIEW PAGE ── */}
        {activeMilestone ? (
          <div className="w-full flex flex-col gap-8 animate-fadeIn">
            {/* Go Back button (Returns user back to list using browser search parameter sync) */}
            <button
              onClick={handleCloseDetail}
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-gray-700 hover:text-black font-extrabold text-xs sm:text-sm rounded-full border border-gray-200 shadow-sm cursor-pointer transition-all active:scale-95 self-start"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Back to Milestones</span>
            </button>

            {/* Title Header */}
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D1A] leading-tight tracking-tight m-0">
                {activeMilestone.title}
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-2 justify-center sm:justify-start text-xs sm:text-sm font-semibold text-gray-500">
                <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                  Year: {activeMilestone.year}
                </span>
                <span>Date: {activeMilestone.date}</span>
                <span>Venue: {activeMilestone.venue || "Kripa Library"}</span>
                <span>Attendees: {activeMilestone.attendees}</span>
              </div>
            </div>

            {/* Overlaid Slide-show Image Carousel Widget */}
            <ImageSlider images={activeMilestone.images} />

            {/* Full multi-paragraph content view block */}
            <div className="flex flex-col gap-4 max-w-4xl mx-auto mt-4">
              {activeMilestone.desc.split('\n\n').map((para, index) => (
                <p 
                  key={index}
                  className="text-gray-600 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed m-0"
                >
                  {para.split('**').map((chunk, i) => i % 2 === 1 ? <strong key={i} className="font-extrabold text-[#090D1A]">{chunk}</strong> : chunk)}
                </p>
              ))}
            </div>
          </div>
        ) : (
          /* ── CONDITIONAL VIEW 2: STANDARD MILESTONES MAIN LISTING PAGE ── */
          <div className="w-full flex flex-col">
            {/* Header */}
            <div className="text-center sm:text-left mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#090D1A] leading-tight tracking-tight mb-2">
                Milestones & Memories
              </h2>
              <p className="text-sm sm:text-base font-normal text-gray-500 leading-relaxed max-w-xl">
                A look back at the memories and celebrations that shaped our community.
              </p>
            </div>

            {/* Year Toggle Pills */}
            <div className="flex gap-2.5 mb-10 justify-center sm:justify-start">
              <button
                onClick={() => setActiveYear("2026")}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeYear === "2026"
                    ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:text-gray-800"
                }`}
              >
                2026
              </button>
              
              <button
                onClick={() => setActiveYear("2025")}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeYear === "2025"
                    ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:text-gray-800"
                }`}
              >
                2025
              </button>

              <button
                onClick={() => setActiveYear("2024")}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeYear === "2024"
                    ? "bg-[#3B82F6] text-white border-[#3B82F6] shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:text-gray-800"
                }`}
              >
                2024
              </button>
            </div>

            {/* Milestones Card grid List */}
            <div className="flex flex-col gap-12 sm:gap-16">
              {filteredMilestones.map((item, index) => (
                <MilestoneCard
                  key={item.id}
                  item={item}
                  index={index}
                  onReadMoreClick={() => handleOpenDetail(item.id)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
