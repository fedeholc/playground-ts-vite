//! este ejercicio de promises lo continué en el playground-js-vite

document.querySelector("#app")!.innerHTML = `ver consola`;

console.log("Inicio promises ts");
let resultado: Promise<any> = fetch("https://southparkquotes.onrender.com/v1/quotes");
resultado.then((res: Response) => {
  res.json().then((data: any) => {
    console.log(`Quote: ${data[0].quote}`);
  });
});

console.log("2do fetch");

let resultado2: Promise<any> = fetch("https://southparkquotes.onrender.com/v1/quotes");

resultado2.then((res: Response) => {
  res.json().then((data: any) => {
    console.log(`Quote: ${data[0].quote}`);
  });
});
