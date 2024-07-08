import { GLSL, Shaders } from 'gl-react'

const lineShader = GLSL`
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;

    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        
        // Define three dark colors
        vec3 blackColor = vec3(0.020,0.020,0.020);  
        vec3 firstColor = vec3(0.100,0.120,0.185); 
        vec3 secondColor = vec3(0.052,0.165,0.121);
        
        // Create fading effects
        float fade1 = sin(u_time * 0.1) * 0.5 + 0.5;
        float fade2 = cos(u_time * 0.15) * 0.5 + 0.5;
        
        // Add small random movement
        vec2 movement = vec2(
            snoise(st + u_time * 0.05) * 0.01,
            snoise(st + u_time * 0.05 + 100.0) * 0.01
        );
        st += movement;
        
        // Generate noise for color blending (bigger blobs)
        float n1 = snoise(st * 0.5) * 0.5 + 0.5;
        float n2 = snoise((st + 50.0) * 0.4) * 0.5 + 0.5;
        
        // Blend colors based on noise and fading effects
        vec3 color1 = mix(blackColor, firstColor, n1 * fade1);
        vec3 color2 = mix(color1, secondColor, n2 * fade2);
        
        gl_FragColor = vec4(color2, 1.0);
    }
`

export const shaders = Shaders.create({
    background: {
        frag: lineShader,
    },
})
