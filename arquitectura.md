# ARQUITECTURA DE SOFTWARE 
# PORQUE LA ARQUITECTURA DE SOFTWARE 

Cuando se habla de arquitectura se debe pensar inmediatamente en atributos de calidad, como escalabilidad, 

La arquiectura es una area en la que se decide el como se va diseñar un sistema en su  mas alto nivel. 

---
# THE CLEAN ARCHITECTURE
Es una patron de arquitectura de software que se puede usar en cualquier proyecto y en cualquier parte de ese proyecto. 
Dividir en capas con funciones que realizan funcionalidades muy espesificias.

Existen varias the clean architectures 
- Onion
- Hexagonal


# CAPA DE ENTIDADES || Entities: 
Aqui va estar toda la lógica de negocios, no se toca, un producto, un carrito de compras, un estudiante, un examen estos son la razón de ser del negocio  


# CAPA DE CASOS DE USOS || Uses Cases:
Basicamente es lo que se puede aplicar a las entidades, o más es lo que estas entidades puede hacer como tal. Basicamente es que ¿Que acciones pueden hacer las entidades? En este capa entonces se va a encontrar todo aquello que modifica a las entidades.


# CAPA DE MIDDLEWARES O CONTROLADORES O ADAPTADOR || Controllers, Gateways, Presenters

Su tarea principal es COMUNICAR, comunicar front con back, comunicar servicios, etc...
Esta en todos lados, por ejemplo REST es un adaptador, por ejemplo adapta las peticiones y respuestas que viajan de front a back. 

Son las que dan esa escalabilidad de la aplicación. Es una lógica intermedia que coje lo que viene de afuera y lo adapta a una estructura interior. 

# DEPENCY RULE || REGLA DE DEPENDENCIA
- El dominio debe ser independiente
> De esto depende todo, la aplicación depende del dominio. 
- La capa de application puede depender del dominio.
>
- Las capas externas pueden depender de cualquier cosa.
>

## Ventajas
- Dominio separado
- Casos de uso independientes
- Servicios externos intercambiables 

## Desventajas
- Lleva tiempo
- Overly Verbosa (Demasiado detallado)
- Onboarding más dificil
- Incremeneta el tamaño del código 

## Cómo adaptar el código a tus necesidades.

Extrae el dominio: Esa regla no se corta, queda si o si y no se toca, otras capas si se pueden saltar, pero esta es escencial que se establezca. 

Obedecer a las reglas de dependencias: "Dependency Rule" 
Los servicios externos tienen que satisfaser a las dependencias y nunca en la otra dirección. 




