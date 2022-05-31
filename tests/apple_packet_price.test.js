describe('The apple packet price planner app', function() {

	it ('should take in the cost price for a box of apples', function() {

		const applePacketPr = ApplePacketPr();

		assert.equal(10, applePacketPr(5));

	});

	it ('should take in the number of apples in a box', function() {

		const applePacketPr = ApplePacketPr();

		assert.equal(5, applePacketPr(5));

	});

	it ('should take in the profit in percentage', function() {

		const applePacketPr = ApplePacketPr();

		assert.equal(5, applePacketPr(5));

	});

	it ('should take in the size of the packet', function() {

		const applePacketPr = ApplePacketPr();

		assert.equal(5, applePacketPr(5));

	});
});