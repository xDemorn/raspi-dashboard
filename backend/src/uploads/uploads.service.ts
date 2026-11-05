import { Injectable } from '@nestjs/common';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

export interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: string;
}

@Injectable()
export class UploadsService {
  listFiles(): UploadedFile[] {
    const root = process.env.UPLOADS_ROOT;
    if (!root) return [];

    return readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => {
        const stats = statSync(join(root, entry.name));
        return {
          name: entry.name,
          size: stats.size,
          uploadedAt: stats.birthtime.toISOString(),
        };
      });
  }
}
