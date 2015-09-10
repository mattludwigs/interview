import _ from 'lodash';

const db = {

	save (obj) {
		if (obj !== undefined) {
			this.storageReferrence.push(obj);
		}
		localStorage.setItem(this.dataBaseName, JSON.stringify(this.storageReferrence));
		this.getStorage();
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

	clearStorage () {
		var data = JSON.stringify(this.storageReferrence);
		this.storageReferrence = [];
		localStorage.setItem(this.dataBaseName, data);
		return this;
	},

	delete (query) {
		if (query === 'all') {
			this.clearStorage();
		}

		this.storageReferrence = this.storageReferrence.filter(function  filterDeleteQuery (item) {
			if (!_.isEqual(item, query)) {
				return item;
			}
		});

		this.save();
		return this;
	},

	getStorage () {
		this.storageReferrence = JSON.parse(localStorage.getItem(this.dataBaseName));
		return this;
	},

	connect(database) {
		this.dataBaseName = this.dataBaseName || database;
		this.getStorage();
		if (!this.storageReferrence) {
			localStorage.setItem(this.dataBaseName, '[]');
		}

		return this;
	}

}

export default db;
