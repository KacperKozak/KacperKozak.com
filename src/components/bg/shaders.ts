import { GLSL, Shaders } from 'gl-react'

const lineShader = GLSL`
    #version 300 es

    precision highp float;

    out vec4 color;

    uniform float time;
    uniform vec2 resolution;

    float lineCount = 2.0;

    vec3 hash33(vec3 p) { 
        float n = sin(dot(p, vec3(7, 157, 113)));
        return fract(vec3(2097152, 262144, 32768) * n) * 2.0 - 1.0;
    }

    float simplexNoise(in vec3 p) {
        vec3 i = floor(p + dot(p, vec3(0.333333)) );  p -= i - dot(i, vec3(0.166666)) ;
        vec3 i1 = step(p.yzx, p), i2 = max(i1, 1.0-i1.zxy); i1 = min(i1, 1.0-i1.zxy);    
        vec3 p1 = p - i1 + 0.166666, p2 = p - i2 + 0.333333, p3 = p - 0.5;
        vec4 v = max(0.5 - vec4(dot(p,p), dot(p1,p1), dot(p2,p2), dot(p3,p3)), 0.0);
        vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)), dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.)));
        return clamp(dot(d, v*v*v*8.)*1.732 + .5, 0., 1.);
    }

    #define PI 3.14159265359

    vec2 smoothRepeatStart(float x, float size) {
        return vec2(
            mod(x - size / 2., size),
            mod(x, size)
        );
    }

    float smoothRepeatEnd(float a, float b, float x, float size) {
        return mix(a, b,
            smoothstep(
                0., 1.,
                sin((x / size) * PI * 2. - PI * .5) * .5 + .5
            )
        );
    }

    void main()
    {
        // Square uv centered and sclead to the screen height
        vec2 uv = (-resolution.xy + lineCount * gl_FragCoord.xy) / resolution.y;

        // Zoom in a bit
        uv /= 2.0;


        float repeatSize = 4.;
        float x = uv.x - mod((time*100.0) / mix(1.0, 8.0, time*10.0), repeatSize / 2.);
        float y = uv.y;

        vec2 ab; // two sample points on one axis

        float noise;
        float noiseA, noiseB;

        // Blend noise at different frequencies, moving in
        // different directions

        ab = smoothRepeatStart(x, repeatSize);
        noiseA = simplexNoise(16.+vec3(vec2(ab.x, uv.y) * 0.9, 0)) * .5;
        noiseB = simplexNoise(16.+vec3(vec2(ab.y, uv.y) * 0.9, 0)) * .5;
        noise = smoothRepeatEnd(noiseA, noiseB, x, repeatSize);

        noise *= 0.55;
    
        // Blend with a linear gradient, this gives the isolines a
        // common orientation (try changing .6 to 1.)
        noise = mix(noise, dot(uv, vec2(-.66,1.)*.4), .6);


        // Create anti-aliased even weight isolines from the noise...

        // Break the continuous noise into steps
        float spacing = 1./50.;
        float lines = mod(noise, spacing) / spacing;

        // Convert each step into a bump, or, the sawtooth wave
        // into a triangle wave:
        //
        //     /|    /|
        //   /  |  /  |
        // /    |/    |
        //       
        // to:   
        //       
        //   /\    /\
        //  /  \  /  \ 
        // /    \/    \ 
        lines = min(lines * 2., 1.) - max(lines * 2. - 1., 0.);

        // Scale it by the amount the noise varies over a pixel,
        // factoring in the spacing scaling that was applied.
        // noise is used because it's continuous, if we use lines we'd
        // see stepping artefacts.
        lines /= fwidth(noise / spacing);

        // Double to occupy two pixels and appear smoother
        lines /= 2.;

        // Offset the line by the weight
        lines = 1. - lines;


        float red = lines*(sin(time*100.0) + 1.0);
        float green = lines*(cos(time*70.0) + 1.0);
        float blue = lines*(sin(time*50.0) + 1.0);
        vec3 colorLines = vec3(red, green, blue);

        float red2 = noise*(sin(time*100.0) + 1.0);
        float green2 = noise*(cos(time*70.0) + 1.0);
        float blue2 = noise*(sin(time*50.0) + 1.0);
        vec3 colorNoise = vec3(red2, green2, blue2);
        
        color = mix(
            vec4(normalize(vec3(lines))*2.0, 1.0),
            vec4(colorNoise*0.7, 1.0),
            0.85
        );
    }
`

export const shaders = Shaders.create({
    helloBlue: {
        frag: lineShader,
    },
})
