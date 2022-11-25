import server from "index";

describe("Server", function () {
  it("should tests that server is running current port", function () {
    expect(server.port).toBe(8080);
  });
});
