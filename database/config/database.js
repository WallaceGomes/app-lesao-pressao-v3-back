module.exports = {
	dialect: 'postgres',
	host: 'ec2-34-231-56-78.compute-1.amazonaws.com',
	database: 'd8enhua65pciln',
	username: 'irgcharozkxakg',
	password: 'd635dd1943afbb1cc46088a2222ae5a5f47f2edaa2eb79963f4bff438e58d70b',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
	define: {
		timestamps: true,
		underscored: true,
	},
};

// Test database

// host: 'ec2-34-231-56-78.compute-1.amazonaws.com',
// 	database: 'd8enhua65pciln',
// 	username: 'irgcharozkxakg',
// 	password: 'd635dd1943afbb1cc46088a2222ae5a5f47f2edaa2eb79963f4bff438e58d70b',
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
