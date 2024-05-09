function parent() {
  let msg = "msg";

  function child() {
    let x = 10;
    console.log(x);
    console.log(msg);
  }
  child();
  //   console.log(x); : x portée lexical
}

parent();
