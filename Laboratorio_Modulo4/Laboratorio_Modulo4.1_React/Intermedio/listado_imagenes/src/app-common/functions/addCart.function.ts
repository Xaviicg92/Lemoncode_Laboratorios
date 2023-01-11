import { PictureInfo } from "../animal.vm";

const handleCheck = (animals:PictureInfo[] ,id: number, setAnimals) => {
    const newAnimals = animals.map((animal) => {
      if (animal.id === id) {
        return { ...animal, selected: !animal.selected };
      }
      return animal;
    });
    const animalsToString = `${animals}`
    const capitalizedAnimals = animalsToString.toUpperCase() + animalsToString.substring(1)
    setAnimals(newAnimals);

    return newAnimals;
  };

  export const addToCart = (animals:PictureInfo[], id: number, setAnimals:(value:PictureInfo[])=>void, cart:PictureInfo[], setCart:(value:PictureInfo[])=>void) => {
    const animalsCart = handleCheck(animals,id,setAnimals).filter(
      (animal) => animal.selected === true
    );
    const combinedCart = [...cart, ...animalsCart];
    const animalsCartFilter = combinedCart.filter(
      (animal, index, self) =>
        index === self.findIndex((t) => t.id === animal.id)
    );
        const carToString = `${cart}`
    if (cart.some((item) => item.id === id)) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(animalsCartFilter);
    }
  };