import _ from 'lodash';

const db = {

	save (obj) {
		if (obj !== undefined) {
			this.storageReferrence.push(obj);
		}
		localStorage.setItem(this.dataBaseName, JSON.stringify(this.storageReferrence));
		this._getStorage();
		return this;
	},

	find (query) {
		if (query === 'all') {
			return this.storageReferrence;
		}

		return this.storageReferrence.filter(function filterQuery (item) {
			if (_.isEqual(item, query)) {
				return item;
			} 
		});
	},

	delete (query) {
		if (query === 'all') {
			var data = JSON.stringify(this.storageReferrence);
			this.storageReferrence = [];
			localStorage.setItem(this.dataBaseName, data);
		}

		this.storageReferrence = this.storageReferrence.filter(function  filterDeleteQuery (todo) {
			if (!_.isEqual(todo, query)) {
				return todo;
			}
		});

		this.save();
		return this;
	},


	_getStorage () {
		this.storageReferrence = JSON.parse(localStorage.getItem(this.dataBaseName));
		return this;
	},

	connect(database) {
		this.dataBaseName = this.dataBaseName || database;
		this._getStorage();
		if (!this.storageReferrence) {
			localStorage.setItem(this.dataBaseName, '[]');
		}

		return this;
	}

}

export default db;


