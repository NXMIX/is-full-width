import isWide from "../src";

describe("main", () => {
  it("main", () => {
    expect(isWide("ɑ".codePointAt(0)!)).toBeTruthy();
    expect(isWide("⅕".codePointAt(0)!)).toBeFalsy();
    expect(isWide("⅛".codePointAt(0)!)).toBeTruthy();
    expect(isWide("⏳".codePointAt(0)!)).toBeTruthy();
    expect(isWide("①".codePointAt(0)!)).toBeTruthy();
    expect(isWide("✩".codePointAt(0)!)).toBeFalsy();
    expect(isWide("✽".codePointAt(0)!)).toBeTruthy();
    expect(isWide("｡".codePointAt(0)!)).toBeFalsy();
    expect(isWide("🀄".codePointAt(0)!)).toBeTruthy();
    expect(isWide(983040)).toBeTruthy();
    expect(isWide(1048574)).toBeFalsy();

    expect(isWide("あ".codePointAt(0)!)).toBeTruthy();
    expect(isWide("谢".codePointAt(0)!)).toBeTruthy();
    expect(isWide("고".codePointAt(0)!)).toBeTruthy();
    expect(isWide(NaN)).toBeFalsy();
    expect(isWide("a".codePointAt(0)!)).toBeFalsy();
    expect(isWide("0x1f251".codePointAt(0)!)).toBeFalsy();
    expect(isWide("ñ".codePointAt(0)!)).toBeFalsy();
    expect(isWide("🤪".codePointAt(0)!)).toBeTruthy();
  });
});
