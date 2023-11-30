export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		} else {
			this._name = name;
		}
		if (typeof length !== 'number') {
			throw new TypeError('Length must be a number');
		} else {
			this._length = length;
		}
		if (typeof students !== 'object') {
			throw new TypeError('Students must be an array');
		} else {
			this._students = students;
		}
	}

	get name() {
		return this._name;
	}
	set name(newName) {
		this._name = newName;
		}
	get length() {
		return this._length;
	}
	set length(newLength) {
		this._length = newLength;
		}
	get students() {
		return this._name;
	}
	set students(newStudents) {
		this._students = newStudents;
		}
}
