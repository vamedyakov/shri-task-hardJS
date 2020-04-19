function allKeysAndSymbols(object) {
    const result = [];

    result.push(...Object.getOwnPropertyNames(object));
    let proto = object.__proto__;

    while (proto) {
        result.push(...Object.getOwnPropertyNames(proto));
        proto = proto.__proto__;
    }

    return result;
}

console.log(allKeysAndSymbols({})); // ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]