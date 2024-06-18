import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// in case there is no mongoose cache, set it to an empty object
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatavase = async () => {
	if (cached.conn) return cached.conn;

	if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');


  // we either connect to an existing cached connection or we make a new cached connection
	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URI, {
			dbName: 'evently',
			bufferCommands: false,
		});

	cached.conn = await cached.promise;

	return cached.conn;
};
