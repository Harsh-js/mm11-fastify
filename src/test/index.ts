import axios from 'axios';

const expressEndpoint = 'http://127.0.0.1:8080/fixtures/banner';
const fastifyEndpoint = 'http://127.0.0.1:3000/v2/fixture/banner';
const count = 10000; // Number of API calls to make

const results = {
	express: {
		responseSizes: [],
		executionTimes: [],
	},
	fastify: {
		responseSizes: [],
		executionTimes: [],
	},
};

async function testEndpoint(endpoint: string) {
	try {
		const startTime = new Date();
		const response = await axios.get(endpoint);
		const endTime = new Date();
		const executionTime = endTime.getTime() - startTime.getTime();

		const responseSize = JSON.stringify(response.data).length;

		return { responseSize, executionTime };
	} catch (error) {
		console.error('Error:', error);
		return null;
	}
}

async function runTests() {
	for (let i = 0; i < count; i++) {
		const promises = [testEndpoint(expressEndpoint), testEndpoint(fastifyEndpoint)];
		const [expressResult, fastifyResult] = await Promise.all(promises);

		if (expressResult) {
			results.express.responseSizes.push(expressResult.responseSize);
			results.express.executionTimes.push(expressResult.executionTime);
		}

		if (fastifyResult) {
			results.fastify.responseSizes.push(fastifyResult.responseSize);
			results.fastify.executionTimes.push(fastifyResult.executionTime);
		}
	}

	console.log('Results:', results);

	// Perform comparison between the two endpoints
	const avgResponseSizeExpress = calculateAverage(results.express.responseSizes);
	const avgResponseSizeFastify = calculateAverage(results.fastify.responseSizes);
	const avgExecutionTimeExpress = calculateAverage(results.express.executionTimes);
	const avgExecutionTimeFastify = calculateAverage(results.fastify.executionTimes);

	console.log('Comparison:');
	console.log('Express Average Response Size:', avgResponseSizeExpress);
	console.log('Fastify Average Response Size:', avgResponseSizeFastify);
	console.log('Express Average Execution Time:', avgExecutionTimeExpress);
	console.log('Fastify Average Execution Time:', avgExecutionTimeFastify);
	console.log(
		'Endpoint with better average Response Size:',
		avgResponseSizeExpress < avgResponseSizeFastify ? 'Express' : 'Fastify'
	);
	console.log(
		'Endpoint with better average Execution Time:',
		avgExecutionTimeExpress < avgExecutionTimeFastify ? 'Express' : 'Fastify'
	);
}

function calculateAverage(values: number[]) {
	const sum = values.reduce((acc, value) => acc + value, 0);
	return sum / values.length;
}

runTests();
