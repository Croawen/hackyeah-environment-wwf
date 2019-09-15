// nestedGetterByDot({a:{b:{c: 5}}}, "a.b.c")  = 5
export const nestedGetterByDot = (obj, path) =>
  path.split('.').reduce((p, c) => {
    try {
      return p[c]
    } catch {
      return undefined
    }
  }, obj)
