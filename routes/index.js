var express = require('express');
var router = express.Router();
var passport = require('passport');

const upload = require('../middleware/upload');
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to IDCL' });
});
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About IDCL' });
});
router.get('/herbal', function (req, res, next) {
  res.render('herbal', { title: 'Herbal Medicine' });
});
router.get('/foodProcessing', function (req, res, next) {
  res.render('foodProcessing', { title: 'Food Processing' });
});
router.get('/mineral', function (req, res, next) {
  res.render('mineral', { title: 'Mineral Based' });
});
router.get('/power', function (req, res, next) {
  res.render('power', { title: 'Power' });
});
router.get('/partners', function (req, res, next) {
  res.render('partners', { title: 'Our Partners' });
});
router.get('/leadership', function (req, res, next) {
  res.render('leadership', { title: 'Our Leadership' });
});
router.get('/career', function (req, res, next) {
  res.render('career', { title: 'Career' });
});
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.get('/instructionPage', function (req, res, next) {
  res.render('instructionPage', { title: 'Instructions Page' });
});


//==================
//====SIGNUP======
//=================
// process the signup form
// app.post('/signup', do all our passport stuff here);
// process the signup form
router.get('/registerForm', function (req, res, next) {
  res.render('registerForm', { title: 'New User Registration', message: req.flash('signupMessage') });
});

router.post('/registerForm', upload, passport.authenticate('local-signup', {
  successRedirect: '/users/success', // redirect to the secure profile section
  failureRedirect: '/registerForm', // redirect back to the signup page if there is an error
  failureFlash: true, // allow flash messages
}));

// =====================================
// LOGIN ===============================
// =====================================
// show the login form

router.get('/loginForm', function (req, res ){
  res.render('users/index', {
    message: req.flash('loginMessage'),
    title: 'Login Page'
  });
});

router.get('/loginForm/technical', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 For the post of Technical Officer (Pay Level-7).',
    postName: 'Technical Officer (Pay Level-7)',
    ageLimit: '30',
    UR: '55',
    OBC: '35',
    SC: '19',
    ST: '9',
    EWS: '12',
    Total: '130',
    Eligibility: 'Three Year Diploma in Mechanical, Electrical, Instrumentation, Civil, Electronics, Computer Science Engineering OR BE or B.Tech from a recognized University'
  });
});
router.get('/loginForm/assistant', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 For the post of Assistant (Pay Level-6).',
    postName: 'Assistant (Pay Level-6).',
    ageLimit: '30',
    UR: '160',
    OBC: '90',
    SC: '40',
    ST: '20',
    EWS: '30',
    Total: '340',
    Eligibility: 'Bachelor’s Degree from a recognised University or Institution in India'
  });
});
router.get('/loginForm/ARO', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 For the post of Assistant Review Officer (Pay Level-6).',
    postName: 'Assistant Review Officer (Pay Level-6)',
    ageLimit: '30',
    UR: '201',
    OBC: '111',
    SC: '55',
    ST: '25',
    EWS: '38',
    Total: '430',
    Eligibility: 'Bachelor’s Degree from a recognised University or Institution in India',
  });
});
router.get('/loginForm/ASO', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 For the post of Assistant Safety Officer (Pay Level-6)',
    postName: 'Assistant Safety Officer (Pay Level-6)',
    ageLimit: '30',
    UR: '90',
    OBC: '45',
    SC: '25',
    ST: '10',
    EWS: '15',
    Total: '185',
    Eligibility: 'Bachelor’s Degree from a recognised University or Institution in India'
  });
});
router.get('/loginForm/JuniorAssistant', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 for the post of  Junior Assistant Grade-I (Pay Level-4)',
    postName: 'Junior Assistant Grade-I (Pay Level-4)',
    ageLimit: '27',
    UR: '396',
    OBC: '204',
    SC: '120',
    ST: '48',
    EWS: '72',
    Total: '840',
    Eligibility: '12th Standard or equivalent examination from a recognized Board or University'
  });
});
router.get('/loginForm/ItAssistant', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 for the post of  IT Assistant (Pay Level-6)',
    postName: 'IT Assistant (Pay Level-6)',
    ageLimit: '30',
    UR: '24',
    OBC: '13',
    SC: '6',
    ST: '3',
    EWS: '4',
    Total: '50',
    Eligibility: 'Bachelor’s Degree with atleast one year PG Diploma/Degree in Computer Application or Information Technology or equivalent degree in relevant field. OR  Bachelor’s Degree in Computer Application or equivalent degree in relevant field.'
  });
});
router.get('/loginForm/AssistantManager', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 for the post of  Assistant Manager (Pay Level-7)',
    postName: 'Assistant Manager (Pay Level-7)',
    ageLimit: '30',
    UR: '18',
    OBC: '10',
    SC: '5',
    ST: '3',
    EWS: '4',
    Total: '40',
    Eligibility: 'Post Graduate Degree or Diploma (Full Time courses) in journalism or Mass communication or Public Relation or MBA with specialization in Marketing from a recognized university or Institute '
  });
});
router.get('/loginForm/hindiTranslator', function (req, res, next) {
  res.render('loginForm', {
    message: req.flash('loginMessage'),
    title: 'Login Page',
    advt: 'ADVT/No:- 11/2020 for the post of  Hindi Translator  (Pay Level-6) ',
    postName: 'Hindi Translator  (Pay Level-6)',
    ageLimit: '30',
    UR: '9',
    OBC: '5',
    SC: '3',
    ST: '1',
    EWS: '2',
    Total: '20',
    Eligibility: 'Masters degree from a recognized University in Hindi with English as a compulsory or elective subject or as the medium of examination at the degree level OR Recognized  Diploma  or  Certificate  course  in  translation  from  Hindi  to  English  and  vice  versa  or  two  years’ experience of translation work from Hindi to English and vice versa in Central or State Government office, including Government of India Undertaking.'
  });
});



router.post('/loginForm', passport.authenticate('local-signin', {
  successRedirect: '/users/profile',
  failureRedirect: '/loginForm',
  failureFlash: true
}));



module.exports = router;
