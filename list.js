const l = [];

function isPrime(num) {
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

function canBeDividedBy(num, divisor) {
	return num % divisor === 0;
}

for (let i = 0; i < 101; i++) {
	if (isPrime(i)) continue;

	if (canBeDividedBy(i, 3) && canBeDividedBy(i, 5)) {
		l.push("FooBar");
	} else if (canBeDividedBy(i, 3)) {
		l.push("Foo");
	} else if (canBeDividedBy(i, 5)) {
		l.push("Bar");
	} else {
		l.push(i);
	}
}

l.reverse();

console.log(l.join(" "));
