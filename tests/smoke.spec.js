const { morseTranslator } = require("../app")

// describe("Some group of tests", () => {
//   it("Does something", () => {
//     expect(app.something).toBeDefined()
//   })
// })

describe.skip("a functioning morse code translator", () => {
  it("translates 'KYLE ROCKS' from morse code to english", () => {
    const morseCode = "-.- -.-- .-.. .   .-. --- -.-. -.- ..."
    expect(morseTranslator(morseCode)).toBe("KYLE ROCKS")
  })
  it("translates 'WHAT?' from morse code to english", () => {
    const morseCode = ".-- .... .- - ..--.."
    expect(morseTranslator(morseCode)).toBe("WHAT?")
  })
  it("translates 'SOS' from morse code to english", () => {
    const morseCode = "... --- ..."    
    expect(morseTranslator(morseCode)).toBe("SOS")
  })
})

test("translating letters", () => {
  expect(morseTranslator(".")).toBe("E")
})
test("translating letters", () => {
  expect(morseTranslator(".-.")).toBe("R")
})
test("translating letters with spaces", () => {
  expect(morseTranslator(". .-.")).toBe("E R")
})