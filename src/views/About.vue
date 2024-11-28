<template>
    <div class="h-[90dvh] overflow-auto md:w-2/3 xl:w-full px-5 lg:px-0 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div class="min-h-[90dvh] grid lg:grid-cols-2">
            <div class="flex items-center justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-full xl:lg:w-3/4">
            </div>
            <div class="flex flex-col justify-center items-center lg:items-start gap-y-5 lg:gap-y-10">
                <h1 class="font-bold text-3xl">About Us</h1>
                <p class="lg:w-3/4 text-justify">IncluCity: A Management Information System for Persons with Disabilities in the City of Malolos, Bulacan
                    IncluCity is a web-based management system developed to support the operations of the City Social Welfare and Development Office - Community Affairs Division (CSWDO CAD) in Malolos City. It serves as an inclusive online platform for Persons with Disabilities (PWDs) and citizens of Malolos, aiming to streamline the PWD ID application process, enhance data management, and improve communication between the CSWDO CAD Office and the public.
                </p>
            </div>
        </div>
        <div class="bg-yellow-700 h-fit p-5 lg:px-20 space-y-10 mt-10"> 
            <h1 class="text-center text-2xl text-white">Key Features and Functionalities</h1>
            <div class="grid lg:grid-cols-4 gap-10">
                <div>
                    <div class="bg-white h-fit lg:h-fit w-full rounded-xl shadow flex flex-col items-center p-10 gap-y-5">
                        <div class="border px-10 py-1 rounded-full">
                            <Icon icon="mage:star-moving" class="text-5xl text-custom-primary" />
                        </div>
                        <h1 class="font-medium text-lg lg:w-3/4 text-center">Accessible PWD ID Application Process</h1>
                        <p class="text-justify text-sm text-gray-700">
                            IncluCity provides an accessible platform for PWDs to apply for or renew IDs online, allowing digital submission of information and documents to reduce in-person visits.
                        </p>
                    </div>
                    <p class="text-center mt-2">Online Platform for PWDs</p>
                </div>
                <div>
                    <div class="bg-white h-fit lg:h-fit w-full rounded-xl shadow flex flex-col items-center p-10 gap-y-5">
                        <div class="border px-10 py-1 rounded-full">
                            <Icon icon="fluent:form-20-regular" class="text-5xl text-custom-primary" />
                        </div>
                        <h1 class="font-medium text-lg lg:w-3/4 text-center">Application Tracking and Updates</h1>
                        <p class="text-justify text-sm text-gray-700">
                            The platform lets applicants track application status and receive timely notifications, improving transparency and service efficiency.
                        </p>
                    </div>
                    <p class="text-center mt-2">Online Platform for PWDs</p>
                </div>
                <div>
                    <div class="bg-white h-fit lg:h-fit w-full rounded-xl shadow flex flex-col items-center p-10 gap-y-5">
                        <div class="border px-10 py-1 rounded-full">
                            <Icon icon="fluent:form-sparkle-20-regular" class="text-5xl text-custom-primary" />
                        </div>
                        <h1 class="font-medium text-lg lg:w-3/4 text-center">Data Management and Organization</h1>
                        <p class="text-justify text-sm text-gray-700">
                            IncluCity provides a secure database for the CSWDO CAD Office to store, manage, and organize PWD applicant data, centralizing records for easy access and updates.
                        </p>
                    </div>
                    <p class="text-center mt-2">Web-Based Management Information System for CSWDO CAD Office</p>
                </div>
                <div>
                    <div class="bg-white h-fit lg:h-fit w-full rounded-xl shadow flex flex-col items-center p-10 gap-y-5">
                        <div class="border px-10 py-1 rounded-full">
                            <Icon icon="guidance:calendar" class="text-5xl text-custom-primary" />
                        </div>
                        <h1 class="font-medium text-lg lg:w-3/4 text-center">Streamlined Workflow for PWD ID Processing</h1>
                        <p class="text-justify text-sm text-gray-700">
                            The system helps CSWDO CAD staff process applications, review information, and verify documents, speeding up approvals and ensuring data accuracy.
                        </p>
                    </div>
                    <p class="text-center mt-2">Web-Based Management Information System for CSWDO CAD Office</p>
                </div>
            </div>
        </div>
        <div class="min-h-[90dvh] grid lg:grid-cols-4 content-center gap-y-10 mt-10">
            <div class="flex items-center justify-center h-full lg:col-span-2">
                <h1 class="text-4xl text-center lg:w-3/5 border-b-2 pb-2 border-black">Administrative Communication and User Engagement</h1>
            </div>
            <div class="flex flex-col mx-auto h-1/2 lg:w-3/4 justify-start items-center gap-y-5 lg:gap-y-5">
                <div class="bg-custom-primary text-white px-4 py-1 rounded-full">
                    <h1 class="font-bold text-3xl">1</h1>
                </div>
                <h1 class="font-semibold">Notifications Updates</h1>
                <p class="lg:w-3/4 text-justify">IncluCity: A Management Information System for Persons with Disabilities in the City of Malolos, Bulacan
                    IncluCity equips the CSWDO CAD Office with tools to communicate directly with users, enabling announcements, application updates, reminders for ID expiration, and service notifications.
                </p>
            </div>
            <div class="flex flex-col mx-auto h-1/2 lg:w-3/4 justify-start items-center gap-y-5 lg:gap-y-5">
                <div class="bg-custom-primary text-white px-4 py-1 rounded-full">
                    <h1 class="font-bold text-3xl">2</h1>
                </div>
                <h1 class="font-semibold">User-Friendly Interface for End Users:</h1>
                <p class="lg:w-3/4 text-justify">User-Friendly Interface: The platform ensures accessibility for all, offering a seamless experience for PWDs and Malolos citizens to navigate, apply for services, and track application status.
                </p>
            </div>
        </div>
        <div class="lg:w-11/12 lg:px-10 mt-10">
            <div class="w-full bg-gray-200 h-fit rounded-xl shadow border border-gray-300 p-10 space-y-5">
                <h1 class="font-semibold text-xl">Benefits of Inclucity</h1>
                <ul class="list-disc list-inside space-y-2">
                    <li>Enhances the efficiency and transparency of the PWD ID application process.</li>
                    <li>Simplifies data management for the CSWDO CAD Office.</li>
                    <li>Fosters effective communication between the CSWDO CAD Office and the community.</li>
                    <li>Digitizes and centralizes the PWD application and management system.</li>
                    <li>Supports the city’s commitment to inclusivity and accessible services.</li>
                    <li>Improves the overall experience for PWDs in the community.</li>
                </ul>
            </div>
        </div>
        <div class="px-5 lg:px-20 mt-10">
            <img src="../assets/Final Banner.jpeg" alt="banner" class="w-full rounded-xl">
        </div>
        <div class="px-5 lg:px-20 mt-5 space-y-5">
            <p class="text-justify">IncluCity was born out of the collective vision and determination of a group of fourth-year Bachelor of Science in Information Technology students, specializing in Service Management. The project began in February 2024, with a mission to serve the Municipality of Malolos, Bulacan, and to bring meaningful change to the lives of Persons with Disabilities (PWDs) through a web-based platform aimed at supporting the City Social Welfare and Development Office (CSWDO). This system wasn’t just a course requirement—it was a heartfelt commitment to create a better, more inclusive community for everyone.
            </p>
            <div class="lg:flex gap-x-20">
                <p class="text-justify">The team, known as Technobytes, was formed in January 2024 under the leadership of Heart Angel Dela Cruz. With vision and determination, she guided the project forward. Allia Grace Rayo, the team’s link to outside partners, was meticulous in refining every detail and balancing outreach with proofreading. Her strong communication skills and attention to detail made a big difference. Trixie Ann Alipoza took on the essential role of data gathering, working diligently to ensure the accuracy and timeliness of information. Tyrelle Eissenhuey Sunga focused on programming, turning ideas into a working, user-friendly platform. Vangelyn Panganiban kept everyone on track with her coordination skills, helping each member stay aligned and focused. Abbygael Pamintuan was the steady, reliable force in the group, always ready to take on tasks and push through challenges, no matter how tough they seemed. Together, they formed a dedicated and well-rounded team.
                <br><br>
                Together, they crafted IncluCity with the understanding that, though they came from different backgrounds and had unique personalities, they shared a common goal. They spent long nights coding, gathering data, and refining every feature, driven by the hope that their project would make life just a little easier for the PWD community of Malolos. The journey was far from easy, but it was one of growth, friendship, and shared dreams. Despite the obstacles, the team carried on, knowing they were building something meaningful—not just to fulfill academic requirements, but to leave a lasting legacy of compassion and inclusivity in their community.
                </p>
                <img src="../assets/Logo_of_Team_5_-_TechnoBytes-removebg-preview.png" alt="logo team 5" class="lg;w-[22dvw] aspect-square">
            </div>
        </div>
        <hr class="border-gray-500 border">
        <h1 class="text-center my-5 font-semibold text-xl">In partnership with the CSWDO-CAD Office of the Municipality of Malolos, Bulacan</h1>
        <div class="mt-10 px-5 lg:px-20">
            <img src="../assets/e8cea15d-1429-4e33-9827-57a7bd1f9ad1.jpg" alt="banner2" class="rounded-xl">'
            <p>The City Social Welfare and Development Office - Community Affairs Division (CSWDO-CAD) of the Municipality of Malolos, Bulacan, focuses on enhancing the quality of life for vulnerable and marginalized groups within the community. This includes providing essential social welfare services, support, and empowerment programs for individuals such as children, senior citizens, women, families, and Persons with Disabilities (PWDs). The office is committed to promoting inclusivity, social protection, and community development, often through partnerships with local organizations, government agencies, and stakeholders.</p>
        </div>
        <div class="mt-10 px-5 lg:px-20 grid lg:grid-cols-4 gap-10 items-stretch relative">
            <div class="z-30">
                <h1 class="text-custom-primary font-semibold text-xl -mb-2 uppercase">Mission</h1>
                <div class="bg-yellow-800 rounded-xl !h-full p-5 text-center space-y-4">
                    <h1 class="font-semibold">Local government unit</h1>
                    <p class="font-light">A City of resilient citizenry enjoying a comfortable life.</p>
                    <h1 class="font-semibold">CITY SOCIAL WELFARE AND DEVELOPMENT OFFICE</h1>
                    <p class="font-light text-justify">To provide social protection and promote the rights and welfare of the poor, vulnerable and the disadvantaged individual, family, and community to contribute to poverty alleviation and empowerment through SWD policies, programs, projects and services implemented with or through LGU's, NGO's, PO's, GO's and other members of civil society</p>
                </div>
            </div>
            <div class="z-30">
                <h1 class="text-custom-primary font-semibold text-xl -mb-2 uppercase">Vision</h1>
                <div class="bg-yellow-800 rounded-xl !h-full p-5 text-center space-y-4">
                    <h1 class="font-semibold">Local government unit</h1>
                    <p class="font-light">To uplift the living condition of the people in the City of Malolos. A City of resilient citizenry enjoying a comfortable life.</p>
                    <h1 class="font-semibold">CITY SOCIAL WELFARE AND DEVELOPMENT OFFICE</h1>
                    <p class="font-light text-justify">A society where the poor, vulnerable, and disadvantaged families and communities are empowered for an improved quality of life.</p>
                </div>
            </div>
            <div class="z-30">
                <h1 class="text-custom-primary font-semibold text-xl -mb-2 uppercase">Objectives</h1>
                <div class="bg-yellow-800 rounded-xl !h-full p-5 text-center space-y-4">
                    <div class="bg-custom-primary w-fit mx-auto px-4 py-2 text-white rounded-full">
                        <h1 class="font-semibold">1</h1>
                    </div>
                    <p class="font-light text-justify">To package social welfare programs and services to needy and disadvantaged clientele.</p>
                    <div class="bg-custom-primary w-fit mx-auto px-4 py-2 text-white rounded-full !mt-10">
                        <h1 class="font-semibold">2</h1>
                    </div>
                    <p class="font-light text-justify">To empower disadvantaged and most vulnerable families to attain self-reliance and achieve self management capabilities.</p>
                </div>
            </div>
            <div class="z-30">
                <h1 class="text-custom-primary font-semibold text-xl -mb-2 uppercase">Core values</h1>
                <div class="bg-yellow-800 rounded-xl !h-full p-5 text-start space-y-4">
                    <ul class="list-disc list-inside">
                        <li class="font-medium">MALASAKIT (COMPASSION)</li>
                        <p class="pl-5 my-3">Concern and understanding for clients, organization and community</p>
                        <li class="font-medium">SERVICE EXCELLENCE</li>
                        <p class="pl-5 my-3">Driven to deliver the best quality results.</p>
                        <li class="font-medium">TEAM WORK/COLLABORATION</li>
                        <p class="pl-5 my-3">Working in harmony within the team and with other stakeholders to achieve a common goal.</p>
                        <li class="font-medium">INTEGRITY</li>
                        <p class="pl-5 my-3">Upholding the standards of being public servants through honesty, transparency and accountability.</p>
                    </ul>
                </div>
            </div>
            <img src="../assets/IMG_2559-removebg-preview.png" class="absolute -bottom-20 left-0 w-full h-full object-cover">
            <div class="absolute -bottom-20 left-0 w-full h-full bg-white/55"></div>
        </div>
        <Footer class="mt-16 w-full" />
    </div>
</template>

<script setup>
import Footer from '../components/footer.vue'
</script>