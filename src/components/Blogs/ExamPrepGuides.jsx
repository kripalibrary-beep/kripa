import React, { useState } from 'react';

// You can add more exams like SSC CGL, IIT JEE, etc., into this array.
const examsData = [
  {
    id: "upsc",
    title: "UPSC Civil Services",
    subtitle: "Complete Strategy Guide (2024-2025)",
    description: "A step-by-step roadmap curated from the strategies of successful IAS/IPS officers.",
    topics: [
      {
        id: "intro",
        title: "Introduction",
        content: (
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              Only 1 in 1,500 candidates clear the UPSC Civil Services exam. But here's what separates those who succeed from those who fail: A rock-solid preparation strategy.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              If you're reading this, you're probably asking yourself: "How do I prepare for UPSC? What's the right approach? Where do I even start?"
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This comprehensive guide answers all your questions. We've compiled strategies from successful IAS/IPS officers, analyzed top-performing candidates, and created a step-by-step roadmap that actually works.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">In this guide, you'll learn:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
                <li>Complete UPSC exam structure and syllabus breakdown</li>
                <li>Two realistic preparation timelines (1-year and 2-year plans)</li>
                <li>Best books and resources that actually matter</li>
                <li>A daily study routine template you can follow</li>
                <li>Mock test strategy used by successful toppers</li>
                <li>Common mistakes to avoid</li>
                <li>Success tips from IAS toppers</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "understanding",
        title: "Understanding the Exam",
        content: (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Before jumping into preparation, you need to understand what you're up against.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">What is the UPSC Civil Services Examination?</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                The Union Public Service Commission (UPSC) conducts India's most prestigious and challenging civil service examination. It selects officers for services like:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">IAS</span>
                  <span className="text-gray-700"><strong>Indian Administrative Service</strong><br/><span className="text-sm text-gray-500">Administrative roles</span></span>
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">IPS</span>
                  <span className="text-gray-700"><strong>Indian Police Service</strong><br/><span className="text-sm text-gray-500">Law enforcement</span></span>
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">IFS</span>
                  <span className="text-gray-700"><strong>Indian Foreign Service</strong><br/><span className="text-sm text-gray-500">Diplomacy</span></span>
                </li>
                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">ALL</span>
                  <span className="text-gray-700"><strong>Other Central Services</strong><br/><span className="text-sm text-gray-500">Forest, Railway, etc.</span></span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">The Three Stages of UPSC Exam</h3>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow mb-6 relative overflow-hidden">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Stage 1: Civil Services Prelims</h4>
                <p className="text-gray-500 mb-6 text-sm font-medium">Objective-type test with multiple-choice questions (2 hours each)</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-3 border-b pb-2">Paper 1: General Studies</h5>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li className="flex justify-between"><span>Questions:</span> <strong>100</strong></li>
                      <li className="flex justify-between"><span>Marks:</span> <strong>200</strong></li>
                      <li className="pt-2"><strong>Topics:</strong> History, Geography, Polity, Economy, Science, Current Affairs</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-3 border-b pb-2">Paper 2: CSAT</h5>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li className="flex justify-between"><span>Questions:</span> <strong>80</strong></li>
                      <li className="flex justify-between text-orange-600"><span>Marks:</span> <strong>200 (Qualifying)</strong></li>
                      <li className="pt-2"><strong>Topics:</strong> Comprehension, Logic, Analytical ability, Decision-making</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow mb-6 relative overflow-hidden">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Stage 2: Civil Services Mains</h4>
                <p className="text-gray-500 mb-6 text-sm font-medium">Subjective mains exam. Tests ability to write, analyze, and express ideas.</p>
                <ul className="text-gray-700 text-sm space-y-3">
                  <li className="flex justify-between border-b pb-1"><span>GS Paper 1 (Indian Heritage, Culture, History, Geography)</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between border-b pb-1"><span>GS Paper 2 (Governance, Constitution, Social Justice)</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between border-b pb-1"><span>GS Paper 3 (Technology, Environment, Economy)</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between border-b pb-1"><span>GS Paper 4 (Ethics, Integrity, Aptitude)</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between border-b pb-1"><span>Optional Subject (2 papers)</span> <strong>500 marks</strong></li>
                  <li className="flex justify-between border-b pb-1"><span>English (Essay writing, comprehension)</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between"><span>Indian Language</span> <strong>300 marks</strong></li>
                  <li className="flex justify-between font-bold text-blue-700 pt-2 mt-2 border-t border-gray-300"><span>Total Mains Marks</span> <span>2,300</span></li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow mb-6 relative overflow-hidden">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Stage 3: Personality Test/Interview</h4>
                <p className="text-gray-500 mb-4 text-sm font-medium">A 20-minute interview panel assessing your traits. (275 Marks)</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Communication</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Depth of knowledge</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Leadership</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Ethical thinking</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">Exam Difficulty</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">UPSC is harder because of its vast syllabus, subjective mains, unpredictable patterns, and extreme competition (0.06-0.1% success rate). But remember, the exam tests aptitude, not genius.</p>
            </div>
          </div>
        )
      },
      {
        id: "timeline",
        title: "Preparation Timeline",
        content: (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Complete UPSC Preparation Timeline</h3>
            <p className="text-lg text-gray-700">Your timeline determines your preparation quality. Here are two realistic paths.</p>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2">The 1-Year Intensive Plan</h4>
              <p className="text-gray-600 font-medium">Best for candidates with strong basics or specific background.</p>
              
              <div className="grid gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 1-2: Foundation Building (NCERTs)</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Understanding basics thoroughly (4-5 hours daily)</li>
                    <li>Read NCERT books (Class VI-XII)</li>
                    <li>Read The Hindu newspaper (45 mins daily)</li>
                    <li><strong>Goal:</strong> Complete 60% of NCERT</li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 3-4: Core Subject Mastery</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Deep understanding of GS subjects (6-7 hours daily)</li>
                    <li>Indian Polity (Laxmikanth), Modern India (Bipin Chandra), Geography</li>
                    <li>Make comprehensive notes</li>
                    <li><strong>Goal:</strong> Complete 80% of core subjects</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 5-6: Advanced Topics</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Economy, Environment, Science & Tech, IR (7-8 hours daily)</li>
                    <li>Start reading opinion articles and editorials</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 7-8: Revision & Consolidation</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Revise everything, start mains prep (7-8 hours daily)</li>
                    <li>Start answer writing practice (2-3 practice answers daily)</li>
                    <li>Take 2 prelim mocks per week</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 9: Prelims Focus</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Intense prelims preparation (8-9 hours daily)</li>
                    <li>Daily mock tests (1-2 per day) and analysis</li>
                    <li><strong>Goal:</strong> Achieve 70-75% in mocks consistently</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 10-12: Mains Preparation</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Focus:</strong> Answer writing and full-length mocks (8-9 hours daily)</li>
                    <li>Interview prep (if you reach this stage)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <h4 className="text-2xl font-bold text-green-700 border-b-2 border-green-100 pb-2">The 2-Year Balanced Plan (RECOMMENDED)</h4>
              <p className="text-gray-600 font-medium">Best for most candidates. Provides better understanding and less burnout.</p>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h5 className="font-bold text-green-900 mb-4 text-xl">Year 1: Steady Foundation</h5>
                <ul className="space-y-3 text-gray-800 text-sm">
                  <li><strong>Months 1-4:</strong> NCERTs + Basic Understanding (4-5 hours/day)</li>
                  <li><strong>Months 5-8:</strong> Core Subject Mastery & Answer Writing (6-7 hours/day)</li>
                  <li><strong>Months 9-12:</strong> Advanced Topics & First Batch of Mocks (6-7 hours/day)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h5 className="font-bold text-blue-900 mb-4 text-xl">Year 2: Prelims + Mains</h5>
                <ul className="space-y-3 text-gray-800 text-sm">
                  <li><strong>Months 1-3:</strong> Intensive Revision & Weak Area Focus (7-8 hours/day)</li>
                  <li><strong>Months 4-6:</strong> Prelims Exam Preparation & Speed Practice (8-9 hours/day)</li>
                  <li><strong>Months 7-9:</strong> Mains Preparation & Optional Subject Focus (8-9 hours/day)</li>
                  <li><strong>Months 10-12:</strong> Interview Preparation</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "resources",
        title: "Best Resources",
        content: (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Here's the truth: You don't need 20+ books. You need 5-6 good books, read thoroughly.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Must-Use Books (Non-Negotiable)</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">1. NCERT Books (Class VI-XII)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Official syllabus, clear explanations.<br/><strong>Time:</strong> 2-3 months.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">2. M. Laxmikanth - "Indian Polity"</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Only reliable book on Constitution.<br/><strong>Time:</strong> 3-4 weeks.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">3. Bipin Chandra - "Modern India"</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Best for history & freedom struggle.<br/><strong>Time:</strong> 2-3 weeks.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">4. Khullar - "World Physical Geo"</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Standard reference for geography.<br/><strong>Time:</strong> 3-4 weeks.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
                <h4 className="font-bold text-lg text-blue-700">5. Ramesh Singh - "Indian Economy"</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Makes complex economics simple.<br/><strong>Time:</strong> 2-3 weeks.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Online Platforms for Current Affairs</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Free Resources</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                    <li>The Hindu Newspaper (6:00 AM daily)</li>
                    <li>Indian Express (weekends)</li>
                    <li>The Hindu Editorial Analysis (YouTube)</li>
                    <li>PolicyWala (YouTube)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Paid Resources</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                    <li>Forumias Current Affairs</li>
                    <li>Vision IAS Current Affairs PDF</li>
                    <li>InsightsiAS Current Affairs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2">Coaching vs Self-Study</h4>
              <p className="text-gray-800 text-sm leading-relaxed">
                Coaching is not mandatory, but helps with structured guidance. Self-study saves cost and provides deeper learning. Best approach: Self-study foundation (first 3-4 months) + Selective coaching for mains and interview if budget allows.
              </p>
            </div>
          </div>
        )
      },
      {
        id: "routine",
        title: "Daily Study Routine",
        content: (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Your daily routine is your backbone. Here's a proven template used by successful candidates:
            </p>
            
            <div className="relative border-l-2 border-blue-300 ml-4 pl-8 space-y-8">
              
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Morning Session <span className="text-blue-600 text-base font-medium">(6:00 AM - 12:30 PM)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>6:00 - 6:30 AM:</strong> Wake up, cold shower, 10 mins meditation.</li>
                  <li><strong>6:30 - 7:15 AM:</strong> Read The Hindu, make quick notes.</li>
                  <li><strong>7:15 - 9:00 AM:</strong> Subject Study Block 1 (High concentration).</li>
                  <li><strong>9:15 - 10:45 AM:</strong> Subject Study Block 2 (Detailed notes).</li>
                  <li><strong>11:00 - 12:30 PM:</strong> Revision Block (Move knowledge to long-term memory).</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Afternoon <span className="text-yellow-600 text-base font-medium">(12:30 PM - 5:00 PM)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>12:30 - 1:15 PM:</strong> Lunch.</li>
                  <li><strong>1:15 - 2:00 PM:</strong> Power nap (consolidation of memory).</li>
                  <li><strong>2:00 - 3:30 PM:</strong> Practice Block (Mocks / Answer writing).</li>
                  <li><strong>3:45 - 5:00 PM:</strong> Optional Subject Study.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Evening & Night <span className="text-indigo-600 text-base font-medium">(5:00 PM - 10:30 PM)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>5:00 - 5:30 PM:</strong> Light walk or yoga.</li>
                  <li><strong>5:30 - 7:00 PM:</strong> Current Affairs Deep Dive.</li>
                  <li><strong>7:00 - 8:00 PM:</strong> Daily Revision.</li>
                  <li><strong>8:00 - 10:30 PM:</strong> Family time & Dinner.</li>
                  <li><strong>10:30 PM:</strong> Sleep (Consistent 7-8 hours).</li>
                </ul>
              </div>

            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 mt-8">
              <h5 className="font-bold text-yellow-900 mb-2">Flexibility matters!</h5>
              <p className="text-sm text-yellow-800">
                Adjust based on your chronotype. Night owls can shift study to the evening. Working professionals can do 4 AM-6 AM plus weekends. Key principle: Find your peak hours when your mind is sharpest.
              </p>
            </div>
          </div>
        )
      },
      {
        id: "mocks",
        title: "Mock Test Strategy",
        content: (
          <div className="space-y-6">
            <p className="text-xl font-medium text-gray-900 mb-6 italic border-l-4 border-gray-300 pl-4">
              "You'll learn more from analyzing one mock test than from reading one entire book."
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prelims Mock Test Strategy</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li><strong>Months 9-10:</strong> 2 mocks per week.</li>
              <li><strong>Months 11 onwards:</strong> 3-4 mocks per week.</li>
              <li><strong>Final month:</strong> 5-6 mocks per week.</li>
              <li><strong>Total mocks before exam:</strong> 50-60.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Take a Mock Test</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-red-600 mb-2">During the mock</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-inside list-disc">
                  <li>Sit in silence</li>
                  <li>Follow time limits strictly (2 hours)</li>
                  <li>Don't refer to internet/books</li>
                  <li>Mark on actual OMR sheet</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-green-600 mb-2">After the mock</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-inside list-disc">
                  <li>Track scores in Excel</li>
                  <li>Analyze wrong topics</li>
                  <li>Analyze time spent per question</li>
                  <li>Calculate accuracy % by topic</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-6">
              <h4 className="font-bold text-blue-900 mb-4 text-lg">The Mock Analysis Framework (CRUCIAL)</h4>
              <ul className="space-y-3 text-blue-800 text-sm">
                <li><strong>1. Question-wise Analysis:</strong> Was it a "Lack of knowledge" or "Silly mistake"?</li>
                <li><strong>2. Topic-wise Performance:</strong> Identify weak topics (less than 50% accuracy).</li>
                <li><strong>3. Time Spent Analysis:</strong> Which questions took too long? Did you rush?</li>
                <li><strong>4. Revision Plan:</strong> Revise weak topics before taking the next mock.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "mistakes",
        title: "Mistakes to Avoid",
        content: (
          <div className="space-y-6">
            <p className="text-lg text-gray-700 mb-6">These are mistakes that waste 6-12 months of preparation. Learn from others' mistakes.</p>

            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">1. Reading Too Many Books</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Stick to 5-6 core books and read them thoroughly (2-3 times).</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">2. Starting Answer Writing Too Late</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Start answer writing by Month 8. Write 2-3 answers daily.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">3. Ignoring Current Affairs</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Read the newspaper daily from day 1 for 45-60 minutes.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">4. Perfection Paralysis</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> 70-80% understanding is enough initially. Move ahead and revisit during revision.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">5. Skipping Optional Subject</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Start optional by Month 6-7. Spend 1-1.5 hours daily alongside GS.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">6. Inconsistent Current Affairs</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Daily reading is non-negotiable. Treat it like a job.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-2">7. Studying in a Distracting Environment</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Use a dedicated study space. Silence is critical. Kripa Library provides this distraction-free environment.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "environment",
        title: "Study Environment",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of Proper Study Environment</h3>
            <p className="text-lg text-gray-700">Your study environment can increase your score by 30-40%.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4">Home Study Challenges</h4>
                <ul className="list-disc pl-5 text-red-700 text-sm space-y-2">
                  <li>Family interruptions</li>
                  <li>Domestic noise (TV, street traffic)</li>
                  <li>Distractions nearby (Phone, Netflix)</li>
                  <li>Low discipline</li>
                  <li>Isolation & lack of peer motivation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4">Ideal Study Space (Library)</h4>
                <ul className="list-disc pl-5 text-green-700 text-sm space-y-2">
                  <li>Absolute Silence</li>
                  <li>AC/Comfort & Ergonomic seating</li>
                  <li>No distractions</li>
                  <li>Professional environment</li>
                  <li>Community motivation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-blue-200 shadow-md p-6 rounded-2xl mt-8">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Why Kripa Library Helps</h4>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                When you study in the same dedicated cabin daily, your brain gets conditioned for learning. You experience a 40% productivity improvement (4 extra productive hours/day), leading to better focus and a much higher success rate in the first attempt.
              </p>
            </div>
          </div>
        )
      },
      {
        id: "tips",
        title: "Toppers' Tips",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Tips from IAS Toppers</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">1. Read NCERT Like a Scripture</h4>
                <p className="text-sm text-gray-600 mt-1">Read 4-5 times. First for big picture, second for notes, third for connections.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">2. The Hindu Newspaper is Your Secret</h4>
                <p className="text-sm text-gray-600 mt-1">Don't just read headlines, go deeper and link news to UPSC topics.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">3. Write Answers by Hand</h4>
                <p className="text-sm text-gray-600 mt-1">Develops writing skills, simulates exam conditions, and improves memory retention.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">4. Join a Study Group</h4>
                <p className="text-sm text-gray-600 mt-1">Find 3-4 serious aspirants. Discussing solidifies learning and keeps you motivated.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">5. Don't Study on Exam Day</h4>
                <p className="text-sm text-gray-600 mt-1">Rest your mind. Last-minute panic hurts performance.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">6. Mental Health is Foundation</h4>
                <p className="text-sm text-gray-600 mt-1">10 mins meditation + 30 mins exercise daily. Burnout is real.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">7. Consistency Over Intensity</h4>
                <p className="text-sm text-gray-600 mt-1">6-8 quality hours daily consistently is better than 12 sporadic hours.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "faq",
        title: "FAQ & Conclusion",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: Can I crack UPSC in 6 months?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: Possible but very difficult. Most experts recommend 1.5-2 years for comfortable preparation.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: Is UPSC coaching necessary?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: Not mandatory. Self-study for 3-4 months, then consider coaching if you feel stuck.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: Can I prepare with a full-time job?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: Yes, but requires exceptional discipline (4 AM wake up, weekend grinds). Takes 2-3 years typically.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: What's the best optional subject?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: The one you're genuinely interested in. Don't choose thinking it's "easy".</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-blue-50 mb-4 leading-relaxed">
                UPSC is tough, but not impossible. The difference between those who crack it and those who don't is usually not intelligence. It's strategy, consistency, and persistence.
              </p>
              <ul className="list-disc pl-5 mb-6 text-sm text-blue-100 space-y-1">
                <li>Start immediately</li>
                <li>Be consistent (6-8 hours daily)</li>
                <li>Learn from mistakes in mocks</li>
                <li>Stay mentally strong</li>
              </ul>
              <div className="bg-white/20 p-4 rounded-xl text-center">
                <p className="font-bold text-lg">Ready to start?</p>
                <p className="text-sm mt-1">Book your free tour at Kripa Library and experience the environment designed for success.</p>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "cgl",
    title: "SSC CGL",
    subtitle: "Complete Preparation Strategy",
    description: "Master the SSC CGL exam with our comprehensive guide and study plan.",
    topics: [
      {
        id: "intro",
        title: "Introduction to SSC CGL",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SSC CGL Complete Strategy</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is one of the most popular exams for securing prestigious Group B and C posts in various ministries.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Content for this guide is currently being updated. Check back soon for the complete 100-day strategy plan.
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: "jee",
    title: "JEE & NEET",
    subtitle: "Science Students' Complete Guide 2024-2025",
    description: "Master JEE/NEET preparation with our complete guide. 2-year timeline, best books, daily routines, practice strategy & tips from toppers.",
    topics: [
      {
        id: "intro",
        title: "Introduction",
        content: (
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Want to crack JEE or NEET in your first attempt?</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Here's the truth: It's possible. But only if you have the right strategy.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Every year, 15+ lakh students take these exams. Only 1-2% crack them. The difference between those who succeed and those who fail isn't intelligence—it's preparation strategy, consistency, and proper guidance.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This comprehensive guide gives you exactly that: a proven roadmap used by engineering and medical toppers.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">In this guide, you'll learn:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
                <li>Complete breakdown of JEE vs NEET (which is harder?)</li>
                <li>Realistic 2-year preparation timeline (month-by-month)</li>
                <li>Best books and resources that actually work</li>
                <li>Daily study routine you can follow immediately</li>
                <li>How to solve practice problems like a topper</li>
                <li>Mock test strategy for maximum improvement</li>
                <li>Common mistakes to avoid</li>
                <li>Mental preparation and stress management</li>
                <li>Why study environment matters for competitive exams</li>
                <li>Success tips from IIT and AIIMS toppers</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "understanding",
        title: "Understanding JEE vs NEET",
        content: (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              First, let's understand what you're preparing for.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">What is JEE?</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                JEE is India's premier engineering entrance exam. It's divided into two levels:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-blue-700 mb-3 border-b pb-2">JEE Main</h5>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Format:</strong> Objective-type questions</li>
                    <li><strong>Questions:</strong> 90 (Physics, Chem, Math)</li>
                    <li><strong>Marks:</strong> 300 total (3 hours)</li>
                    <li><strong>Gateway to:</strong> NIT, IIIT, other colleges</li>
                    <li><strong>Difficulty:</strong> Medium</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-blue-700 mb-3 border-b pb-2">JEE Advanced</h5>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Format:</strong> Very difficult subjective/objective</li>
                    <li><strong>Questions:</strong> 2 papers × 3 hours</li>
                    <li><strong>Marks:</strong> 360 total</li>
                    <li><strong>Gateway to:</strong> IIT (Indian Institute of Technology)</li>
                    <li><strong>Difficulty:</strong> Very Hard (Top 0.1% of India)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-3">What is NEET?</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                NEET is the entrance exam for medical colleges in India.
              </p>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <ul className="text-gray-700 text-sm space-y-2">
                  <li><strong>For:</strong> Undergraduate medical programs (MBBS, BDS)</li>
                  <li><strong>Format:</strong> 180 multiple-choice questions (3 hours)</li>
                  <li><strong>Marks:</strong> 720 total (Physics 180, Chemistry 180, Biology 360)</li>
                  <li><strong>Gateway to:</strong> Medical colleges across India</li>
                  <li><strong>Difficulty:</strong> Hard (Easier concepts than JEE, but massive competition)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Head-to-Head Comparison</h3>
              <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3">Factor</th>
                      <th className="px-6 py-3 border-l">JEE Advanced</th>
                      <th className="px-6 py-3 border-l">NEET</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-bold">Difficulty</td>
                      <td className="px-6 py-4 border-l text-red-600">⭐⭐⭐⭐⭐ Very Hard</td>
                      <td className="px-6 py-4 border-l text-orange-500">⭐⭐⭐⭐ Hard</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-bold">Conceptual Depth</td>
                      <td className="px-6 py-4 border-l">Extreme depth</td>
                      <td className="px-6 py-4 border-l">Moderate depth</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-bold">Problem-Solving</td>
                      <td className="px-6 py-4 border-l">Requires innovation</td>
                      <td className="px-6 py-4 border-l">Requires recall + logic</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-bold">Success Rate</td>
                      <td className="px-6 py-4 border-l">0.1% (500/5L)</td>
                      <td className="px-6 py-4 border-l">0.3% (5000/15L)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <p className="font-bold text-yellow-900 mb-1">Which is harder?</p>
                <p className="text-sm text-yellow-800">JEE Advanced is objectively harder (requires deeper thinking). NEET is harder competitively (more students, fewer seats).</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "timeline",
        title: "2-Year Timeline",
        content: (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Complete 2-Year Preparation Timeline</h3>
            <p className="text-lg text-gray-700">Success requires smart planning. Here's your month-by-month roadmap.</p>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2">Year 1: Building Foundation (Class 11)</h4>
              
              <div className="grid gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 1-3: Introduction & NCERT</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Goal:</strong> Understand basic concepts thoroughly</li>
                    <li><strong>Physics:</strong> Mechanics (units, kinematics, Newton's laws) - 2 hours/day</li>
                    <li><strong>Chemistry:</strong> Atomic structure, bonding - 1.5 hours/day</li>
                    <li><strong>Biology (NEET):</strong> Cell structure, plant/animal biology - 1.5 hours/day</li>
                    <li><strong>Math (JEE):</strong> Sets, relations, algebra basics - 2 hours/day</li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 4-6: Concept Mastery</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Goal:</strong> Deep understanding of concepts</li>
                    <li><strong>Physics:</strong> Thermodynamics, electricity - 3 hours/day</li>
                    <li><strong>Chemistry:</strong> Reactions, stoichiometry, intro organic - 2.5 hours/day</li>
                    <li><strong>Action:</strong> Start solving reference books (HC Verma)</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 7-9: Advanced Concepts</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Goal:</strong> Advanced topics + problem-solving</li>
                    <li><strong>Physics:</strong> Optics, modern physics, waves</li>
                    <li><strong>Action:</strong> Time-based practice (speed building) and topic-wise tests</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">Months 10-12: Revision & Mocks</h5>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li><strong>Goal:</strong> Revision + first round of mocks (8-9 hours daily)</li>
                    <li>Complete revision of 9 months' content</li>
                    <li>Solve 1 full mock test per week</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <h4 className="text-2xl font-bold text-green-700 border-b-2 border-green-100 pb-2">Year 2: Mains + Advanced (Class 12)</h4>
              
              <div className="grid gap-4">
                <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
                  <h5 className="font-bold text-green-900 mb-2">Months 1-3: Advanced Mastery</h5>
                  <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
                    <li><strong>Goal:</strong> Master advanced topics + develop speed</li>
                    <li>Multi-concept problems and rapid problem solving</li>
                    <li>Mock tests: 2-3 per week</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
                  <h5 className="font-bold text-green-900 mb-2">Months 4-6: Intense Practice</h5>
                  <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
                    <li><strong>Goal:</strong> Build speed and accuracy (8-9 hours daily)</li>
                    <li>Solve 50-100 problems daily under time constraints</li>
                    <li>JEE: 4-5 full mocks/week | NEET: 3-4 full mocks/week</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
                  <h5 className="font-bold text-green-900 mb-2">Months 7-12: Final Polish & Exam</h5>
                  <ul className="list-disc pl-5 text-gray-800 text-sm space-y-1">
                    <li><strong>Goal:</strong> Consistent peak performance (9-10 hours daily)</li>
                    <li>JEE Mocks: 6-7/week | NEET Mocks: 5-6/week</li>
                    <li>Target: JEE Main (85-95 percentile), NEET (550-600+ marks)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "resources",
        title: "Best Resources",
        content: (
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Quality over quantity. Use the right books, not all books.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">For Both JEE & NEET</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">1. NCERT Textbooks (XI & XII)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Foundation. NEET: 60% questions direct. JEE: 60% concepts based on it.</p>
                <span className="mt-3 inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">100% Non-negotiable</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-blue-700">2. JD Lee / NCERT (Inorganic)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Standard reference for reactions and elements.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
                <h4 className="font-bold text-lg text-blue-700">3. MS Chauhan (Organic Chemistry)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Best for reaction mechanisms and synthesis.</p>
                <span className="mt-3 inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">YES for JEE | Optional for NEET</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mt-8">For JEE Specific</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900">4. HC Verma (Physics)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Best for understanding concepts and early practice.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900">5. IE Irodov (Physics)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Very hard. Advanced problems for JEE Advanced only.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900">6. RD Sharma (Mathematics)</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Comprehensive coverage with solved examples.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-green-500 pl-3 mt-8">For NEET Specific</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900">4. MTG Guide / Aakash Notes</h4>
                <p className="text-sm text-gray-600 mt-2"><strong>Why:</strong> Well-organized, condensed version of NCERT.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "routine",
        title: "Daily Study Routine",
        content: (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Your daily routine determines your success. Here's a proven schedule:
            </p>
            
            <div className="relative border-l-2 border-blue-300 ml-4 pl-8 space-y-8">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Morning Session <span className="text-blue-600 text-base font-medium">(6:00 AM - 12:00 PM)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>6:30 - 8:00 AM:</strong> Theory Study Block (90 mins). Read topic, make notes. Brain is freshest.</li>
                  <li><strong>8:15 - 9:45 AM:</strong> Theory Continuation (90 mins). Complete understanding.</li>
                  <li><strong>10:00 - 12:00 PM:</strong> Practice Block (120 mins). Solve problems from morning theory. Maintain error log.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Afternoon <span className="text-yellow-600 text-base font-medium">(12:00 PM - 5:00 PM)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>12:00 - 1:00 PM:</strong> Lunch + 30 min Power Nap (Memory consolidation).</li>
                  <li><strong>2:00 - 3:30 PM:</strong> Second Subject Theory (90 mins).</li>
                  <li><strong>3:45 - 5:00 PM:</strong> Practice Block 2 (75 mins). Build speed.</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white shadow"></span>
                <h4 className="text-xl font-bold text-gray-900">Evening & Night <span className="text-indigo-600 text-base font-medium">(5:00 PM Onwards)</span></h4>
                <ul className="mt-3 space-y-3 text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
                  <li><strong>5:00 - 5:30 PM:</strong> Walk/Relaxation. Mental rejuvenation.</li>
                  <li><strong>5:30 - 7:00 PM:</strong> Third Subject Theory & Practice.</li>
                  <li><strong>7:00 - 8:00 PM:</strong> Revision & Error Review. Understand mistakes.</li>
                  <li><strong>10:00 PM:</strong> Sleep (7-8 hours essential).</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "practice",
        title: "Practice Strategy",
        content: (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Practice Problems: The Most Important Step</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Here's an uncomfortable truth: Books don't crack competitive exams. Problem-solving does.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 mt-4">
              <h4 className="font-bold text-blue-900 mb-2">The Science of Retention:</h4>
              <ul className="list-disc pl-5 text-sm text-blue-800">
                <li>Reading = 20% retention</li>
                <li>Writing notes = 40% retention</li>
                <li><strong>Solving problems = 80% retention</strong></li>
              </ul>
            </div>

            <h4 className="text-2xl font-bold mt-8 mb-4">How to Solve Problems Correctly</h4>
            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h5 className="font-bold text-gray-900">Try Without Looking at Solution</h5>
                  <p className="text-sm text-gray-600 mt-1">Try hard to solve on your own. Write your working clearly.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h5 className="font-bold text-gray-900">Check Your Answer & Understand</h5>
                  <p className="text-sm text-gray-600 mt-1">If wrong, find exactly where you went wrong. Read the solution and understand the approach.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h5 className="font-bold text-gray-900">Create Error Log</h5>
                  <p className="text-sm text-gray-600 mt-1">Note the problem, topic, and mistake in a dedicated notebook.</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">4</div>
                <div>
                  <h5 className="font-bold text-gray-900">Revisit After 1 Week</h5>
                  <p className="text-sm text-gray-600 mt-1">Try the same problem again later to ensure permanent learning.</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "mocks",
        title: "Mock Test Strategy",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mock Tests are Your Reality Check</h3>
            <p className="text-lg text-gray-700 mb-6">
              When to start: JEE Main (Month 12) | NEET (Month 10) | JEE Advanced (Month 18)
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-red-600 mb-2">During the Mock</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-inside list-disc">
                  <li>Sit in silence, 3 hours uninterrupted</li>
                  <li>Follow strict time limits</li>
                  <li>Don't use external help</li>
                  <li>Mark carefully</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-green-600 mb-2">After the Mock (1.5 hours)</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-inside list-disc">
                  <li>Track scores and trends</li>
                  <li>Calculate accuracy % by topic</li>
                  <li>Analyze time spent per question</li>
                  <li>Create revision plan for weak topics</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-6">
              <h4 className="font-bold text-blue-900 mb-4 text-lg">Expected Performance Trend</h4>
              <ul className="space-y-3 text-blue-800 text-sm font-medium">
                <li><strong>Mocks 1-5:</strong> 30-50% (Normal, lots of learning)</li>
                <li><strong>Mocks 6-15:</strong> 50-65% (Concepts getting clearer)</li>
                <li><strong>Mocks 16-25:</strong> 65-75% (Good confidence building)</li>
                <li><strong>Final Mocks:</strong> 80%+ (Ready for actual exam)</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "mistakes",
        title: "Mistakes to Avoid",
        content: (
          <div className="space-y-6">
            <p className="text-lg text-gray-700 mb-6">Learn from others' mistakes. Don't waste 6 months on preventable errors.</p>

            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-1">1. Reading Too Much, Practicing Too Little</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Read concept → Immediately solve 5-10 problems.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-1">2. Speed Over Accuracy Early On</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> First 6 months focus on accuracy. Next 6 months build speed slowly.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-1">3. Coaching Without Self-Study</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> 25% coaching, 75% self-study (practice). Coaching alone won't crack exams.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-1">4. Neglecting One Subject</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Allocate time proportionally. Weak subjects get more time.</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-red-600 mb-1">5. Skipping Revision</h4>
                <p className="text-sm text-gray-700"><strong>Solution:</strong> Spaced repetition. Revise every topic at 1 week, 1 month, and 3 months.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "mentalhealth",
        title: "Mental Health",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health During Preparation</h3>
            <p className="text-lg text-gray-700 mb-6">Duration is 18-24 months of intense study. Stress is high, and burnout risk is significant.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">1. Exercise Daily</h4>
                <p className="text-sm text-blue-800">30 mins walking or yoga releases stress hormones and improves focus.</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">2. Adequate Sleep</h4>
                <p className="text-sm text-blue-800">7-8 hours. Brain consolidates memories during sleep. Quality sleep &gt; Extra study hours.</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">3. Break Times</h4>
                <p className="text-sm text-blue-800">5-10 mins every 2 hours. One day off per week (Sunday) prevents burnout.</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">4. Manage Expectations</h4>
                <p className="text-sm text-blue-800">Your worth ≠ Your exam score. Multiple attempts are normal.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "environment",
        title: "Study Environment",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of Proper Study Environment</h3>
            <p className="text-lg text-gray-700">Most underestimate this: Your study environment affects your score by 25-35%.</p>
            
            <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-2xl mt-6">
              <h4 className="font-bold text-gray-900 mb-4">Why Environment Matters</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li><strong>Brain Conditioning:</strong> Studying in the same location trains the brain to enter "learning mode," boosting productivity by up to 40%.</li>
                <li><strong>Silence:</strong> Crucial for solving complex JEE/NEET numericals.</li>
                <li><strong>Ergonomics:</strong> Proper desk height prevents backache during 8-hour sessions.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-lg mt-8">
              <h4 className="text-xl font-bold mb-4">Why Dedicated Study Centers (Like Kripa Library) Help</h4>
              <ul className="list-disc pl-5 text-sm text-blue-100 space-y-2 mb-6">
                <li>Zero family interruptions or household noise.</li>
                <li>Peer motivation: Seeing others study makes you study harder.</li>
                <li>24/7 access: Study during your natural peak hours.</li>
                <li>Professional setup signals to your brain: "This is serious business."</li>
              </ul>
              <div className="bg-white/20 p-4 rounded-xl text-center">
                <p className="font-bold text-lg">ROI of a Study Space</p>
                <p className="text-sm mt-1">If it helps you crack the exam in your first attempt, it saves 1-2 years of your life. Return: 250-500x!</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "tips",
        title: "Toppers' Tips",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Tips from IIT & AIIMS Toppers</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">1. Master NCERT Before Reference Books</h4>
                <p className="text-sm text-gray-600 mt-1">"I finished NCERT 3 times before touching any reference book."</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">2. Problem-Solving is Everything</h4>
                <p className="text-sm text-gray-600 mt-1">"I solved 15,000+ practice problems across 2 years. Speed comes from practice."</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">3. Maintain Error Log</h4>
                <p className="text-sm text-gray-600 mt-1">"My error log was my secret weapon. It prevents repeating the same errors."</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">4. Consistent Mock Taking</h4>
                <p className="text-sm text-gray-600 mt-1">"I took 2 mocks every week without fail to build exam temperament."</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900">5. Revise Regularly</h4>
                <p className="text-sm text-gray-600 mt-1">"Revision, not new learning, in the final 3 months. Brain forgets without it."</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "faq",
        title: "FAQ & Conclusion",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: Can I crack JEE/NEET in 1 year?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: Possible but very difficult. Requires exceptional dedication and prior knowledge. Most successful candidates take 18-24 months.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: Is it possible with school + JEE/NEET prep simultaneously?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: Yes, but challenging. Focus on prep in 12th grade. Score well in boards but don't sacrifice your JEE/NEET prep.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-900">Q: What if I'm not scoring well in mocks?</h4>
                  <p className="text-sm text-gray-700 mt-2">A: This is normal in the first 6-12 months. Focus on learning and analyzing mistakes. Your score will climb to 80%+ by the end of year 2.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                JEE and NEET are tough exams. But tough doesn't mean impossible. The key is smart planning, consistent execution (8-9 hours daily), focused practice, and mental strength.
              </p>
              <div className="bg-white/10 p-5 rounded-xl border border-gray-700 text-center mt-6">
                <p className="font-bold text-lg mb-2">Ready to Start?</p>
                <p className="text-sm text-gray-300 mb-4">Study in an environment designed for success. We've helped 200+ students crack JEE/NEET. Your success could be next.</p>
                <p className="text-blue-400 font-bold">→ Visit Kripa Library for your free facility tour.</p>
              </div>
            </div>
          </div>
        )
      }
    ]
  }
];

export default function ExamPrepGuides() {
  const [activeExamId, setActiveExamId] = useState(examsData[0].id);
  const activeExam = examsData.find(exam => exam.id === activeExamId);
  
  // Set the default topic when switching exams
  const [activeTopicId, setActiveTopicId] = useState(activeExam.topics[0].id);
  
  // Handle switching exams
  const handleExamSwitch = (examId) => {
    setActiveExamId(examId);
    const selectedExam = examsData.find(e => e.id === examId);
    setActiveTopicId(selectedExam.topics[0].id); // Reset to first topic of the new exam
  };

  const activeContent = activeExam.topics.find(topic => topic.id === activeTopicId);

  return (
    <section className="w-full bg-gray-50/50 py-12 md:py-20 px-4 sm:px-6 font-sans">
      <div className="max-w-[1298px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold tracking-wide uppercase text-xs">
            Exam Guides
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Complete Preparation Guides
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium mb-8">
            Select your target exam to access our comprehensive, step-by-step roadmaps.
          </p>
          
          {/* Exam Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {examsData.map((exam) => (
              <button
                key={exam.id}
                onClick={() => handleExamSwitch(exam.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
                  activeExamId === exam.id
                    ? "bg-gray-900 text-white shadow-md transform scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {exam.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Exam Header */}
        <div className="bg-white rounded-t-3xl border-x border-t border-gray-200 p-6 sm:p-8 text-center sm:text-left shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-2">
            {activeExam.subtitle}
          </h3>
          <p className="text-gray-600 font-medium">
            {activeExam.description}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-0 items-start bg-white rounded-b-3xl border border-gray-200 shadow-md overflow-hidden">
          
          {/* Left Navigation Menu (Topics) */}
          <div className="w-full lg:w-[320px] shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50">
            <div className="p-4 flex overflow-x-auto lg:flex-col lg:overflow-visible gap-2 hide-scrollbar snap-x">
              <h4 className="hidden lg:block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Contents</h4>
              {activeExam.topics.map((topic, index) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`text-left px-4 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal font-medium text-sm sm:text-base flex items-center justify-between group snap-start shrink-0 lg:w-full ${
                    activeTopicId === topic.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200/50"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0 ${activeTopicId === topic.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500 group-hover:bg-blue-200 group-hover:text-blue-700"}`}>
                      {index + 1}
                    </span>
                    <span className="line-clamp-2">{topic.title}</span>
                  </span>
                  {activeTopicId === topic.id && (
                    <svg className="w-5 h-5 hidden lg:block text-white/70 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-grow w-full bg-white p-6 sm:p-10 md:p-12 min-h-[500px]">
            {activeExam.topics.map((topic) => (
              <article 
                key={`${activeExamId}-${topic.id}`}
                className={`animate-fade-in ${activeTopicId === topic.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-3xl font-extrabold text-gray-900 mb-8 pb-6 border-b border-gray-100">
                  {topic.title}
                </h3>
                <div className="prose max-w-none prose-lg prose-blue text-gray-700">
                  {topic.content}
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
