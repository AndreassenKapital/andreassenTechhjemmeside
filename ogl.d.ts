declare module 'ogl' {
  export interface Vec3 {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): void;
  }

  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    constructor(options?: {
      alpha?: boolean;
      antialias?: boolean;
      dpr?: number;
      canvas?: HTMLCanvasElement;
    });
    setSize(width: number, height: number): void;
    render(options: { scene: Transform; camera?: Camera }): void;
  }

  export class Camera {
    gl: WebGLRenderingContext;
    fov: number;
    aspect: number;
    position: Vec3;
    constructor(gl: WebGLRenderingContext);
    perspective(options: { aspect: number }): void;
  }

  export class Transform {
    position: Vec3;
    scale: Vec3;
    rotation: Vec3;
    constructor();
    setParent(parent: Transform): void;
  }

  export class Mesh extends Transform {
    program: Program;
    geometry: Geometry;
    constructor(gl: WebGLRenderingContext, options: { geometry: Geometry; program: Program });
  }

  export class Plane extends Geometry {
    constructor(gl: WebGLRenderingContext, options?: { heightSegments?: number; widthSegments?: number });
  }

  export class Geometry {
    constructor();
  }

  export class Program {
    uniforms: { [key: string]: { value: any } };
    constructor(gl: WebGLRenderingContext, options: {
      vertex?: string;
      fragment?: string;
      uniforms?: { [key: string]: { value: any } };
      transparent?: boolean;
      depthTest?: boolean;
      depthWrite?: boolean;
    });
  }

  export class Texture {
    image: HTMLImageElement | HTMLCanvasElement | null;
    constructor(gl: WebGLRenderingContext, options?: { generateMipmaps?: boolean });
  }

  export class Triangle extends Geometry {
    constructor(gl: WebGLRenderingContext);
  }

  export class Vec2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): void;
  }
}


