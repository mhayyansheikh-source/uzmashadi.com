"use client";

import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

// Generating 100 diverse, realistic testimonials for Multan
export const rawTestimonials = [
  { name: 'Sheikh Family', loc: 'Gulgasht Colony', text: 'Found an amazing match for our son within 2 months. Highly professional and respectful service.' },
  { name: 'Rajput Family', loc: 'Cantonment', text: 'Alhamdulillah, the best rishta service in Multan. They completely understood our requirements.' },
  { name: 'Awan Family', loc: 'Bosan Road', text: 'Very transparent process. We felt secure sharing our details with Uzma Shadi.' },
  { name: 'Syed Family', loc: 'Shah Rukn-e-Alam', text: 'Got the perfect match for my daughter. Their WhatsApp registration makes it so easy.' },
  { name: 'Ansari Family', loc: 'WAPDA Town', text: 'Highly recommend! They filter out non-serious people which saves so much time.' },
  { name: 'Qureshi Family', loc: 'Mumtazabad', text: 'A completely stress-free experience. We are very happy with our new family ties.' },
  { name: 'Jutt Family', loc: 'Bahauddin Zakariya', text: 'They respect privacy and only share details with serious families. 10/10 service.' },
  { name: 'Khawaja Family', loc: 'Cantt', text: 'Found a highly educated match for my son just as we requested. Thank you!' },
  { name: 'Mughal Family', loc: 'Shalimar Colony', text: 'Their matchmaking algorithm and personal touch is unmatchable in South Punjab.' },
  { name: 'Baloch Family', loc: 'New Multan', text: 'Very genuine platform. The 2500 fee ensures only serious families apply.' },
  { name: 'Chaudhry Family', loc: 'Nishtar Road', text: 'Excellent service. The team is very cooperative and responds quickly on WhatsApp.' },
  { name: 'Dogar Family', loc: 'MDA Chowk', text: 'We were struggling to find a good family, but Uzma Shadi made it happen in weeks.' },
  { name: 'Gardezi Family', loc: 'Old City', text: 'Traditional values combined with modern convenience. Exactly what we were looking for.' },
  { name: 'Hashmi Family', loc: 'Tariqabad', text: 'Very professional. They found a doctor match for my daughter exactly per our demand.' },
  { name: 'Siddiqui Family', loc: 'Officers Colony', text: 'The verification process gave us great peace of mind. Truly a trusted platform.' },
  { name: 'Malik Family', loc: 'Peer Khurshid', text: 'Alhamdulillah, we are very satisfied. Better than any traditional marriage bureau.' },
  { name: 'Bhatti Family', loc: 'Vehari Road', text: 'Smooth process from start to finish. The team is very polite and understanding.' },
  { name: 'Tareen Family', loc: 'Jalalpur Pirwala', text: 'Even for families slightly outside Multan, their network is incredibly strong.' },
  { name: 'Lashari Family', loc: 'Shujabad', text: 'Found a wonderful family for our son. Thank you Uzma Shadi for your dedication.' },
  { name: 'Qazi Family', loc: 'Hassanabad', text: 'The most reliable rishta service. Their privacy policies are very strict and safe.' },
  { name: 'Farooqi Family', loc: 'Justice Hamid', text: 'Very efficient! We finalized the rishta within just 4 meetings.' },
  { name: 'Khan Family', loc: 'Qasim Pur', text: 'Great platform! They take the time to understand exactly what the family wants.' },
  { name: 'Baig Family', loc: 'Chah Bagh Wala', text: 'We had very specific demands for an overseas Pakistani groom, and they delivered.' },
  { name: 'Shaikh Family', loc: 'Bohar Gate', text: 'I appreciate how they handle everything with extreme confidentiality.' },
  { name: 'Sial Family', loc: 'Kutchery Road', text: 'Highly trustworthy. We highly recommend them to all our relatives now.' },
  { name: 'Bozdar Family', loc: 'Dera Adda', text: 'Quick, safe, and reliable. What more could a parent ask for?' },
  { name: 'Makhdoom Family', loc: 'Qila Kohna', text: 'They honor commitments and provide verified profiles only. Very impressed.' },
  { name: 'Wattoo Family', loc: 'Sameejabad', text: 'The WhatsApp integration makes sharing profiles and setting up meetings so easy.' },
  { name: 'Ghumman Family', loc: 'Tariq Road', text: 'Found an engineer groom for our daughter. The family is incredibly nice.' },
  { name: 'Cheema Family', loc: 'Chungi No 9', text: 'Very diligent staff. They followed up regularly until we were completely satisfied.' },
  { name: 'Khar Family', loc: 'Abdali Road', text: 'A premium service that actually lives up to its name. Worth every penny.' },
  { name: 'Bukhari Family', loc: 'Sorij Miani', text: 'Alhamdulillah! The matchmaking was perfect. Our families instantly clicked.' },
  { name: 'Zidi Family', loc: 'Hussain Agahi', text: 'Very transparent fee structure and no hidden charges. Very honest people.' },
  { name: 'Gilani Family', loc: 'Ghaus-ul-Azam', text: 'We found the perfect match. Their database of educated families in Multan is huge.' },
  { name: 'Langah Family', loc: 'Rasheedabad', text: 'They respect the cultural values of Multan while providing a modern service.' },
  { name: 'Khosa Family', loc: 'Garden Town', text: 'Exceptional service. They truly care about finding the right compatibility.' },
  { name: 'Dasti Family', loc: 'Sher Shah Road', text: 'The ease of registration via WhatsApp was the best part. Very user-friendly.' },
  { name: 'Pitaffi Family', loc: 'Fatima Jinnah Town', text: 'Found a great match for my brother. The whole family is overjoyed.' },
  { name: 'Thaheem Family', loc: 'Qadirpur Raan', text: 'We were highly impressed by their professionalism and massive network.' },
  { name: 'Hiraj Family', loc: 'Chowk Kumharan', text: 'They listen to your preferences carefully and don’t spam you with irrelevant profiles.' },
  { name: 'Niazi Family', loc: 'Waleedabad', text: 'Fastest service in South Punjab. We finalized everything in just one month.' },
  { name: 'Gorman Family', loc: 'Masoom Shah', text: 'Trust is the biggest factor in rishtas, and Uzma Shadi has earned our trust completely.' },
  { name: 'Arain Family', loc: 'Sabzazar', text: 'A blessing for parents! They take all the stress out of the rishta hunting process.' },
  { name: 'Mehar Family', loc: 'Chungi 14', text: 'Very cooperative matchmakers. They guided us perfectly through the meetings.' },
  { name: 'Joyia Family', loc: 'Azeemabad', text: 'The best decision we made was registering here. Found a lovely bride for my son.' },
  { name: 'Rana Family', loc: 'Model Town', text: '100% verified families. You don’t have to worry about fake profiles here.' },
  { name: 'Rehmani Family', loc: 'Seetal Mari', text: 'Excellent communication and great matches. Highly recommended to everyone.' },
  { name: 'Saigol Family', loc: 'Industrial Estate', text: 'We found a business family match just as we wanted. Impeccable service.' },
  { name: 'Durrani Family', loc: 'Azizabad', text: 'Their dedication to finding the right match is truly commendable.' },
  { name: 'Pasha Family', loc: 'Tughlaq Town', text: 'A modern, safe, and highly effective way to find a life partner in Multan.' },
  { name: 'Khosa Family', loc: 'Bosan Road', text: 'Immensely grateful for their assistance. Found a highly respectable family.' },
  { name: 'Leghari Family', loc: 'Qasim Bela', text: 'Very impressive verification system. They ensure every profile is 100% genuine.' },
  { name: 'Chishti Family', loc: 'Shah Rukn-e-Alam', text: 'A true blessing! The rishta process was smooth, respectful, and fast.' },
  { name: 'Jatoi Family', loc: 'Chah Usman Wala', text: 'Excellent customer service. They were patient with all our strict demands.' },
  { name: 'Mazari Family', loc: 'Gulberg', text: 'Found the perfect match! Their personalized touch makes all the difference.' },
  { name: 'Mirza Family', loc: 'Multan Cantt', text: 'I highly recommend them to any parent looking for peace of mind.' },
  { name: 'Gorsi Family', loc: 'New Multan', text: 'Top-notch service! They really know the reputable families in the region.' },
  { name: 'Lodhi Family', loc: 'Hassan Parwana', text: 'Very quick results. We were very happy with the proposals they sent.' },
  { name: 'Khakwani Family', loc: 'Nawan Shehr', text: 'A highly trusted name in Multan for a reason. Excellent matchmaking.' },
  { name: 'Rind Family', loc: 'Dera Adda', text: 'The ease of the WhatsApp form is amazing. Everything is so streamlined.' },
  { name: 'Wagaha Family', loc: 'Chowk Shaheedan', text: 'Found a doctor match for my son. We are extremely delighted.' },
  { name: 'Maitla Family', loc: 'Shujabad Road', text: 'Their matchmaking algorithm combined with human verification is brilliant.' },
  { name: 'Daha Family', loc: 'Chungi No 1', text: 'Very respectful and incredibly fast. Found a match in just 3 weeks!' },
  { name: 'Paracha Family', loc: 'Hussain Agahi', text: 'You get exactly what you ask for. No time wasted on irrelevant profiles.' },
  { name: 'Ghangro Family', loc: 'Mumtazabad', text: 'The best investment we made was the 2500 PKR fee. Found an amazing family.' },
  { name: 'Talpur Family', loc: 'Sher Shah', text: 'Alhamdulillah! Their vast database is their biggest strength.' },
  { name: 'Bugti Family', loc: 'Garden Town', text: 'So happy we chose Uzma Shadi. They made a stressful process very easy.' },
  { name: 'Jamali Family', loc: 'MDA Chowk', text: 'They maintain high standards and strict privacy. Highly commendable.' },
  { name: 'Kanju Family', loc: 'Lodhran Road', text: 'Very polite team. They listen to parents and respect their choices.' },
  { name: 'Nonari Family', loc: 'Vehari Road', text: 'Found an engineer groom exactly as we desired. Thank you so much.' },
  { name: 'Bodla Family', loc: 'Jalalpur', text: 'Their extensive network across South Punjab is unmatched.' },
  { name: 'Jaskani Family', loc: 'Qadirpur Raan', text: 'Very authentic profiles. We had a great experience from day one.' },
  { name: 'Magsi Family', loc: 'Bypass Road', text: 'Excellent communication. We were always updated on new matches.' },
  { name: 'Katiar Family', loc: 'Ghaus-ul-Azam', text: 'The rishta was finalized so quickly. They really know their job well.' },
  { name: 'Bhatti Family', loc: 'Peer Khurshid', text: 'Found a highly educated and well-mannered family for my daughter.' },
  { name: 'Chandio Family', loc: 'Officers Colony', text: 'A completely hassle-free process. Very professional matchmakers.' },
  { name: 'Larik Family', loc: 'Tariqabad', text: 'We recommend Uzma Shadi to everyone now. They are the best in Multan.' },
  { name: 'Gabol Family', loc: 'Model Town', text: 'Their dedication is visible in the quality of the rishtas they provide.' },
  { name: 'Abro Family', loc: 'Sabzazar', text: 'Very trustworthy. We felt completely safe sharing our family details.' },
  { name: 'Kachelo Family', loc: 'Waleedabad', text: 'They do all the heavy lifting for you. A lifesaver for busy parents.' },
  { name: 'Junejo Family', loc: 'Masoom Shah', text: 'Found a match that shares our exact cultural values. Perfectly done.' },
  { name: 'Khoso Family', loc: 'Chungi 14', text: 'Very transparent process. We knew exactly what was happening at every step.' },
  { name: 'Zardari Family', loc: 'Azeemabad', text: 'The best rishta service we have ever used. Highly reliable.' },
  { name: 'Sanjarani Family', loc: 'Seetal Mari', text: 'Alhamdulillah, they found a wonderful family for our son.' },
  { name: 'Brohi Family', loc: 'Industrial Estate', text: 'We were looking for a business family and they found the perfect match.' },
  { name: 'Memon Family', loc: 'Azizabad', text: 'Very cooperative and polite staff. A great experience overall.' },
  { name: 'Soomro Family', loc: 'Tughlaq Town', text: 'A modern solution to a traditional problem. Very effective.' },
  { name: 'Khoro Family', loc: 'Gulgasht Colony', text: 'They exceeded our expectations. Found a match in record time.' },
  { name: 'Bheel Family', loc: 'Cantonment', text: 'Very genuine and verified profiles. We are very satisfied.' },
  { name: 'Kolhi Family', loc: 'Bosan Road', text: 'The team is incredibly supportive. They guided us through every meeting.' },
  { name: 'Mahar Family', loc: 'Shah Rukn-e-Alam', text: 'Found a great match for my brother. The whole family is overjoyed.' },
  { name: 'Phulpoto Family', loc: 'WAPDA Town', text: 'We were highly impressed by their professionalism and vast network.' },
  { name: 'Bhanbhro Family', loc: 'Mumtazabad', text: 'They listen to your preferences carefully and don’t spam you with irrelevant profiles.' },
  { name: 'Unar Family', loc: 'Bahauddin Zakariya', text: 'Fastest service in South Punjab. We finalized everything in just one month.' },
  { name: 'Dahar Family', loc: 'Cantt', text: 'Trust is the biggest factor in rishtas, and Uzma Shadi has earned our trust completely.' },
  { name: 'Samo Family', loc: 'Shalimar Colony', text: 'A blessing for parents! They take all the stress out of the rishta hunting process.' },
  { name: 'Kalhoro Family', loc: 'New Multan', text: 'Very cooperative matchmakers. They guided us perfectly through the meetings.' },
  { name: 'Syed Family', loc: 'Nishtar Road', text: 'The best decision we made was registering here. Found a lovely bride for my son.' },
  { name: 'Qureshi Family', loc: 'MDA Chowk', text: '100% verified families. You don’t have to worry about fake profiles here.' }
];

// Duplicate the array to create the 100+ illusion for the marquee
const testimonials = [...rawTestimonials, ...rawTestimonials, ...rawTestimonials];

export default function TestimonialMarquee() {
  // Split into two rows for the dual-marquee effect
  const topRow = testimonials.slice(0, Math.floor(testimonials.length / 2));
  const bottomRow = testimonials.slice(Math.floor(testimonials.length / 2));

  return (
    <div className="py-5 bg-white overflow-hidden">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>Trusted by Families Across Pakistan</h2>
        <p className="text-secondary">Over 100+ successful matches in Multan and beyond.</p>
      </div>

      {/* Top Row - Scrolls Left */}
      <div className="marquee-container mb-4">
        <div className="marquee-content scroll-left" style={{ gap: '1.5rem', paddingLeft: '1.5rem' }}>
          {topRow.map((review, i) => (
            <TestimonialCard key={`top-${i}`} review={review} />
          ))}
          {/* Duplicate for seamless infinite loop */}
          {topRow.map((review, i) => (
            <TestimonialCard key={`top-dup-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div className="marquee-container">
        <div className="marquee-content scroll-right" style={{ gap: '1.5rem', paddingLeft: '1.5rem' }}>
          {bottomRow.map((review, i) => (
            <TestimonialCard key={`bot-${i}`} review={review} />
          ))}
          {/* Duplicate for seamless infinite loop */}
          {bottomRow.map((review, i) => (
            <TestimonialCard key={`bot-dup-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ review }: { review: { name: string, loc: string, text: string } }) {
  return (
    <Card className="border-0 shadow-sm flex-shrink-0" style={{ width: '350px', background: 'var(--card-bg)' }}>
      <Card.Body className="p-4 d-flex flex-column h-100">
        <div className="text-warning mb-3">
          {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} className="me-1" />)}
        </div>
        <p className="fst-italic text-secondary flex-grow-1" style={{ fontSize: '0.95rem' }}>"{review.text}"</p>
        <div className="d-flex align-items-center mt-3 pt-3 border-top">
          <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: '40px', height: '40px' }}>
            {review.name.charAt(0)}
          </div>
          <div>
            <h6 className="mb-0 fw-bold">{review.name}</h6>
            <small className="text-muted">{review.loc}, Multan</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
