export function trimObjectStrings(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => trimObjectStrings(item));
  }

  const newObj: { [key: string]: any } = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'string') {
        newObj[key] = value.trim();
      } else if (typeof value === 'object') {
        newObj[key] = trimObjectStrings(value);
      } else {
        newObj[key] = value;
      }
    }
  }
  return newObj;
}
