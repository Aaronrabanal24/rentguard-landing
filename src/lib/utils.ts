type ClassPrimitive = string | number | boolean | null | undefined;
type ClassDictionary = Record<string, ClassPrimitive>;
type ClassList = Array<ClassPrimitive | ClassDictionary>;
type ClassValue = ClassPrimitive | ClassDictionary | ClassList;

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];

  const append = (value: ClassValue) => {
    if (!value && value !== 0) return;

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }

    if (typeof value === "boolean") return;

    if (Array.isArray(value)) {
      (value as ClassValue[]).forEach(append);
      return;
    }

    Object.entries(value as ClassDictionary).forEach(([key, condition]) => {
      if (condition) classes.push(key);
    });
  };

  inputs.forEach(append);

  return classes.join(" ");
}

export function scrollToElement(id: string) {
  if (typeof window === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
