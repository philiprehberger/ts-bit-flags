export interface FlagSet<F extends Record<string, number>> {
  has(flags: number, flag: keyof F): boolean;
  set(flags: number, ...flagNames: (keyof F)[]): number;
  unset(flags: number, ...flagNames: (keyof F)[]): number;
  toggle(flags: number, flag: keyof F): number;
  toArray(flags: number): (keyof F)[];
  fromArray(flagNames: (keyof F)[]): number;
  readonly all: number;
  readonly none: number;
}

export function defineFlags<F extends Record<string, number>>(definition: F): FlagSet<F> {
  const allValue = Object.values(definition).reduce((acc, v) => acc | v, 0);

  return {
    has(flags: number, flag: keyof F): boolean {
      return (flags & definition[flag]) === definition[flag];
    },
    set(flags: number, ...flagNames: (keyof F)[]): number {
      let result = flags;
      for (const name of flagNames) result |= definition[name];
      return result;
    },
    unset(flags: number, ...flagNames: (keyof F)[]): number {
      let result = flags;
      for (const name of flagNames) result &= ~definition[name];
      return result;
    },
    toggle(flags: number, flag: keyof F): number {
      return flags ^ definition[flag];
    },
    toArray(flags: number): (keyof F)[] {
      return (Object.keys(definition) as (keyof F)[]).filter(
        (key) => (flags & definition[key]) === definition[key]
      );
    },
    fromArray(flagNames: (keyof F)[]): number {
      return flagNames.reduce((acc, name) => acc | definition[name], 0);
    },
    get all() { return allValue; },
    get none() { return 0; },
  };
}
