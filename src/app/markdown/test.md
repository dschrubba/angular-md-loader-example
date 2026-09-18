## Marked
This project uses [marked](https://github.com/markedjs/marked), a low-level compiler for parsing Markdown without caching or blocking for long periods of time.
We use it to compile Markdown to HTML code. It is very easy to style. You also can implement [custom extensions](https://marked.js.org/using_advanced#extensions).

Demo: https://dschrubba.github.io/angular-md-loader-example/

## Source Code
Marked renders quotes as `<pre>` elements.
```
float Q_rsqrt( float number )
{
    long i;
    float x2, y;
    const float threehalfs = 1.5F;

    x2 = number * 0.5F;
    y  = number;
    i  = * ( long * ) &y;                       // evil floating point bit level hacking
    i  = 0x5f3759df - ( i >> 1 );               // what the fuck? 
    y  = * ( float * ) &i;
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//  y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

    return y;
}
);
```
*Source: https://github.com/id-Software/Quake-III-Arena/blob/dbe4ddb10315479fc00086f08e25d968b4b43c49/code/game/q_math.c#L552*

## Quotes
Marked renders quotes as `<blockquote>` elements.
> Je besser ein Mensch in der Umwelt orientiert ist, destoweniger
leicht wird er von den Dingen oder Vorfällen in ihr den Eindruck
der Unheimlichkeit empfangen.

*Freud, Sigmund (1919-003/1919): Das Unheimliche*

## Eum numquam
Commodi beatae repellendus sunt occaecati. Aut facilis aliquam commodi et debitis vel sed. Expedita cumque recusandae in. Vel et fuga enim sint rerum ea. Dolorem numquam at qui aliquam repudiandae. Eveniet nulla rem aspernatur nisi aut delectus. Quidem impedit et illo deleniti.
* aperiam assumenda a magni eveniet
* hic qui impedit quisquam enim
* ut voluptate laboriosam et rem

