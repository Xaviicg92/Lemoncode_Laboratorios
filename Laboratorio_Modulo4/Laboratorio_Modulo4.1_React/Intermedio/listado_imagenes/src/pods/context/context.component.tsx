import React from "react";
import { PictureInfo } from "@/app-common/animal.vm";

const mockedKitties = [
  {
    id: 1,
    picUrl:
      "https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000",
    title: "Cat 1",
    selected: false,
  },
  {
    id: 2,
    picUrl:
      "https://static3.lasprovincias.es/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg",
    title: "Cat 2",
    selected: false,
  },
  {
    id: 3,
    picUrl:
      "https://images.ecestaticos.com/DiJ6Fx5gUleSR6P1IBGPELVncIQ=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4d0%2F68f%2Fb04%2F4d068fb04ec4ef3950da1cb9ed696747.jpg",
    title: "Cat 3",
    selected: false,
  },
  {
    id: 4,
    picUrl:
      "https://misanimales.com/wp-content/uploads/2021/04/gato-ciego-mira-camara-768x576.jpg",
    title: "Cat 4",
    selected: false,
  },
];

const mockedPuppies = [
  {
    id: 5,
    picUrl:
      "https://www.pupvine.com/wp-content/uploads/2021/08/Black-Belgian-Malinois.jpeg.webp",
    title: "Dog 1",
    selected: false,
  },
  {
    id: 6,
    picUrl: "https://random.dog/c61a3df2-abe3-4b0a-84ee-d036f8696814.jpg",
    title: "Dog 2",
    selected: false,
  },
  {
    id: 7,
    picUrl: "https://random.dog/b2fe2172-cf11-43f4-9c7f-29bd19601712.jpg",
    title: "Dog 3",
    selected: false,
  },
  {
    id: 8,
    picUrl: "https://random.dog/391a1745-b888-41d1-9dce-80c0a62e7e95.JPG",
    title: "Dog 4",
    selected: false,
  },
];

interface MyContext {
  kitties: PictureInfo[];
  setKitties: (value: PictureInfo[]) => void;
  puppies: PictureInfo[];
  setPuppies: (value: PictureInfo[]) => void;
  cart: PictureInfo[];
  setCart: (value: PictureInfo[]) => void;
  animals: PictureInfo[];
}

export const AnimalsContext = React.createContext<MyContext>({
  kitties: [],
  setKitties: () => {},
  puppies: [],
  setPuppies: () => {},
  cart: [],
  setCart: () => {},
  animals: [],
});

export const AnimalsContextProvider = (props) => {
  const [kitties, setKitties] = React.useState<PictureInfo[]>(mockedKitties);
  const [puppies, setPuppies] = React.useState<PictureInfo[]>(mockedPuppies);
  const [cart, setCart] = React.useState<PictureInfo[]>([]);
  const animals = [...kitties, ...puppies].flat();

  return (
    <AnimalsContext.Provider
      value={{
        kitties,
        setKitties,
        puppies,
        setPuppies,
        cart,
        setCart,
        animals,
      }}
    >
      {props.children}
    </AnimalsContext.Provider>
  );
};
