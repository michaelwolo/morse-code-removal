/**
 * @param {string} given - Original phrase (eg. '****_*_*-**_*-**_---___*--_---_*-*_*-**_-**')
 * @param {string} remove - Deletion phrase (eg. '****_*_*-**_*--*')
 */
export default function getTotalDeletionPaths(given, remove) {
	let variants = [{
		deletions: [],
		remaining: given,
		start: 0
	}];
	let results = [];

	remove.split('').forEach(function (char, i) {
		variants.filter(function (variant) {
			return variant.deletions.length === i;
		}).forEach(function (variant) {
			let indexes = getIndexes(variant.remaining, char).filter(function (index) {
				return index <= given.length - remove.length;
			}).forEach(function (index) {
				let deletion = variant.start + index;
				variants.push({
					// Use concat and slice to avoid mutations
					deletions: variant.deletions.concat(deletion),
					remaining: given.slice(deletion + 1),
					start: deletion + 1
				});
			});
		});
	});

	results = variants.filter(function (variant) {
		return variant.deletions.length === remove.length;
	}).map(function (variant) {
		return removeIndexes(given, variant.deletions);
	}).sort().filter(function(item, i, arr) {
		// Remove duplicate outcomes
		return !i || item !== arr[i-1];
	});

	return results.length;

	function getIndexes(string, char) {
		let indexes = [];
		// I feel the need, the need for speed
		// ie. For loop is faster than forEach
		for (var i = 0; i < string.length; i++) {
			if (string[i] === char) {
				indexes.push(i);
			}
		}
		return indexes;
	}

	function removeIndexes(string, indexes) {
		let result = '';
		// Another for loop
		for (var i = 0; i < string.length; i++) {
			if (i === indexes[0]) {
				result += 'X';
				indexes.splice(0, 1);
			} else {
				result += string[i];
			}
		}
		return result.replace(/X/g, '');
	}
}
