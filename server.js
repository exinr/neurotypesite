const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/purpose', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/howwork', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/test', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/16types', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/bookkeeper', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/contemplative', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/technician', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/humancalculator', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/levelheaded', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/understanding', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/quickwitted', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/analyst', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/clearsighted', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/externalist', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/overseer', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/fascinator', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/pureinstinct', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/sensate', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/aesthetician', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/16types/newtype', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);
