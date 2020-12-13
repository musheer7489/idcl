var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var razorpay = require('razorpay');
var nodemailer = require('nodemailer');

var paymentModel = require('../models/registrationModel');

// var transport = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   auth: {
//     user: 'musheer.fready@gmail.com',
//     pass: 'mus9319558818'
//   }
// })
// var mailOptions = {
//   from: 'musheer.fready@gmai.com',
//   to: 'musheer7489@gmail.com',
//   subject: 'Application Succesfully Submitted',
//   text: 'Your Application for the post is succefully submitted'
// }

// transport.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.warn(error);
//   }
//   else {
//     console.warn("email has been sent suucesfully", info.response)
//   }
// })

var instance = new razorpay({
  key_id: 'rzp_test_ODjxbpVFuELe1g',
  key_secret: '8nbS1oqCKwhUUuxwGGTOTAWb'
});



var UR = {
  amount: 23000,
  currency: 'INR',
  receipt: '746389Fr5',
  payment_capture: true,
  notes: "something"
}
var SC = {
  amount: 14000,
  currency: 'INR',
  receipt: '746389Fr5',
  payment_capture: true,
  notes: "something"
}

var order_id, payment_id;

router.use(bodyparser.json());

router.get('/payments/UR', isLoggedIn, (req, res) => {

  instance.orders.create(UR).then((response) => {
    console.log("**********Order Created***********");
    console.log(response);
    console.log("**********Order Created***********");
    order_id = response.id;

  }).catch((error) => {
    console.log(error);
  })
  // instance.payments.capture(order_id, amount).then((response) => {
  //     console.log(response);
  // }).catch((error) => {
  //   console.log(error);
  // });
  res.render(
    'users/payments',
    { order_id: order_id, category: req.user.category, disability: req.user.disability, gender: req.user.gender }
  );

});
router.get('/payments/SC', isLoggedIn, (req, res) => {

  instance.orders.create(SC).then((response) => {
    console.log("**********Order Created***********");
    console.log(response);
    console.log("**********Order Created***********");
    order_id = response.id;

  }).catch((error) => {
    console.log(error);
  })
  // instance.payments.capture(order_id, amount).then((response) => {
  //     console.log(response);
  // }).catch((error) => {
  //   console.log(error);
  // });
  res.render(
    'users/payments',
    { order_id: order_id, category: req.user.category, disability: req.user.disability, gender: req.user.gender }
  );

});

router.post('/payments/pay', isLoggedIn, (req, res) => {
  payment_id = req.body;
  console.log("**********Payment authorized***********");
  console.log(payment_id);
  console.log("**********Payment authorized***********");
  instance.payments.fetch(payment_id.razorpay_payment_id).then((response) => {
    console.log("**********Payment instance***********");
    console.log(response);
    console.log("**********Payment instance***********");
    instance.payments.capture(payment_id.razorpay_payment_id, response.amount).then((response) => {

      paymentModel.findByIdAndUpdate(req.user._id, response, function (err, done) {
        if (err) {
          res.redirect('back');
          console.log('Databse error');
        }
        else {
          console.log(done);
          console.log('Successfull Add payment details');
        }
      })
      res.redirect('../profile');

    }).catch((error) => {
      console.log(error);
      res.redirect('./');
    });


  }).catch((error) => {
    console.log(error);
    res.redirect('./');
  });

})


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users/index', { title: 'Redirect to login', message: req.flash('loginMessage') }
  );
});
router.get('/success', function (req, res, next) {
  res.render('users/success', {
    title: 'Redirect to login',
    RegistrationNo: req.user.RegistrationNo,
    email: req.user.email,
    category: req.user.category,
    disability: req.user.disability,
    gender: req.user.gender

  }
  );
});


// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/profile', isLoggedIn, function (req, res) {
  res.render('users/profile', {
    post: req.user.post,
    RegistrationNo: req.user.RegistrationNo,
    name: req.user.name,
    email: req.user.email,
    mobilenumber: req.user.mobilenumber,
    aadhar: req.user.aadhar,
    fathername: req.user.fathername,
    mothername: req.user.mothername,
    gender: req.user.gender,
    maritalstatus: req.user.maritalstatus,
    category: req.user.category,
    dob: req.user.dob,
    identitymark: req.user.identitymark,
    mothertongue: req.user.mothertongue,
    jkDomicile: req.user.jkDomicile,
    disability: req.user.disability,
    exserviceman: req.user.exserviceman,
    ews: req.user.ews,
    religion: req.user.religion,
    address: req.user.address,
    district: req.user.district,
    state: req.user.state,
    pincode: req.user.pincode,
    hboardname: req.user.hboardname,
    hyear: req.user.hyear,
    hpercentage: req.user.hpercentage,
    iboardname: req.user.iboardname,
    iyear: req.user.iyear,
    ipercentage: req.user.ipercentage,
    gboardname: req.user.gboardname,
    gyear: req.user.gyear,
    gpercentage: req.user.gpercentage,
    pboardname: req.user.pboardname,
    pyear: req.user.pyear,
    ppercentage: req.user.ppercentage,
    photo: req.user.photo,
    signature: req.user.signature,
    id: req.user.id,
    amount: req.user.amount,
    method: req.user.method,
    status: req.user.status,
    title: 'Profile' // get the user out of session and pass to template
  });
});
router.get('/viewForm', isLoggedIn, function (req, res) {
  res.render('users/viewForm', {
    post: req.user.post,
    RegistrationNo: req.user.RegistrationNo,
    name: req.user.name,
    email: req.user.email,
    mobilenumber: req.user.mobilenumber,
    aadhar: req.user.aadhar,
    fathername: req.user.fathername,
    mothername: req.user.mothername,
    gender: req.user.gender,
    maritalstatus: req.user.maritalstatus,
    category: req.user.category,
    dob: req.user.dob,
    identitymark: req.user.identitymark,
    mothertongue: req.user.mothertongue,
    jkDomicile: req.user.jkDomicile,
    disability: req.user.disability,
    exserviceman: req.user.exserviceman,
    ews: req.user.ews,
    religion: req.user.religion,
    address: req.user.address,
    district: req.user.district,
    state: req.user.state,
    pincode: req.user.pincode,
    hboardname: req.user.hboardname,
    hyear: req.user.hyear,
    hpercentage: req.user.hpercentage,
    iboardname: req.user.iboardname,
    iyear: req.user.iyear,
    ipercentage: req.user.ipercentage,
    gboardname: req.user.gboardname,
    gyear: req.user.gyear,
    gpercentage: req.user.gpercentage,
    pboardname: req.user.pboardname,
    pyear: req.user.pyear,
    ppercentage: req.user.ppercentage,
    photo: req.user.photo,
    signature: req.user.signature,
    examcenter: req.user.examcenter,
    id: req.user.id,
    amount: req.user.amount,
    method: req.user.method,
    status: req.user.status,
    title: 'View Form Print' // get the user out of session and pass to template
  });
});


// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/users');
});


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated()) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
    return next();
  }
  req.flash("loginMessage", "You Need to Logged In")

  // if they aren't redirect them to the home page
  res.redirect('/loginForm');
}
module.exports = router;
