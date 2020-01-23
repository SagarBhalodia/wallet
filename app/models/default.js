//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * user
 */
const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	frist_name: String,
	last_name: String,
	email: String,
	password: String,
	image: String,
	timestamp: Number,
	createAt: Date,
});


/**
 * wallet
 */
const walletSchema = new Schema({
	_id: Schema.Types.ObjectId,
    expenseTitle: String,
    expenseDescription: String,
	walletAmount: Number,
	expenseAmount: Number,
	totalAmount: Number,
	category: Boolean,
	categoryName: String,
	categoryDescription: String,
	categoryAmount: Number,
	expenseImage: String,
	timestamp: Number,
	createAt: Date,
});


/**
 * add wallet amount
 */
const addAmountSchema = new Schema({
	_id: Schema.Types.ObjectId,
	addAmount: Number,
	amountDescription: String,
	addAmountDate: Date,
});


mongoose.model('user', userSchema);
mongoose.model('wallet', walletSchema);
mongoose.model('addAmount', addAmountSchema);