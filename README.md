# Qué leer ahora

Una app que te recomienda qué leer según cómo estás hoy.

Todo vive en un solo archivo, `index.html`: las preguntas, la biblioteca, las reglas que eligen los libros y las pantallas.

## Cómo agregar un libro

1. Abre `index.html` y busca el bloque `// Cambio 16: voces latinoamericanas`. Ahí, dentro de `BOOKS.push(...)`, están los libros más recientes. Agrega el tuyo al final de esa lista, separado del anterior con una coma.
2. Copia este molde y llénalo:

```js
{ n: 152, t: 'Título', a: 'Autora o autor', tipo: 'N', ar: ['RUP', 'REL'], f: 'C', nv: 1, pp: 200,
  ay: 'para qué le sirve a quien lo lee (empieza en minúscula: la app lo pone después de «Te ayuda a»)',
  cu: 'Un aviso honesto: tono, temas delicados o para quién no es.', hi: false, ed: 3, aa: false }
```

3. Revisa que el título no exista ya en la biblioteca (busca el título en el archivo) y que el número `n` no se repita.

### Qué significa cada campo

| Campo | Qué es | Valores |
|---|---|---|
| `n` | Número único del libro | El siguiente libre |
| `t`, `a` | Título y autor, como aparecen en la edición en español | Texto |
| `tipo` | Qué clase de libro es | `N` novela o cuento · `L` poesía, memorias, cartas o ensayo literario · `F` filosofía · `D` divulgación (psicología, historia, ciencia) · `P` guía práctica |
| `ar` | Temas que trata. **El primero es el principal** | `SEN` sentido · `CRI` cambio de etapa · `REL` relaciones · `HAB` energía y hábitos · `MIE` miedo e inseguridad · `PRO` crecimiento · `ANS` preocupación · `RUP` pérdidas · `HER` el pasado que pesa · `LID` guiar a otros · `BLO` proyectos propios · `FIN` dinero · `COM` expresarse |
| `f` | Para qué momento sirve | `E` empezar con calma (solo sale cuando la persona está en un momento difícil) · `C` entender · `K` pasar a la acción · `P` profundizar (solo para quien lee mucho y no está en crisis) |
| `nv` | Qué tan exigente es leerlo | `1` introductorio · `2` intermedio · `3` avanzado (nunca sale en un momento difícil) |
| `pp` | Páginas de una edición en español que hayas comprobado | Número |
| `hi` | Tiene escenas o temas duros (violencia, muerte, abuso) | `true` o `false`. Si es `true`, no sale a quien está pasando un momento emocional muy pesado ni a quien cuida a alguien con mucha carga |
| `ed` | Prioridad editorial | `1` recomendado primero · `2` buena opción · `3` normal |
| `aa` | Es autoayuda | `true` o `false`. Si es `true`, no sale a quien dijo que prefiere evitar la autoayuda |

Dos marcas opcionales: `severo: true` para libros de tono duro o exigente (se dejan para después cuando la persona es nueva leyendo o está sensible) y `comercial: true` para autoayuda motivacional de éxito rápido (no sale a quien dijo «Algunos sí, otros no»).

### Cuidado con las etiquetas

Pon solo los temas de los que el libro habla de verdad, dos o tres como mucho. Cada etiqueta de más hace que el libro le salga a gente para la que no es: un libro de dinero con la etiqueta `ANS` termina en la lista de alguien que solo buscaba calmar una preocupación que no tiene nada que ver con el dinero.

### Antes de publicar

Abre la app, haz el cuestionario como alguien a quien le debería salir ese libro y comprueba que aparece. Si no aparece nunca, lo más común es que tenga demasiadas páginas: con más de 250 no le sale a quien casi no lee, y con más de 350 solo le sale a quien lee mucho. La otra causa común es que su tema principal no sea el que crees.
