const Info = require('card-info');

const ASSETS_PATH = '/assets/';

class CardInfo extends Info {
	constructor(number) {
		super(number, {
			banksLogosPath: ASSETS_PATH,
			brandsLogosPath: ASSETS_PATH,
		});
	}
}

module.exports = CardInfo;
