import request from 'supertest';
import app from './../index';
  

describe("Un test simple pour commencer ", () => {
    test("It should response the GET method", () => {
        return request(app)
          .get("/test")
          .then(response => {
            expect(response.statusCode).toBe(200);
          })
    })
})
  
  describe("Un test avec un argument ", () => {
    test("Doit renvoyer le code 200", () => {
      return request(app)
        .get("/test/hari")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toEqual("hello hari!");
        })
    })
  })

  describe("Un test sur la récupération des en bases", () => {
    test("Doit renvoyer le code 404", () => {
      return request(app)
      .get("/diagnostics/avc")
      .then(response => {
        expect(response.statusCode).toBe(404);
      })
    })
  })

  // POUR TESTER L'AJOUT D'UN UTILISATEUR
  // describe("Test d'enregistrement des données utilisateur ", () => {
  //   test("Doit renvoyer les données de l'utilisateur", () => {
  //     return request(app)
  //       .post("/user")
  //       .send({
  //           name: "hari",
  //           surname: "ray",
  //           age: 30,
  //       })
  //       .then(response => {
  //         expect(response.statusCode).toBe(200);
  //       })
  //   })
  // })



    // describe("Un simple test pour commencer", () => {
    //     test("doit retourner le message : test réussi !", async () => {
    //       const response = await request(app).post("/test").send({})
    //       expect(response.body).toBe("test réussi !")
    //     })
    // }) 