import { Injectable } from '@nestjs/common';
import si from 'systeminformation';

const values = {
  cpuCurrentSpeed: '*',
  fullLoad: '*',
  services: '*',
  mem: 'total, used, free',
  os: '*',
  networkInterfaces: 'iface, ip4, mac, default',
  versions: 'apache, gcc, git, nginx, node, npm, postgresql, python3',
};

@Injectable()
export class AppService {
  async getSystemInfo() {
    const main = await si.get(values);
    // only show the default network interface
    main.networkInterfaces = main.networkInterfaces.filter(
      (iface: { default: boolean }) => iface.default,
    );
    return main;
  }
}
