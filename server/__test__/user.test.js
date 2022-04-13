const request = require("supertest");
import app from "./../index";

describe("POST /test", () => {

/*     describe("Un simple test pour commencer", () => {
      test("doit retourner que le status code est de 200", async () => {
        const response = await request(app).post("/test").send({})
        expect(response.statusCode).toBe(200)
      })
    }) */
  
    test("It should response the GET method", () => {
        return request(app)
          .get("/test")
          .then(response => {
            expect(response.statusCode).toBe(200);
          })
    })

/*     describe("Un simple test pour commencer", () => {
        test("doit retourner le message : test réussi !", async () => {
          const response = await request(app).post("/test").send({})
          expect(response.body).toBe("test réussi !")
        })
    }) */
})