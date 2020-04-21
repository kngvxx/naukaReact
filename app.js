const header = <h1 className="title">Witaj na stronie!</h1>;

const classBig = "big, small";

const text = "aaaa";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac elit vitae justo varius interdum. Curabitur sit amet est mattis, rutrum erat a,consectetur turpis. Cras vestibulum vitae velit in imperdiet. Quisque pulvinar consequat leo, sit amet venenatis ex tincidunt a. Ut bibendum ugue at bibendum molestie. Curabitur ullamcorper euismod fermentum. Nam tellus elit, vulputate a commodo nec, ullamcorper vitae mauris. Quisque congue, tellus ac lobortis fringilla, orci orci tristique justo, in condimentum dui arcu ut neque. Nulla et felis arcu. Cras id blandit est. Sed eu cursus elit.";

const handleClick = () => alert("klik!");

const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      Pierwszy artykuł
    </h1>
    <p className={classBig}>{lorem}</p>
  </div>
);

const footer = (
  <footer>
    <p>{text}</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
