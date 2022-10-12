const productos=[
{nombre:"pan", precio:50 },
{nombre:"uvas", precio:100 },
{nombre:"gaseosa", precio:150 },
{nombre:"mandarina", precio:200 },
{nombre:"leche", precio:250 },
]

let carrito=[]

let seleccion= prompt("¿Hola, deseas realizar alguna compra? ¿si o no?")

while(seleccion !="si" && seleccion != "no"){
    alert("Por favor responda si o no")
    seleccion= prompt ("¿Hola, deseas realizar alguna compra? ¿si o no?")
}

if(seleccion=="si"){
    alert("A continuación se muestra nuestra lista de productos")
    let totalidadProductos = productos.map((producto)=> producto.nombre + " " +producto.precio +"$");
    alert(totalidadProductos.join(" - "))
}
else if (seleccion == "no"){
    alert("¡¡Gracias por su visita, hasta pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("Selecciona un producto para tu carrito")
    let precio = 0

    if(producto== "pan " || producto=="uvas" || producto=="gaseosa" ||
    producto=="mandarina" ||producto=="leche"){
        switch(producto){
            case "pan":
            precio=50
            break
            case "uvas":
            precio=100
            break
            case "gaseosa":
            precio=150
            break
            case "mandarina":
            precio=200
            break
            case "leche":
            precio=250
            break
            default:
                break
        }
    let unidades=parseInt(prompt("¿Cuántas unidades de productos desea comprar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else{
        alert("Este producto no esta disponible/stock insuficiente")
    }

    seleccion= prompt("¿Desea continuar comprando? Responda si o no")

    while(seleccion ==="no"){
        alert("¡Gracias por tu compra!")
        carrito.forEach((carritoFinal)=> {
            console.log(`${carritoFinal.producto}, unidades:${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades*carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc+ el.precio * el.unidades, 0)
console.log(`Total a cancelar por su compra es : ${total}`)