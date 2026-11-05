import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { UploadsService } from './uploads.service.js';

describe('UploadsService', () => {
  const originalRoot = process.env.UPLOADS_ROOT;

  afterEach(() => {
    if (originalRoot === undefined) delete process.env.UPLOADS_ROOT;
    else process.env.UPLOADS_ROOT = originalRoot;
  });

  it('creates the uploads root when it does not exist', () => {
    const dir = join(tmpdir(), `uploads-${Date.now()}-${Math.random()}`);
    process.env.UPLOADS_ROOT = dir;

    new UploadsService().onModuleInit();

    expect(existsSync(dir)).toBe(true);
    rmSync(dir, { recursive: true, force: true });
  });

  it('does nothing when UPLOADS_ROOT is not set', () => {
    delete process.env.UPLOADS_ROOT;

    expect(() => new UploadsService().onModuleInit()).not.toThrow();
  });

  it('lists only the files in the uploads root with size and upload date', () => {
    const dir = join(tmpdir(), `uploads-${Date.now()}-${Math.random()}`);
    mkdirSync(dir, { recursive: true });
    mkdirSync(join(dir, 'sub'));
    writeFileSync(join(dir, 'a.txt'), 'hello');
    writeFileSync(join(dir, 'b.txt'), '');
    process.env.UPLOADS_ROOT = dir;

    const files = new UploadsService().listFiles();
    expect(files.map((f) => f.name).sort()).toEqual(['a.txt', 'b.txt']);

    const a = files.find((f) => f.name === 'a.txt');
    expect(a?.size).toBe(5);
    expect(a?.uploadedAt).toBeTruthy();

    rmSync(dir, { recursive: true, force: true });
  });
});
