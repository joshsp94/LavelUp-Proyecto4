const VisualizsrPokemon=document.querySelector('.Contenedor');

document.addEventListener('DOMContentLoaded', () => {
        
    for(i=0;i<6;i++){
        const numero =getRandom(1, 151)//Llamado a la funcion asignandole el rango de los pokemon a listar
        fetchData(numero, i)//Llamado a la funcion y se envia por parametro el numero random
    }
    
    
})

function getRandom(min, max){//Funcion que genera un numero al azar    
    return Math.floor(Math.random() * (max - min))+min;
}

const fetchData=async (id, i) => {//Funcion que maneja la api 
    try {
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)//con ${id} seleccionamos el numero pokemon para extraer la informacinon
        const data = await res.json()
        const pokemon={
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            ataque1: data.moves[0].move.name,
            ataque2: data.moves[1].move.name,
            ataque3: data.moves[2].move.name,
            ataque4: data.moves[3].move.name,
            ataque5: data.moves[4].move.name,
        }

        pintar(pokemon, i)//Llamado del metodo para mostrar los pokemon
    } catch (error) {
        console.log(error)
    }
}

const pintar=(pokemon, i)=>{
    if(i==0){
        console.log(pokemon)
        const flex=document.querySelector('.flex')
        const template=document.querySelector('#template-Pok').content
        const clone =template.cloneNode(true)
        const fragment=document.createDocumentFragment()

        clone.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone.querySelector('.Atack1').textContent = pokemon.ataque1
        clone.querySelector('.Atack2').textContent = pokemon.ataque2
        clone.querySelector('.Atack3').textContent = pokemon.ataque3
        clone.querySelector('.Atack4').textContent = pokemon.ataque4
        clone.querySelector('.Atack5').textContent = pokemon.ataque5 
    
        fragment.appendChild(clone)
        flex.appendChild(fragment)
    }else if(i==1){
        console.log(pokemon)
        const flex2=document.querySelector('.flex')
        const template2=document.querySelector('#template-Pok').content
        const clone2 =template2.cloneNode(true)
        const fragment2=document.createDocumentFragment()

        clone2.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone2.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone2.querySelector('.Atack1').textContent = pokemon.ataque1
        clone2.querySelector('.Atack2').textContent = pokemon.ataque2
        clone2.querySelector('.Atack3').textContent = pokemon.ataque3
        clone2.querySelector('.Atack4').textContent = pokemon.ataque4
        clone2.querySelector('.Atack5').textContent = pokemon.ataque5 
        
        fragment2.appendChild(clone2)
        flex2.appendChild(fragment2)
    }else if(i==2){
        console.log(pokemon)
        const flex3=document.querySelector('.flex')
        const template3=document.querySelector('#template-Pok').content
        const clone3 =template3.cloneNode(true)
        const fragment3=document.createDocumentFragment()

        clone3.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone3.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone3.querySelector('.Atack1').textContent = pokemon.ataque1
        clone3.querySelector('.Atack2').textContent = pokemon.ataque2
        clone3.querySelector('.Atack3').textContent = pokemon.ataque3
        clone3.querySelector('.Atack4').textContent = pokemon.ataque4
        clone3.querySelector('.Atack5').textContent = pokemon.ataque5 
        
        fragment3.appendChild(clone3)
        flex3.appendChild(fragment3)
    }else if(i==3){
        console.log(pokemon)
        const flex4=document.querySelector('.flex2')
        const template4=document.querySelector('#template-Pok').content
        const clone4 =template4.cloneNode(true)
        const fragment4=document.createDocumentFragment()

        clone4.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone4.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone4.querySelector('.Atack1').textContent = pokemon.ataque1
        clone4.querySelector('.Atack2').textContent = pokemon.ataque2
        clone4.querySelector('.Atack3').textContent = pokemon.ataque3
        clone4.querySelector('.Atack4').textContent = pokemon.ataque4
        clone4.querySelector('.Atack5').textContent = pokemon.ataque5 
        
        fragment4.appendChild(clone4)
        flex4.appendChild(fragment4)
    }else if(i==4){
        console.log(pokemon)
        const flex5=document.querySelector('.flex2')
        const template5=document.querySelector('#template-Pok').content
        const clone5 =template5.cloneNode(true)
        const fragment5=document.createDocumentFragment()

        clone5.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone5.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone5.querySelector('.Atack1').textContent = pokemon.ataque1
        clone5.querySelector('.Atack2').textContent = pokemon.ataque2
        clone5.querySelector('.Atack3').textContent = pokemon.ataque3
        clone5.querySelector('.Atack4').textContent = pokemon.ataque4
        clone5.querySelector('.Atack5').textContent = pokemon.ataque5 
        
        fragment5.appendChild(clone5)
        flex5.appendChild(fragment5)
    }else if(i==5){
        console.log(pokemon)
        const flex6=document.querySelector('.flex2')
        const template6=document.querySelector('#template-Pok').content
        const clone6 =template6.cloneNode(true)
        const fragment6=document.createDocumentFragment()

        clone6.querySelector('.Pok1').setAttribute('src', pokemon.img)
        clone6.querySelector('.Nombre').innerHTML=`${pokemon.nombre}`
        clone6.querySelector('.Atack1').textContent = pokemon.ataque1
        clone6.querySelector('.Atack2').textContent = pokemon.ataque2
        clone6.querySelector('.Atack3').textContent = pokemon.ataque3
        clone6.querySelector('.Atack4').textContent = pokemon.ataque4
        clone6.querySelector('.Atack5').textContent = pokemon.ataque5 
        
        fragment6.appendChild(clone6)
        flex6.appendChild(fragment6)
    }        
}