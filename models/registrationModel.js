const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var autoIncreament = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://idcl:m13081994@cluster0.t24sn.mongodb.net/idcldb?retryWrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
autoIncreament.initialize(connection);


//define mongoose schema
var registration = new Schema({
  appmode: { type: String },
  post: { type: String },
  name: { type: String },
  fathername: { type: String },
  mothername: { type: String },
  gender: { type: String },
  maritalstatus: { type: String },
  spousename: { type: String },
  nationality: { type: String },
  mothertongue: { type: String },
  identitymark: { type: String },
  category: { type: String },
  disability: { type: String },
  typesofdisability: { type: String },
  otherdisability: { type: String },
  jkDomicile: { type: String },
  exserviceman: String,
  ews: String,
  religion: String,
  mobilenumber: Number,
  aadhar: Number,
  email: String,
  password: String,
  dob: String,
  address: String,
  district: String,
  state: String,
  pincode: Number,
  highschool: String,
  hboardname: String,
  hyear: Number,
  hpercentage: Number,
  intermediate: String,
  iboardname: String,
  iyear: Number,
  ipercentage: Number,
  graduation: String,
  gboardname: String,
  gyear: Number,
  gpercentage: Number,
  postgraduation: String,
  pboardname: String,
  pyear: Number,
  ppercentage: Number,
  examcenter: String,
  photo: String,
  signature: String,
  id: {
    type: String
  },
  entity: {
    type: String
  },
  amount: {
    type: Number
  },
  currency: {
    type: String
  },
  status: {
    type: String
  },
  order_id: {
    type: String
  },
  invoice_id: {
    type: String
  },
  international: {
    type: Boolean
  },
  method: {
    type: String
  },
  amount_refunded: {
    type: Number
  },
  refund_status: {
    type: String
  },
  captured: {
    type: Boolean
  },
  description: {
    type: String
  },
  card_id: {
    type: String
  },
  card: {
    id: {
      type: String
    },
    entity: {
      type: String
    },
    name: {
      type: String
    },
    last4: {
      type: Date
    },
    network: {
      type: String
    },
    type: {
      type: String
    },
    issuer: {
      type: String
    },
    international: {
      type: Boolean
    },
    emi: {
      type: Boolean
    },
    sub_type: {
      type: String
    }
  },
  bank: {
    type: String
  },
  wallet: {
    type: String
  },
  vpa: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  notes: {
    type: Array
  },
  fee: {
    type: Number
  },
  tax: {
    type: Number
  },
  error_code: {
    type: String
  },
  error_description: {
    type: String
  },
  error_source: {
    type: String
  },
  error_step: {
    type: String
  },
  error_reason: {
    type: String
  },
  acquirer_data: {
    auth_code: {
      type: String
    }
  },
  created_at: {
    type: Number
  }

});

//Auto Increament
registration.plugin(autoIncreament.plugin, {
  model: 'Students',
  field: 'RegistrationNo',
  startAt: 10200100,
  incrementBy: 3
});

// generating a hash
registration.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
registration.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var Students = mongoose.model('Students', registration);


module.exports = Students;
