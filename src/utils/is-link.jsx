
const IsLink = (string) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z0-9\\-]+\\.)+[a-z]{2,})|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IPv4
        '\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)' + // IPv6
        '(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+?&=]*)*$', 'i'); // port and path
    return !!pattern.test(string);
}

export default IsLink;