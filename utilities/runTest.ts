import type { Test } from "../types/test";

export default function runTest(tests: Test[], callback: Function) {
	tests.forEach((test, index) => {
		const result = callback(test.case);

		if (result === test.answer) {
			console.log(`Test ${index + 1}: Pass`);
		} else {
			console.log(
				`Test ${
					index + 1
				}: Fail - Result was "${result}", the correct answer should be "${
					test.answer
				}"`
			);
		}
	});
}
