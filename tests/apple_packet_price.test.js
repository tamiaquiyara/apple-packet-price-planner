describe('The apple packet price planner app', function() {

	it ('should take in the cost price for a box', function() {

		const applePacketPr = ApplePacketPr();

		assert.equal(5, applePacketPr());

	});
});