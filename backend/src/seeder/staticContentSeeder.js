// // seeder/staticContentSeeder.js
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const StaticContent = require('../models/staticContentModel');

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_CONN)
//   .then(() => {
//     console.log('MongoDB connected');
//     return seedStaticContent();
//   })
//   .catch((err) => console.error('Connection error:', err));
//   console.log('MONGO_CONN =', process.env.MONGO_CONN);


// async function seedStaticContent() {
//   try {
//     await StaticContent.deleteMany(); // optional: clears old data
//     await StaticContent.create([
//       { type: 'about-us', 
//         content: `Shower Share is an innovative app designed to make sharing bathroom resources easier, more convenient, and sustainable. Whether you're a college student, a young professional, or anyone with limited access to private bathrooms, Shower Share is here to provide a seamless and respectful platform for sharing shower spaces.
// Our mission is to create a community-driven platform that connects people in need of shower facilities with those who have them available, all while ensuring safety, privacy, and convenience.
// Why Shower Share?
// Sustainable Living: We aim to reduce water waste and promote eco-friendly practices by encouraging the efficient use of bathroom resources.
// Convenience: Never struggle to find a shower when you need one again. With Shower Share, you can easily locate nearby available showers and book a time slot within seconds.
// Community-Focused: Shower Share isn’t just an app; it's a community. We prioritize mutual respect, privacy, and trust among users.
// Privacy & Safety: Our platform ensures that both users and hosts are verified and reviews are transparent to guarantee a safe and pleasant experience for everyone.
// Whether you’re traveling, moving between homes, or just need a clean, private space to refresh, Shower Share is the answer.
// Join the Shower Share community today, and let’s make everyday life a little bit easier and a lot more sustainable.` },
//       { type: 'terms', 
//         content: `Welcome to Shower Share!
// These Terms and Conditions ("Terms") govern your use of the Shower Share mobile application ("App") and the services offered through it. By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
// 1. Acceptance of Terms
// By downloading, installing, or using the Shower Share App, you agree to these Terms, including any future modifications. We reserve the right to update or change these Terms at any time, and your continued use of the App after any changes will constitute your acceptance of the updated Terms.
// 2. Description of the App
// Shower Share is a mobile application that allows users to [describe the main function of the app, e.g., "share shower spaces, book available showers, track shower time, etc."].
// The app may also provide additional features and services, which may be subject to additional terms and conditions.
// 3. User Eligibility
// To use the App, you must be at least [insert age requirement] years old or the legal age of majority in your jurisdiction. By using the App, you represent and warrant that you meet these requirements.
// 4. User Accounts
// Account Creation: To access certain features, you may be required to create an account. When you create an account, you agree to provide accurate, current, and complete information and to update it as necessary.
// Account Security: You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. Notify us immediately if you suspect any unauthorized use of your account.` },
//       { type: 'privacy', 
//         content: `At Shower Share, we respect and protect your privacy. This Privacy Policy explains how we collect, use, store, and share information when you use our mobile application ("App") and related services ("Services"). By using the Shower Share App, you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the App
// We may collect the following types of information:
// Personal Information: When you create an account, we may collect your name, email address, phone number, and other details.
// Usage Data: Information on how you use the App, including IP address, device information, and usage patterns.
// Location Data: If you enable location services, we may collect location data to help you find available showers near you.` }
//     ]);

//     console.log('✅ Static content seeded successfully');
//     process.exit(0);
//   } catch (err) {
//     console.error('❌ Seeding failed:', err);
//     process.exit(1);
//   }
// }




const mongoose = require('mongoose');
const StaticContent = require('../models/staticContent/staticContentModel'); // Update path if needed

const seedStaticContent = async () => {
  await mongoose.connect('mongodb+srv://mubin:mubin007@cluster0.rdqui97.mongodb.net/'); // Replace with your DB

  try {
    await StaticContent.deleteMany(); // Optional: Clear existing content

    await StaticContent.create([
      {
        type: 'About Us',
        content: `Shower Share is an innovative app designed to make sharing bathroom resources easier, more convenient, and sustainable. Whether you're a college student, a young professional, or anyone with limited access to private bathrooms, Shower Share is here to provide a seamless and respectful platform for sharing shower spaces.

Our mission is to create a community-driven platform that connects people in need of shower facilities with those who have them available, all while ensuring safety, privacy, and convenience.

Why Shower Share?
Sustainable Living: We aim to reduce water waste and promote eco-friendly practices by encouraging the efficient use of bathroom resources.
Convenience: Never struggle to find a shower when you need one again. With Shower Share, you can easily locate nearby available showers and book a time slot within seconds.
Community-Focused: Shower Share isn’t just an app; it's a community. We prioritize mutual respect, privacy, and trust among users.
Privacy & Safety: Our platform ensures that both users and hosts are verified and reviews are transparent to guarantee a safe and pleasant experience for everyone.

Whether you’re traveling, moving between homes, or just need a clean, private space to refresh, Shower Share is the answer.

Join the Shower Share community today, and let’s make everyday life a little bit easier and a lot more sustainable.`
      },
      {
        type: 'Terms & Condition',
        content: `Welcome to Shower Share!
These Terms and Conditions ("Terms") govern your use of the Shower Share mobile application ("App") and the services offered through it. By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.

1. Acceptance of Terms
By downloading, installing, or using the Shower Share App, you agree to these Terms, including any future modifications. We reserve the right to update or change these Terms at any time, and your continued use of the App after any changes will constitute your acceptance of the updated Terms.

2. Description of the App
Shower Share is a mobile application that allows users to [describe the main function of the app, e.g., "share shower spaces, book available showers, track shower time, etc."].
The app may also provide additional features and services, which may be subject to additional terms and conditions.

3. User Eligibility
To use the App, you must be at least [insert age requirement] years old or the legal age of majority in your jurisdiction. By using the App, you represent and warrant that you meet these requirements.

4. User Accounts
Account Creation: To access certain features, you may be required to create an account. When you create an account, you agree to provide accurate, current, and complete information and to update it as necessary.
Account Security: You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. Notify us immediately if you suspect any unauthorized use of your account.`
      },
      {
        type: 'Privacy Policy',
        content: `At Shower Share, we respect and protect your privacy. This Privacy Policy explains how we collect, use, store, and share information when you use our mobile application ("App") and related services ("Services"). By using the Shower Share App, you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the App.

We may collect the following types of information:
Personal Information: When you create an account, we may collect your name, email address, phone number, and other details.
Usage Data: Information on how you use the App, including IP address, device information, and usage patterns.
Location Data: If you enable location services, we may collect location data to help you find available showers near you.`
      }
    ]);

    console.log('✅ Static content seeded successfully');
  } catch (error) {
    console.error('❌ Failed to seed static content:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedStaticContent();
