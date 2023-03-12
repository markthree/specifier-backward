export function transform(code: string) {
  return code.replace(
    /(?<=((require|import)\(|(from|import)\s+)["'])node:/g,
    "",
  );
}
