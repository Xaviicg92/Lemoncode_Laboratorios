/**
 * AUTHOR : JAVIER CAMBÓN GANDARIAS
 */

// Modificar funcion throw, hacer mas breve, retorna un solo bool


class SlothMachine {
    coin: number;

     constructor(){
        this.coin = 0;
     }
     play = (): string => {
        this.coin++;
        const bool_result = this.throw();

        for (const bool of bool_result){
            if (bool === true){

            }else {
                return ("Good luck next time!!")
            }
        }
        let coin = this.coin;
        this.coin = 0;
        return (`Congratulations you won:  ${coin}  coins`)
     }

     throw = (): boolean[] => {
        let array_bool = [];
        for (let i = 0; i < 3; i++){
            array_bool.push(Math.random() < 0.5)
        }
        return array_bool;
    }
  }

  const machine1 = new SlothMachine();
  console.log(machine1.play()); 
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())
  console.log(machine1.play())

  