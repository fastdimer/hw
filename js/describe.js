function describe(value){
    if (value === null) {
        return `null`;
    }

    if (Number.isNaN(value)) {
        return `NaN`;
    }

    if (Array.isArray(value)) {
        return `${value}, ${value.length}`;
    }
      let type = typeof value;

      if (type === 'string') {
          return `${type}, ${value}, ${value.length}`;
      }

      if (type === 'function') {
          return `${type}, ${value}, ${value.length}`;
      }

      if (type === 'object') {
          let keys = Object.keys(value);
          let result = `${type}`;
          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let val = value[key];
            let itemDescription = describe(val);
            //return `${type}, ${keys}`;
            result = result + ` ${itemDescription}`;
          }
          return result;
      }

      if (type === 'bigint') {
          return `${type}, ${value}n`;
      }

      if (type === 'symbol') {
            let descr = value.description || 'без опису';
          return `${type}, ${descr}`;
      }

    return `${type}, ${value}`;
}
