import { Injectable } from '@nestjs/common';
import si from 'systeminformation';

const values = {
  cpuCurrentSpeed: '*',
  fullLoad: '*',
  services: '*',
  mem: 'total, available',
  os: '*',
  networkInterfaces: 'iface, ip4, mac, default',
  versions: 'apache, gcc, git, nginx, node, npm, python3',
};

@Injectable()
export class AppService {
  async getSystemInfo() {
    const main = await si.get(values);
  
    // only show the default network interface
    main.networkInterfaces = main.networkInterfaces.filter(
      (iface: { default: boolean }) => iface.default,
    );

    // library `free`/`used` exclude/include cache, so use `available` (MemAvailable) instead
    const gb = (n: number) => n / 1024 / 1024 / 1024;
    main.mem = {
      total: Number(gb(main.mem.total).toFixed(2)),
      free: Number(gb(main.mem.available).toFixed(2)),
      used: Number(gb(main.mem.total - main.mem.available).toFixed(2)),
    };

    return main;
  }
}
