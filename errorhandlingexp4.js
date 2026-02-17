async function f() {
    let response = await fetch('http://no-such-url');
}
f().catch(alert);