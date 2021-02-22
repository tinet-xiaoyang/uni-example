'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('unicloud-test')
	const res = await collection.limit(10).get()
	console.log('本地运行')
	return res
};
